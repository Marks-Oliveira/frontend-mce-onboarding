import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import * as S from './styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';

const EditRegister = ({ displayEditModal, user, getRegisters }) => {
    const [email, setEmail] = useState(user.email);
    const [userName, setUserName] = useState(user.name);
    const [cpf, setCpf] = useState(user.cpf);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

    const handleEditUser = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Senha e Confirmar senha não são iguais!");
            return;
        };

        const token = window.localStorage.getItem('accessToken');

        const config = {
            headers: {
                Authorization: token
            }
        };

        const body = {
            email: email,
            name: userName,
            cpf: cpf,
            password: password
        };

        try {
            await api.put(`/user/update/${user.id}`, body, config);
            toast.success("Usuário atualizado com sucesso!");

            if (user.role === "ADMIN") {
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            
            } else if (!getRegisters && user.role === "NORMAL") {
                displayEditModal();
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
                
            } else {
                getRegisters();
                displayEditModal();
            }
        } catch (error) {
            toast.error(error?.response?.data?.error || "Ops... Ocorreu um erro");
        }
    };

    return (
        <S.Wrapper>
            <S.Container>
                <S.Content>
                    <h1>EDITAR</h1>
                    <div>
                        <form onSubmit={handleEditUser}>
                            <TextField
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                label="E-mail"
                                type="email"
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
                                placeholder="***** (Se desejar altere a senha)"
                                fullWidth
                                margin="normal"
                                style={{ marginBottom: "0.3rem" }}
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
                                placeholder="***** (Confirme a nova senha)"
                                fullWidth
                                margin="normal"
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
                                Confirmar
                            </Button>
                        </form>
                    </div>
                    <S.CloseModal>
                        <span onClick={displayEditModal}>Voltar</span>
                    </S.CloseModal>
                </S.Content>
            </S.Container>
        </S.Wrapper>
    );
};

export default EditRegister;
