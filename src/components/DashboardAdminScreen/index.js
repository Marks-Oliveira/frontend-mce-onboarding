import React from 'react';

import developer from '../../assets/developer-activity.png';

import * as S from './styles';

const DashboardAdminScreen = ({ user }) => {
    return (
        <>
            <S.ChosenScreen>
                <span>Dashboard</span>
            </S.ChosenScreen>
            <S.Infos>
                <S.AdminName>
                    <p>Bem vindo(a),</p>
                    <span>{user.name}</span>
                </S.AdminName>
                <S.ScreenImage>
                    <img src={developer} alt="Developer" />
                </S.ScreenImage>
            </S.Infos>
        </>
    );
};

export default DashboardAdminScreen;
