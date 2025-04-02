import React from 'react';

//IMPORTAÇÕES DE ESTILIZAÇÃO
import 'primereact/resources/themes/saga-blue/theme.css';  // Tema do PrimeReact
import 'primereact/resources/primereact.min.css';         // Componentes do PrimeReact
import 'primeicons/primeicons.css';                       // Ícones do PrimeReact
import './App.css'; // Arquivo CSS para estilização

//IMPORTAÇÕES DE ROTAS
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar'; // Importando a barra de navegação
import HomePage from './HomePage';
import Login from './Login';
import CadastroUsuario from './CadastroUsuario';
import PaginaModelo from './PaginaModelo';
import CadastroSite from './CadastroSite'; // Importando o componente CadastroSite

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    {/* Página inicial */}
                    <Route path="/" element={<HomePage />} />
                    <Route path='/navbar' element={<NavBar />} />
                    <Route path="/login" element={<Login />} />
                    <Route path='/cadastroUsuario' element={<CadastroUsuario />} />
                    <Route path='/cadastroSite' element={<CadastroSite />} />
                    <Route path='/paginaModelo' element={<PaginaModelo />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;