import logo from "../assets/logo_franca_medical.svg"
import { Link } from "react-router-dom";
import './LoginComponent.css'

import React, { useState, useContext } from "react";

import { AuthContext } from "../contexts/auth";

const LoginComponent = () => {
    const { authenticated, login} = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", { email, password });
        
        login(email, password);
    };

    return (
          
        <div className="container">

            <p>{String(authenticated)}</p>

            <div className="container-login">
                <div className="wrap-login">
                    <form  className="login-form">
                        <span className="login-form-title">Bem vindo!</span>
                        <from classeName="form" onSubmit={handleSubmit}>

                            <span className="login-form-title">
                                <img src={logo} alt="logo Franca Medical" />
                            </span>

                            <div className="wrap-input">
                                <input className={email !== "" ? 'has-val input': 'input'}
                                type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                                <span className="focus-input" data-placeholder="Email"></span>
                            </div>

                            <div className="wrap-input">
                                <input className={password !== "" ? 'has-val input': 'input'}
                                type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                                <span className="focus-input" data-placeholder="Password"></span>
                            </div>

                            <div className="container-login-form-btn">
                                <button className="login-form-btn">Login</button>                                
                            </div>

                            <div className="text-center">
                                <span className="txt1">Não possui conta?</span>
                                <Link to="/cadastro" className="txt2">Criar Conta.
                                </Link>
                            </div>
                        </from>

                    </form>
                </div>
            </div>
      </div>
    );
};

export default LoginComponent;