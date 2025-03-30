import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from 'primereact/password';
import { Link } from "react-router-dom";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./App.css";



const CadastroUsuario = () => {

    const [value, setValue] = useState(""); // Estado para a senha


    // Cabeçalho do campo de senha
    const header = <h6>Escolha uma senha forte</h6>;

    // Rodapé do campo de senha
    const footer = (
        <div>
            <small>
                Sugestões: use letras maiúsculas, minúsculas, números e símbolos.
            </small>
        </div>
    );
    /* Função para formatar o CPF */
    // O CPF deve ser formatado como XXX.XXX.XXX-XX
    const handleCpfChange = (e) => {
        let value = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        e.target.value = value;
    };

    return (


        <div className="login-container">
            <div className="form-container">
                <h1 className="form-title">CRIAR CONTA</h1>
                <div className="p-fluid">
                    {/* Campo de Usuário */}
                    <div className="p-field p-input-icon-left">
                        <i className="pi pi-user" />
                        <InputText id="username" type="text" placeholder="USER" />
                    </div>

                    {/* Campo de Email */}
                    <div className="p-field p-input-icon-left">
                        <i className="pi pi-google" />
                        <InputText id="email" type="email" placeholder="EMAIL" />
                    </div>

                    {/* Campo de CPF */}
                    <div className="p-field p-input-icon-left">
                        <i className="pi pi-id-card" />
                        <InputText
                            id="cpf"
                            placeholder="CPF"
                            maxaLength={14} // Limita o tamanho máximo para o CPF formatado
                            onChange={handleCpfChange}
                        />
                    </div>

                    {/* Campo de Senha */}
                    <div className="p-field p-input-icon-left">
                        <i className="pi pi-lock" />
                        <Password
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="SENHA"
                            header={header}
                            footer={footer}
                            toggleMask
                            inputClassName="custom-password-input" // Classe personalizada para ajustar o tamanho
                        />
                    </div>

                    {/* Campo de Confirmar Senha */}
                    <div className="p-field p-input-icon-left">
                        <i className="pi pi-lock" />
                        <InputText id="confirm-password" type="password" placeholder="CONFIRMAR SENHA" />
                    </div>
                </div>

                {/* Botões de Suporte e Criar */}
                <div className="access-button-usuario">
                    {/*<Button
                        label="SUPORTE"
                        className="p-button-text create-account-button"
                    />*/}
                    <Link to="/CadastroSite">
                        <Button label="CRIAR" className="access-button-usuario" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CadastroUsuario;