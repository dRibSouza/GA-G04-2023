import logo from "../../assets/logo_franca_medical.svg"
import { Link } from "react-router-dom";
import './style.css'
import { useState } from "react";

export const Cadastro = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nome, setNome] = useState("")
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
                            <input className={nome !== "" ? 'has-val input': 'input'}  type="password" value={nome} onChange={e => setNome(e.target.value)} />
                            <span className="focus-input" data-placeholder="Nome Completo"></span>
                        </div>
                        <div className="wrap-input">
                            <input className={email !== "" ? 'has-val input': 'input'} type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                            <span className="focus-input" data-placeholder="Email"></span>
                        </div>
                        <div className="wrap-input">
                            <input className={password !== "" ? 'has-val input': 'input'}  type="password" value={password} onChange={e => setPassword(e.target.value)} />
                            <span className="focus-input" data-placeholder="Password"></span>
                        </div>
                        <div className="container-login-form-btn">
                            <Link to='/' className="login-form-btn"> <button className="login-form-btn">Cadastrar</button></Link>
                            
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