import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import DashboardAdminScreen from '../DashboardAdminScreen';
import RegisterAdminScreen from '../RegisterAdminScreen';
import MyProfileAdminScreen from '../MyProfileAdminScreen';
import dashboard from '../../assets/dashboard.svg';
import function3 from '../../assets/function3.svg';
import editProfile from '../../assets/editProfile.svg';

import * as S from './styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const screenStates = {
    DASHBOARD: 'DASHBOARD',
    SHOWRECORDS: 'SHOWRECORDS',
    MYPROFILE: 'MYPROFILE'
};

const AdminScreen = ({ user }) => {
    const [backgroundDashboard, setBackgroundDashboard] = useState(true);
    const [backgroundEditProfile, setBackgroundEditProfile] = useState(false);
    const [backgroundMyProfile, setBackgroundMyProfile] = useState(false);
    const [screenState, setScreenstate] = useState(screenStates.DASHBOARD);
    const history = useHistory();

    const handleMenu = (state) => {
        switch (state) {
            case "dashboard":
                setBackgroundDashboard(true);
                setBackgroundEditProfile(false);
                setBackgroundMyProfile(false);
                setScreenstate(screenStates.DASHBOARD);
                break;
            case "editProfile":
                setBackgroundDashboard(false);
                setBackgroundEditProfile(true);
                setBackgroundMyProfile(false);
                setScreenstate(screenStates.SHOWRECORDS);
                break;
            case "myProfile":
                setBackgroundDashboard(false);
                setBackgroundEditProfile(false);
                setBackgroundMyProfile(true);
                setScreenstate(screenStates.MYPROFILE);
                break;
            default:
                break;
        };
    };

    const handleLogout = () => {
        window.localStorage.removeItem("accessToken");
        history.push("/");
    };

    return (
        <S.Wrapper>
            <S.Sidebar>
                <S.SidebarTitle>
                    <h3>Mind Education</h3>
                </S.SidebarTitle>
                <S.NavegationMenu>
                    <span>NAVEGAÇÃO</span>
                </S.NavegationMenu>
                <S.Options>
                    <S.DashboardOption value={backgroundDashboard} onClick={() => handleMenu("dashboard")}>
                        <S.ColorStripe value={backgroundDashboard} />
                        <S.OptionIcon src={dashboard} alt="Dashboard" value={backgroundDashboard} />
                        <span>Dashboard</span>
                    </S.DashboardOption>

                    <S.EditProfileOption value={backgroundEditProfile} onClick={() => handleMenu("editProfile")}>
                        <S.ColorStripe value={backgroundEditProfile} />
                        <S.OptionIcon src={editProfile} alt="Editar perfil" value={backgroundEditProfile} />
                        <span>Cadastros</span>
                    </S.EditProfileOption>

                    <S.MyProfileOption value={backgroundMyProfile} onClick={() => handleMenu("myProfile")}>
                        <S.ColorStripe value={backgroundMyProfile} />
                        <S.OptionIcon src={function3} alt="Meu perfil" value={backgroundMyProfile} />
                        <span>Meu perfil</span>
                    </S.MyProfileOption>
                </S.Options>
            </S.Sidebar>
            <S.Content>
                <S.ContentHeader>
                    <S.SearchInput>
                        <SearchIcon style={{ color: '#AAAAAA', cursor: 'pointer', hover: "#fff" }} />
                        <InputBase
                            placeholder="Search..."
                            style={{
                                width: '14rem',
                                height: '2.2rem',
                                fontSize: '0.8rem',
                                padding: '0 0.8rem'
                            }}
                        />
                    </S.SearchInput>
                    <span onClick={handleLogout}>Logout</span>
                </S.ContentHeader>
                    {screenState === screenStates.DASHBOARD ? <DashboardAdminScreen user={user} /> : null}
                    {screenState === screenStates.SHOWRECORDS ? <RegisterAdminScreen user={user} /> : null}
                    {screenState === screenStates.MYPROFILE ? <MyProfileAdminScreen user={user} /> : null}
                <S.ContentFooter>
                    <p>Copyrights ©</p> <span>Mind Education</span>
                </S.ContentFooter>
            </S.Content>
        </S.Wrapper>
    );
};

export default AdminScreen;
