import styled from 'styled-components';

import wallpaper from '../../assets/wallpaper.jpg'

export const Wrapper = styled.main`
    width: 100vw;
    height: 100vh;
    background-image: url(${wallpaper});
    background-size: 100% 72rem;
    background-position: 0 24%;
` 

export const TransparentScreen = styled.div`
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, .4);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.section`
    width: 26rem;
    height: 32rem;
    background-color: #fff;
    border-radius: 30px;
`

export const Content = styled.div`
    margin: 3rem 3.8rem;
    display: flex;
    flex-direction: column;

    h1 {
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: 2.5rem;
        color: #03014C;
        margin: 0;
        margin-left: -0.2rem;
    }

    p {
        font-family: 'Open Sans', sans-serif;
        font-size: 0.8rem;
        color: #03014C;
        opacity: 0.5;
    }
`

export const Inputs = styled.div`
    margin-top: 1.5rem;
`

export const Register = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
`

export const Text = styled.span`
    color: #03014C;
    font-size: 0.8rem;
    font-family: 'Open Sans', sans-serif;
`

export const RegisterLink = styled.span`
    color: #20c5d8;
    font-size: 0.8rem;
    font-family: 'Open Sans', sans-serif;
    padding-left: 0.3rem;
    cursor: pointer;
`

export const RecoverPasswordLink = styled.span`
    color: #20c5d8;
    font-size: 0.8rem;
    font-family: 'Open Sans', sans-serif;
    cursor: pointer;
`