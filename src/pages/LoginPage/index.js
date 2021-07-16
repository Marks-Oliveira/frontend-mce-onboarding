import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../services/api';

import * as S from './styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const LoginPage = () => {
    const [emailOrCpf, setEmailOrCpf] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const history = useHistory();

    useEffect(() => {
        if (window.localStorage.getItem("accessToken") !== null) {
            history.replace("/profile");
        }
    }, [history])

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (event) => {
        event.preventDefault();
    
        const body = {
          emailOrCpf: emailOrCpf,
          password: password
        };
    
        try {
          const response = await api.post("/user/login", body);
      
          window.localStorage.setItem("accessToken", response.data.accessToken);
          history.replace("/profile");
        } catch (error) {
            toast.error(error?.response?.data?.error || "Ops... Ocorreu um erro");
        }
    };

    return (
        <S.Wrapper>
            <S.TransparentScreen>
                <S.Container>
                    <S.Content>
                        <h1>ENTRAR</h1>
                        <p>O seu passaporte para o futuro.</p>
                        <S.Inputs>
                            <form onSubmit={handleLogin}>
                                <TextField
                                    value={emailOrCpf}
                                    onChange={e => setEmailOrCpf(e.target.value)}
                                    label="E-mail ou CPF"
                                    placeholder="Seu email ou CPF"
                                    fullWidth
                                    required
                                    margin="normal"
                                    style={{ marginBottom: "1.5rem" }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    autoFocus
                                />
                                <TextField
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    type={showPassword ? 'text' : 'password'}
                                    label="Senha"
                                    fullWidth
                                    required
                                    margin="normal"
                                    placeholder="Sua senha"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={handleClickShowPassword}>
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    inputProps={{
                                        minLength: 6
                                    }}
                                />
                                <Button 
                                    variant="contained"
                                    size="large"
                                    type="submit"
                                    fullWidth
                                    style={{
                                        height: "3rem",
                                        background: "#7F63F4",
                                        color: "#fff",
                                        fontWeight: "bold",
                                        fontSize: "0.8rem",
                                        marginTop: "2rem"
                                    }}
                                >
                                    Login
                                </Button>
                            </form>
                        </S.Inputs>
                        <S.Register>
                            <div>
                                <S.Text>Não possui uma conta?</S.Text> 
                                <Link 
                                    to="/register"
                                    style={{ color: 'inherit', textDecoration: 'inherit', marginTop: "-0.2rem"}}
                                >
                                    <S.RegisterLink>Registrar-se</S.RegisterLink>
                                </Link>
                            </div>
                            <div>
                                <Link 
                                    to="/recover-password"
                                    style={{ color: 'inherit', textDecoration: 'inherit', marginTop: "-0.1rem"}}
                                >
                                    <S.RecoverPasswordLink>Esqueceu a senha?</S.RecoverPasswordLink>
                                </Link>
                            </div>
                        </S.Register>
                    </S.Content>
                </S.Container>
            </S.TransparentScreen>
        </S.Wrapper>
    );
};

export default LoginPage;
