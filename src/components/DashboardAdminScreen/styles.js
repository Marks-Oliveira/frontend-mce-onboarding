import styled from 'styled-components';

export const ChosenScreen = styled.section`
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    background: #e5e0fd;
    padding-left: 1.5rem;

    span {
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        color: #7F63F4;
    }
`

export const Infos = styled.section`
    width: 100%;
    height: 77%;
    display: flex;
    background: #F3F6F9;
`

export const AdminName = styled.div`
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

export const ScreenImage = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;

    img {
        width: 70%;
        height: 80%;
        margin-top: 1rem;
    }
`