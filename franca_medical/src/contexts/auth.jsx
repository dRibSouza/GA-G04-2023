import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import {api, createSession} from "../services/api";

export const AuthContext = createContext();



export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoverdUser = localStorage.getItem(['user']);
        
        if(recoverdUser){
            setUser(JSON.parse(recoverdUser));
        }

        setLoading(false);
    }, []);

    const login = async ( email, password) => {
        const response = await createSession (email, password);

        console.log("login", response.data);

        const loggedUser = response.data.user;
        const token = response.data.token;

        localStorage.setItem("user", JSON.stringify(loggedUser));

        if(password === "secret"){
            setUser(loggedUser);
            navigate("/");
        };
    };

    const logout = () => {
        console.log("logout");
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
    };

    return(
        <AuthContext.Provider
            value={{ authenticated: !!user, user, loading, login,
            logout }}
        >
        {children}
        </AuthContext.Provider>
    )
}