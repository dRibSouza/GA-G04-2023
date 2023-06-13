import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export const AuthContext = createContext();



export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        // Toda vez que inicializar, verificar se há usuário
        const userToken = JSON.parse(localStorage.getItem('user_token'));
    
        if (userToken) {
          await api.get('/Users')
            .then(res => res.data.find(u => u.email === userToken.email))
            .then(async u => setUser(await u))
            .catch(err => console.log(err));
        }
    
      }, []);
    
}
    
  async function login(email, password) {
    // Pega o usuario
    const hasUser = await api.get('/Users')
      .then(res => res.data.find(u => u.email === email && u.password === password))
      .catch(err => console.log(err));

    if (hasUser) {
      // Verifica e se existe ele coloca no localStorage
      const token = Math.random().toString(36).substring(2);
      localStorage.setItem('user_token', JSON.stringify({ email, token }))
      setUser(await hasUser);
      return;
    } else {
      return 'Email ou senha incorretos!';
    }
  }


  async function registrar(nome, cpf, email, password) {
    // Verifica se já há esse email cadastrado
    const hasUser = await api.get('/Users')
      .then(res => res.data.some(u => u.email === email))
      .catch(err => console.log(err));
    
    if (hasUser) return 'Já há usuário com esse Email cadastrado';

    await api.post('/Users', {
      email: email,
      senha: password,
      nome: nome,
      cpf: cpf,
    })
        
      .then(async res => {
        const token = Math.random().toString(36).substring(2);
        const Email = res.data.email;
        localStorage.setItem('user_token', JSON.stringify({ Email, token }))
        setUser(await res.data);
      })
      .catch(err => console.log(err));

    return;
}

    
  async function signout() {
    // deslogar
    setUser(null);
    localStorage.removeItem('user_token');
  }


  return (
    <AuthContext.Provider
      value={{
        user, logado: !!user,
        login, registrar, signout,
        atualizarPerfil,cadastrarUserInterno
      }}
    >
      {children}
    </AuthContext.Provider>
  );

