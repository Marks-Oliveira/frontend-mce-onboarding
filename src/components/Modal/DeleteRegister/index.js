import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import * as S from './styles';
import deleteUser from '../../../assets/depression-cuate.png';
import Button from '@material-ui/core/Button';

const DeleteRegister = ({ displayDeleteModal, user, getRegisters }) => {
    const history = useHistory();

    const handleDeleteUser = async (event) => {
        event.preventDefault();

        const token = window.localStorage.getItem('accessToken');

        const config = {
            headers: {
                Authorization: token
            }
        };

        try {
            await api.delete(`/user/delete/${user.id}`, config);
            toast.success("Usuário deletado com sucesso!");

            if (user.role === "ADMIN") {
                window.localStorage.removeItem('accessToken');
                history.replace("/");

            } else if (!getRegisters && user.role === "NORMAL") {
                window.localStorage.removeItem('accessToken');
                history.replace("/");

            } else {
                getRegisters();
                displayDeleteModal();
            }
        } catch (error) {
            toast.error(error?.response?.data?.error || "Ops... Ocorreu um erro");
        }
    };

    return (
        <S.Wrapper>
            <S.Container>
                <S.Image>
                    <img src={deleteUser} alt="Deletar usuário" />
                </S.Image>
                <S.Question>
                    <h1>Você deseja realmente excluir o usuário?</h1>
                    <S.Buttons>
                        <Button 
                            variant="contained"
                            onClick={handleDeleteUser}
                            size="large"
                            style={{
                                width: "8rem",
                                height: "3.2rem",
                                border: "1px solid #7F63F4",
                                background: "transparent",
                                color: "#7F63F4",
                                fontWeight: "bold",
                                fontSize: "0.8rem",
                                marginTop: "1rem"
                            }}
                        >
                            Confirmar
                        </Button>

                        <Button 
                            variant="contained"
                            size="large"
                            onClick={displayDeleteModal}
                            style={{
                                width: "8rem",
                                height: "3.2rem",
                                background: "#7F63F4",
                                color: "#fff",
                                fontWeight: "bold",
                                fontSize: "0.8rem",
                                marginTop: "1rem"
                            }}
                        >
                            Não
                        </Button>
                    </S.Buttons>
                </S.Question>
            </S.Container>
        </S.Wrapper>
    );
};

export default DeleteRegister;
