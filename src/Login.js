import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./App.css";

const Login = () => {
    return (
        <div className="login-container">
            <div className="form-container">
                <h1 className="form-title">LOGIN</h1>
                <div className="p-fluid">
                    {/* Campo de Usuário */}
                    <div className="p-field p-input-icon-left">
                        <i className="pi pi-user" />
                        <InputText id="username" type="text" placeholder="USUÁRIO" />
                    </div>

                    {/* Campo de Senha */}
                    <div className="p-field p-input-icon-left">
                        <i className="pi pi-lock" />
                        <InputText id="password" type="password" placeholder="SENHA" />
                    </div>
                    <div>
                        <Link to="/recuperarSenha" className="forgot-password-link">Esqueci minha senha</Link>
                    </div>
                </div>

                {/* Seção de Acesso com Google e Facebook */}
                <h2 className="access-title">ACESSAR COM</h2>
                <div className="social-buttons">
                    <Button
                        label="Google"
                        icon="pi pi-google"
                        className="p-button-outlined p-button-secondary social-button"
                    />
                    <Button
                        label="Facebook"
                        icon="pi pi-facebook"
                        className="p-button-outlined p-button-secondary social-button"
                    />
                </div>

                {/* Botões de Criar Conta e Acessar */}
                <div className="action-buttons">
                    <Link to="/cadastroUsuario">
                        <Button
                            label="Criar Conta"
                            className="p-button-text create-account-button"
                        />
                    </Link>
                    <Link to="/cadastroSite">
                        <Button label="Acessar" className="p-button p-button-dark access-button" />
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default Login;