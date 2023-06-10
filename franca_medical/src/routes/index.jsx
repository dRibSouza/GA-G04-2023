import React, { useContext } from 'react';

import {BrowserRouter as Router , Routes, Route, Navigate} from 'react-router-dom'

import { Login } from '../pages/login'
import { Home } from '../pages/home'
import { Navbar } from '../components/Navbar';
import { Cadastro } from '../pages/cadastro';

import { AuthProvider, AuthContext } from '../contexts/auth';
import { Children } from 'react';


const AppRoutes = () => {
    const Private = ({ children}) => {
        const { authenticated, loading } = useContext(AuthContext);

        if(loading){
            return <div className="loading">Carregando...</div>
        }

        if(!authenticated){
            return <Navigate to="/login" />
        }

        return Children;
      
    };

    return (
        <Router>
            <Navbar/>
            <AuthProvider>

                <Routes>                  
                    <Route path='/' exact element={
                        <Private>
                            <Home />
                        </Private>
                    } />

                    <Route path='/login' exact element={<Login />} />
                    
                    <Route path='/servicos' exact element={<Home />} />
                    
                    <Route path='/cadastro' exact element={<Cadastro />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default AppRoutes;


