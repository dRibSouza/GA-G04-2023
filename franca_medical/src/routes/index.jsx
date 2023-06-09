import { useState } from 'react';

import {BrowserRouter as Router , Routes, Route, Navigate} from 'react-router-dom'

import { Login } from '../pages/login'
import { Home } from '../pages/home'
import { Navbar } from '../components/Navbar';
import { Cadastro } from '../pages/cadastro';

import { AuthContext, AuthProvicer } from '../contexts/auth';

const AppRoutes = () => {  

    return (
        <Router>
            <Navbar/>
            <AuthProvicer>
                <Routes>                  
                    <Route path='/' exact element={<Home />} />
                    <Route path='/login' exact element={<Login />} />
                    <Route path='/servicos' exact element={<Home />} />
                    <Route path='/cadastro' exact element={<Cadastro />} />
                </Routes>
            </AuthProvicer>
        </Router>
    );
};

export default AppRoutes;


