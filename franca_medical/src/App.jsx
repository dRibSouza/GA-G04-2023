import React from 'react';
import './App.css';

import AppRoutes from './routes';

function App () {
  return (
    // Para fazer um header fixo para todos as páginas, podemos colocar ele aqui.<br/> // correção ele vai na página de rotas ao invés daqui :[
    <div classeName="app">

        <AppRoutes/>

    </div>    
  );
}

export default App;


