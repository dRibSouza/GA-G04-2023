import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import { Login } from '../pages/login'
import { Home } from '../pages/home'
import { Navbar } from '../components/Navbar';
import { Cadastro } from '../pages/cadastro';
import { Cadastro2 } from '../pages/cadastro2';


export const AppRoutes = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/login' exact element={<Login />} />
                <Route path='/servicos' exact element={<Home />} />
                <Route path='/cadastro' exact element={<Cadastro />} />
                <Route path='/cadastro2' exact element={<Cadastro2 />} />
            </Routes>
        </Router>
    );
} 
