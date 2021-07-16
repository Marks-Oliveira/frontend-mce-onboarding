import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import InputMask from 'react-input-mask';

import api from '../../services/api';

import * as S from './styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const history = useHistory();

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const onlyNumbers = (str) => str.replace(/[^0-9]/g, '');
    const handleChangeCpf = (event) => {
        setCpf(onlyNumbers(event.target.value));
    };

    const handleRegisterUser = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Senha e Confirmar senha não são iguais!");
            return;
        };

        const body = {
            email: email,
            name: userName,
            cpf: cpf,
            password: password
        };

        try {
            const response = await api.post("/user/signup", body);
        
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
                        <h1>CADASTRO</h1>
                        <div>
                            <form onSubmit={handleRegisterUser}>
                                <TextField
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    type="email"
                                    label="E-mail"
                                    placeholder="exemplo@email.com"
                                    fullWidth
                                    required
                                    margin="normal"
                                    style={{ marginBottom: "0.3rem" }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    autoFocus
                                />
                                <TextField
                                    value={userName}
                                    onChange={e => setUserName(e.target.value)}
                                    label="Nome"
                                    placeholder="Ex.: João dos Santos"
                                    fullWidth
                                    required
                                    margin="normal"
                                    style={{ marginBottom: "0.3rem" }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <InputMask
                                    mask="999.999.999-99"
                                    value={cpf}
                                    onChange={handleChangeCpf}
                                >
                                    {() => <TextField
                                        label="CPF"
                                        type="text"
                                        placeholder="123.456.789-00"
                                        fullWidth
                                        required
                                        margin="normal"
                                        style={{ marginBottom: "0.3rem" }}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />}
                                </InputMask>
                                <TextField
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    type={showPassword ? 'text' : 'password'}
                                    label="Senha"
                                    fullWidth
                                    required
                                    margin="normal"
                                    style={{ marginBottom: "0.3rem" }}
                                    placeholder="******"
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
                                <TextField
                                    value={confirmPassword}
                                    onChange={e => setConfirmPassword(e.target.value)}
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    label="Confirmar senha"
                                    fullWidth
                                    required
                                    margin="normal"
                                    placeholder="******"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={handleClickShowConfirmPassword}>
                                                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
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
                                        marginTop: "1.5rem"
                                    }}
                                >
                                    Cadastrar
                                </Button>
                            </form>
                        </div>
                        <S.Login> 
                            <S.Text>Já possui uma conta?</S.Text> 
                            <Link 
                                to="/"
                                style={{ color: 'inherit', textDecoration: 'inherit', marginTop: "-0.2rem"}}
                            >
                                <S.LoginLink>Entrar</S.LoginLink>
                            </Link>
                        </S.Login>
                    </S.Content>
                </S.Container>
            </S.TransparentScreen>
        </S.Wrapper>
    );
};

export default RegisterPage;
