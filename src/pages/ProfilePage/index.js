import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../services/api';
import UserScreen from '../../components/UserScreen';
import AdminScreen from '../../components/AdminScreen';

import * as S from './styles'; 
import CircularProgress from '@material-ui/core/CircularProgress';

const ProfilePage = () => {
    const [user, setUser] = useState("");
    const history = useHistory();

    useEffect(() => {
        if (window.localStorage.getItem("accessToken") === null) {
            history.push("/");
        };
    }, [history]);

    useEffect(() => {
        const token = window.localStorage.getItem('accessToken');

        const config = {
            headers: {
                Authorization: token
            }
        };

        api
            .get("/user/getUser", config)
            .then((response) => {
                setUser(response.data.user);
            })
            .catch((error) => {
                toast.error(error?.response?.data?.error || "Ops... Ocorreu um erro");
            })
    }, []);

    return (
        <>
            {user === "" ? <S.Loading> <CircularProgress /> </S.Loading> : null}
            {user.role === "ADMIN" ? <AdminScreen user={user} /> : <UserScreen user={user} />}          
        </>
    );
};

export default ProfilePage;
