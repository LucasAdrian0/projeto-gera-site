import React, { useRef, useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import image from '../src/Assets/logoEmpresa.jpg';

const services = [
    { id: 1, title: 'Desenvolvimento Web', description: 'Criação de sites modernos e responsivos.' },
    { id: 2, title: 'Apps Mobile', description: 'Aplicativos personalizados para Android e iOS.' },
    { id: 3, title: 'Gestão de Mídias', description: 'Gerenciamento estratégico para redes sociais.' },
    { id: 4, title: 'E-commerce', description: 'Lojas virtuais com integração de pagamento.' },
    { id: 5, title: 'SEO & Marketing', description: 'Otimização e campanhas digitais.' }
];

const publicoAlvo = [
    { id: 1, text: 'Empresas que buscam digitalização' },
    { id: 2, text: 'Empreendedores que querem um app' },
    { id: 3, text: 'Negócios que desejam maior presença online' }
];

const segmentos = [
    "Comércio Local",
    "Salão de Cabeleireiro",
    "Pet Shop",
    "Restaurantes",
    "Escritórios"
];

const PaginaModelo = () => {
    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleMouseLeave = () => setIsDragging(false);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div>
            <header className="appbar">
                <div className="appbar-left">
                    <img src={image} alt="Descrição da imagem" className="logo" />
                </div>
                <nav className="appbar-right">
                    <Link to="/home" className="nav-link">Home</Link>
                    <Link to="/quem-somos" className="nav-link">Quem Somos</Link>
                    <Link to="/contato" className="nav-link">Contato</Link>
                </nav>
            </header>

            <div className="content-container">
                <div className="content-box">
                    <div className="left-box">
                        <h2>Nosso Principal Serviço</h2>
                        <p>
                            Na G7 Design Tech, oferecemos soluções completas para desenvolvimento de sistemas,
                            aplicativos e websites, garantindo inovação e alta performance para nossos clientes.
                        </p>
                    </div>
                    <div className="right-box">
                        <h2>Quem Somos</h2>
                        <p>
                            A G7 Design Tech é uma empresa inovadora especializada em design, gestão de mídias sociais
                            e tecnologia. Nossa missão é transformar ideias em realidade e impulsionar negócios no mundo digital.
                        </p>
                    </div>
                </div>
                <div className="wave"></div>
            </div>

            <section className="services-container">
                <h2>Serviços</h2>
                <div className="services-wrapper">
                    <div
                        className="services-carousel"
                        ref={carouselRef}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        style={{ display: 'flex', overflow: 'hidden', cursor: isDragging ? 'grabbing' : 'grab', gap: '20px' }}
                    >
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="service-card"
                                style={{
                                    flex: '0 0 30%',
                                    transition: 'transform 0.3s ease-in-out',
                                    userSelect: 'none',
                                }}
                            >
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="wave-bottom"></div>
            </section>

            {/* Nova onda abaixo dos serviços */}

            {/* Público Alvo */}
            <div className="wave-container">
                <h2 className="publico-alvo-title">Público Alvo</h2>
                <div className="publico-alvo-wrapper">
                    {publicoAlvo.map((item) => (
                        <div key={item.id} className="publico-alvo-card">
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                {/* Seu conteúdo principal aqui */}

                {/* Rodapé */}
                <footer className="footer">
                    <div className="footer-container">
                        {/* Lado esquerdo (cinza escuro) */}
                        <div className="footer-left">
                            <div className="footer-links">
                                <div className="footer-section">
                                    <h3>Empresa</h3>
                                    <ul>
                                        <li><a href="#">Sobre Nós</a></li>
                                        <li><a href="#">Serviços</a></li>
                                        <li><a href="#">Contato</a></li>
                                    </ul>
                                </div>
                                <div className="footer-section">
                                    <h3>Segmento</h3>
                                    <ul>
                                        {segmentos.map((item, index) => (
                                            <li key={index}><a href="#">{item}</a></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="footer-section">
                                    <h3>Links</h3>
                                    <ul>
                                        <li><a href="#">WhatsApp</a></li>
                                        <li><a href="#">Instagram</a></li>
                                        <li><a href="#">LinkedIn</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Lado direito (branco) */}
                        <div className="footer-right">
                            <h3>Contato</h3>
                            <p>Endereço: Rua Exemplo, 123 - Santa Cruz do Rio Pardo, SP</p>
                            <p>Email: gg405246@gmail.com</p>
                            <p>Telefone: (14) 99785-8866</p>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="footer-bottom">
                        <p>Copyright © G7 DESIGN TECH 2025-2025 | Todos os direitos reservados.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default PaginaModelo;
