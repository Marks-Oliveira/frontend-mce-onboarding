import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';
import UserRecords from '../UserRecords';

import * as S from './styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const RegisterAdminScreen = ({ user }) => {
    const [registers, setRegisters] = useState("");

    useEffect(() => {
        getRegisters();
    }, []);

    const getRegisters = async () => {
        const token = window.localStorage.getItem('accessToken');

        const config = {
            headers: {
                Authorization: token
            }
        };

        try {
            const response = await api.get("/user/all", config);
        
            const users = response.data.users.filter((item) => item.id !== user.id);
            setRegisters(users);
        } catch (error) {
            toast.error(error?.response?.data?.error || "Ops... Ocorreu um erro");
        }
    };

    return (
        <>
            <S.ChosenScreen>
                <span>Cadastros</span>
            </S.ChosenScreen>
            <S.Register>
                <S.Fields>
                    <p>#</p>
                    <span>Nome</span>
                    <span>Email</span>
                    <span>Data de cadastro</span>
                </S.Fields>
                { registers ? registers.map((item, index) => 
                    <UserRecords 
                        key={index} 
                        user={item} 
                        index={index}
                        getRegisters={() => getRegisters()}
                    />
                ) 
                    : <S.Loading> <CircularProgress /> </S.Loading> 
                }                
            </S.Register>
        </>
    );
};

export default RegisterAdminScreen;
