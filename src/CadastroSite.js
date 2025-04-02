import React from 'react';
import './App.css';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom'


const CadastroSite = () => {
    return (
        <div className="cadastro-container">
            <div className="cadastro-form">
                <h1 className="cadastro-title">DADOS DO SITE:</h1>
                <form>
                    <div className="p-field-site">
                        <label htmlFor="nomeSite">Nome do Site:</label>
                        <input type="text" id="nomeSirw" name="nomeSite" placeholder="Digite o nome da empresa" className="p-inputtext-site" />
                    </div>
                    <div className="p-field-site">
                        <label htmlFor="sobre">Sobre empresa:</label>
                        <input type="text" id="sobre" name="sobre" placeholder="Digite informações sobre a empresa" className="p-inputtext-site" />
                    </div>
                    <div className="p-field-site">
                        <label htmlFor="endereco">Endereço:</label>
                        <input type="text" id="endereco" name="endereco" placeholder="Digite o endereço da empresa" className="p-inputtext-site" />
                    </div>
                    <div className="p-field-site">
                        <label htmlFor="telefone">Telefone empresa:</label>
                        <input type="text" id="telefone" name="telefone" placeholder="Digite o telefone da empresa" className="p-inputtext-site" />
                    </div>
                    <div className="p-field-site">
                        <label htmlFor="telefone2">2° Telefone empresa:</label>
                        <input type="text" id="telefone2" name="telefone2" placeholder="Digite o segundo telefone da empresa" className="p-inputtext-site" />
                    </div><br />
                    <div className="p-field-site-button">
                        <Button label="Cancelar" icon="pi pi-times" className="p-button-raised p-button-danger" type="button" onClick={() => window.location.href = '/cadastroUsuario'} />


                        <Link to="/PaginaModelo">
                            <Button label="Cadastrar" icon="pi pi-check" className="p-button-raised p-button-success" type="submit" />
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CadastroSite;