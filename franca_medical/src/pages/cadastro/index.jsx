import logo from "../../assets/logo_franca_medical.svg"
import { Link } from "react-router-dom";
import './style.css'
import React, { useState } from "react";
import validarCPF from "../../components/CpfValidation"

export const Cadastro = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmepassword, setConfirmepassword] = useState("")
    const [nome, setNome] = useState("")
    const [cpf, setCPF] = useState("")
    const [cpfErr, setCpfErr] = useState(false)
    const handleBlur = () => {
        validate();
        setCPF(cpf);
    };

    const validate = () => {
        // event.preventDefault();
        if (!validarCPF(cpf)) {
            setCpfErr(true)
  
        } else {
            setCpfErr(false)
            
        }
    }

    console.log({cpf})
    return (
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <form  className="login-form">

                        <span className="login-form-title">Cadastrar</span>
                        <span className="login-form-title">
                            <img src={logo} alt="logo Franca Medical" />
                        </span>

                        <div className="wrap-input">
                            <input className={nome !== "" ? 'has-val input': 'input'}
                            type="text" value={nome} onChange={e => setNome(e.target.value)} />
                            <span className="focus-input" data-placeholder="Nome Completo"></span>  
                        </div>

                        <div className="wrap-input">
                            <input className={cpf !== '' ? 'has-val input' : 'input'}
                            type="text" value={cpf} onBlur={validate} onChange={e => setCPF(e.target.value)} />
                            <span className={cpfErr !== true ? 'focus-input' : 'focus-input-incorrect'} data-placeholder="CPF"></span>
                            
                        </div>
                        <div className="wrap-input">
                            <input className={email !== "" ? 'has-val input': 'input'}
                            type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                            <span className="focus-input" data-placeholder="Email"></span>
                        </div>

                        <div className="wrap-input">
                            <input className={password !== "" ? 'has-val input': 'input'}
                            type="password" value={password} onChange={e => setPassword(e.target.value)} />
                            <span className="focus-input" data-placeholder="Password"></span>
                        </div>

                        <div className="wrap-input">
                            <input className={confirmepassword !== "" ? 'has-val input': 'input'}
                            type="confirmepassword" value={confirmepassword} onChange={e => setConfirmepassword(e.target.value)} />
                            <span className="focus-input" data-placeholder="Confirmepassword"></span>
                        </div>

                        <div className="container-login-form-btn">
                            <button className="login-form-btn" >Cadastrar</button>
                        </div>

                        <div className="text-center">
                            <span className="txt1">Já possui um conta?</span>
                            <Link to="/login" className="txt2">Realizar Login</Link>
                        </div>
                    </form>
                </div>
            </div>
      </div>
    );
}