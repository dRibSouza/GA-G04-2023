import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import { Login } from '../pages/login'
import { Home } from '../pages/home'

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/login' exact element={<Login />} />
                <Route path='/servicos' exact element={<Home />} />
            </Routes>
        </Router>
    );
} 
