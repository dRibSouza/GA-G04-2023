import React from 'react';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import { Login } from '../pages/login'
import { Home } from '../pages/home'
import { Navbar } from '../components/Navbar';
import { Cadastro } from '../pages/cadastro';



const AppRoutes = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/servicos' element={<Home />} />
                <Route exact path='/cadastro' element={<Cadastro />} />

            </Routes>
        </Router>
    );
} 

export default AppRoutes;