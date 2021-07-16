import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../services/api';

import * as S from './styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const UpdatePasswordPage = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
    const history = useHistory();
    const pathParams = useParams();

    const handleClickShowNewPassword = () => {
        setShowNewPassword(!showNewPassword);
    };

    const handleClickShowConfirmNewPassword = () => {
        setShowConfirmNewPassword(!showConfirmNewPassword);
    };

    const handleUpdatePassword = async (event) => {
        event.preventDefault();

        if (newPassword !== confirmNewPassword) {
            toast.error("Senha e Confirmar senha estão diferentes!")
            return;
        };
    
        const body = {
          newPassword: newPassword,
          confirmNewPassword: confirmNewPassword
        };
    
        try {
          await api.put(`/user/register-newPassword/${pathParams.token}`, body);
      
          toast.success("Senha atualizada com sucesso!");
          history.replace("/");
        } catch (error) {
          toast.error(error?.response?.data?.error || "Ops... Ocorreu um erro");
        }
    };

    return (
        <S.Wrapper>
            <S.TransparentScreen>
                <S.Container>
                    <S.Content>
                        <h1>CADASTRAR NOVA SENHA</h1>
                        <S.Inputs>
                            <form onSubmit={handleUpdatePassword}>
                                <TextField
                                    value={newPassword}
                                    onChange={e => setNewPassword(e.target.value)}
                                    type={showNewPassword ? 'text' : 'password'}
                                    label="Nova senha"
                                    placeholder="******"
                                    fullWidth
                                    required
                                    margin="normal"
                                    style={{ marginBottom: "1.5rem" }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={handleClickShowNewPassword}>
                                                    {showNewPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    inputProps={{
                                        minLength: 6
                                    }}
                                    autoFocus
                                />
                                <TextField
                                    value={confirmNewPassword}
                                    onChange={e => setConfirmNewPassword(e.target.value)}
                                    type={showConfirmNewPassword ? 'text' : 'password'}
                                    label="Confirmar nova senha"
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
                                                <IconButton onClick={handleClickShowConfirmNewPassword}>
                                                    {showConfirmNewPassword ? <Visibility /> : <VisibilityOff />}
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
                                    Salvar
                                </Button>
                            </form>
                        </S.Inputs>
                    </S.Content>
                </S.Container>
            </S.TransparentScreen>
        </S.Wrapper>
    );
};

export default UpdatePasswordPage;
