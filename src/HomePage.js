import React from 'react';
import NavBar from './NavBar';
import image from '../src/Assets/image.png'; // Certifique-se de que o caminho está correto
import './App.css'; // Arquivo CSS para estilização

function HomePage() {
  return (
    <div>
      <NavBar /> {/* Incluindo a barra de navegação */}

      {/* Conteúdo principal */}
      <div className="homepage-content">
        <div className="homepage-text">
          <h1>Construa Seu Site em Minutos: Simples, Rápido</h1>
          <p>
            Crie seu site de forma fácil e rápida, sem complicação! Nossa plataforma intuitiva permite que você construa um site profissional em poucos minutos, com ferramentas simples e recursos poderosos. Comece agora e tenha sua presença online no ar de maneira ágil e eficiente!
          </p>
        </div>
        <div className="homepage-image">
          <img src={image} alt="Descrição da imagem" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;