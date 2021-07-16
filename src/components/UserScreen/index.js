import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import EditRegister from '../Modal/EditRegister';
import DeleteRegister from '../Modal/DeleteRegister';
import editIcon from '../../assets/edit-icon.png';
import developer from '../../assets/developer-activity.png';
import deleteIcon from '../../assets/dashboard.svg';

import * as S from './styles';

const UserScreen = ({ user }) => {
    const history = useHistory();
    const [displayEditRegisterModal, setDisplayEditRegisterModal] = useState(false);
    const [displayDeleteRegisterModal, setDisplayDeleteRegisterModal] = useState(false);

    const handleShowEditRegister = () => {
        setDisplayEditRegisterModal(!displayEditRegisterModal);
    };

    const handleShowDeleteRegister = () => {
        setDisplayDeleteRegisterModal(!displayDeleteRegisterModal);
    };

    const handleLogout = () => {
        window.localStorage.removeItem("accessToken");
        history.push("/")
    };

    return (
        <S.Wrapper>
            <S.Sidebar>
                <S.SidebarTitle>
                    <h3>Mind Education</h3>
                </S.SidebarTitle>
                <S.UserEmail>
                    <span>{user.email}</span>
                </S.UserEmail>
                <S.EditProfile>
                    <img src={editIcon} alt="Editar perfil" />
                    <span onClick={handleShowEditRegister}>Editar perfil</span>
                </S.EditProfile>
                <S.DeleteProfile>
                    <img src={deleteIcon} alt="Deletar perfil" />
                    <span onClick={handleShowDeleteRegister}>Deletar perfil</span>
                </S.DeleteProfile>
            </S.Sidebar>
            <S.Content>
                <S.ContentHeader>
                    <span onClick={handleLogout}>Logout</span>
                </S.ContentHeader>
                <S.ContentScreen />
                <S.ContentInfos>
                    <S.UserName>
                        <p>Bem vindo(a),</p>
                        <span>{user.name}</span>
                    </S.UserName>
                    <S.ContentImage>
                        <img src={developer} alt="Developer" />
                    </S.ContentImage>
                </S.ContentInfos>
                <S.ContentFooter>
                    <p>Copyrights ©</p> <span>Mind Education</span>
                </S.ContentFooter>
            </S.Content>

            {displayEditRegisterModal ? 
                <EditRegister 
                    displayEditModal={() => handleShowEditRegister()}
                    user={user}
                />
            : null
            }

            {displayDeleteRegisterModal ? 
                <DeleteRegister 
                    displayDeleteModal={() => handleShowDeleteRegister()}
                    user={user}
                />
            : null
            }
        </S.Wrapper>
    );
};

export default UserScreen;
