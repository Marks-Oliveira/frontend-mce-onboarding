import styled from 'styled-components';

export const Wrapper = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
`

export const Sidebar = styled.aside`
    width: 18%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0.5px 3px 10px rgba(119, 119, 119, 0.1);
`

export const Content = styled.section`
    width: 82%;
    display: flex;
    flex-direction: column;
`

export const SidebarTitle = styled.div`
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #7F63F4;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);

    h3 {
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: 1.2rem;
        color: #fff;
    }
`

export const UserEmail = styled.div`
    width: 85%;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(127, 99, 244, 0.2);
    border-radius: 5px;
    margin-top: 3rem;

    span {
        font-family: 'Poppins', sans-serif;
        color: #7F63F4;
        font-size: 0.8rem;
    }
`

export const EditProfile = styled.div`
    width: 85%;
    display: flex;
    align-items: center;
    margin-top: 2.5rem;
    cursor: pointer;

    img {
        width: 0.8rem;
    }

    span {
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: 0.8rem;
        color: #6A707E;
        padding-left: 1rem;
    }
`

export const DeleteProfile = styled.div`
    width: 85%;
    display: flex;
    align-items: center;
    margin-top: 0.8rem;
    cursor: pointer;

    img {
        width: 0.8rem;
    }

    span {
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: 0.8rem;
        color: #6A707E;
        padding-left: 1rem;
    }
`

export const ContentHeader = styled.header`
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 3rem;

    span {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 0.8rem;
        color: #080F18;
        cursor: pointer;
    }
`

export const ContentScreen = styled.div`
    width: 100%;
    height: 3rem;
    background: #7F63F4;
    opacity: 0.2;
`

export const ContentInfos = styled.div`
    width: 100%;
    height: 77%;
    display: flex;
    background: #F3F6F9;
`

export const UserName = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    padding-top: 6rem;
    padding-left: 8rem;

    p {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 2.8rem;
        color: #080F18;
        margin: 0;
    }

    span {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 2.8rem;
        color: #7F63F4;
    }
`

export const ContentImage = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;

    img {
        width: 70%;
        height: 80%;
        margin-top: 1rem;
    }
`

export const ContentFooter = styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: 0.8rem;
        color: #898989;
    }

    span {
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: 0.8rem;
        color: #7F63F4;
        padding-left: 0.2rem;
    }
`