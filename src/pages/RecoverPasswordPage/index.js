import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../services/api';

import * as S from './styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const RecoverPasswordPage = () => {
    const [email, setEmail] = useState("");

    const handleRecoverPassword = async (event) => {
        event.preventDefault();
        
        const body = {
          email: email
        };
    
        let response = "";
        if (!response) {
            toast.success("Link sendo enviado para seu email");
        };

        try {
          response = await api.post("user/forgot-password", body);

          toast.success("Link enviado!!!");
          setEmail("");
        } catch (error) {
          toast.error(error?.response?.data?.error || "Ops... Ocorreu um erro");
        }
    };

    return (
        <S.Wrapper>
            <S.TransparentScreen>
                <S.Container>
                    <S.Content>
                    <h1>ESQUECI MINHA SENHA</h1>
                        <S.Inputs>
                            <form onSubmit={handleRecoverPassword}>
                                <TextField
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    label="E-mail"
                                    placeholder="Seuemail@exemplo.com"
                                    type="email"
                                    fullWidth
                                    required
                                    margin="normal"
                                    style={{ marginTop: "3rem", marginBottom: "2.5rem" }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    autoFocus
                                />
                                <Button 
                                    variant="contained"
                                    type="submit"
                                    size="large"
                                    fullWidth
                                    style={{
                                        height: "3rem",
                                        background: "#7F63F4",
                                        color: "#fff",
                                        fontWeight: "bold",
                                        fontSize: "0.8rem",
                                        marginTop: "1.8rem"
                                    }}
                                >
                                    Enviar
                                </Button>
                            </form>
                            <S.Login> 
                                <S.Text>Já possui uma conta?</S.Text> 
                                <Link 
                                    to="/"
                                    style={{ color: 'inherit', textDecoration: 'inherit', marginTop: "-0.2rem"}}
                                >
                                    <S.LoginLink>Entrar</S.LoginLink>
                                </Link>
                            </S.Login>
                        </S.Inputs>
                    </S.Content>
                </S.Container>
            </S.TransparentScreen>
        </S.Wrapper>
    );
};

export default RecoverPasswordPage;
