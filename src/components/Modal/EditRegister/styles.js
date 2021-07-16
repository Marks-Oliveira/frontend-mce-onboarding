import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    background: rgba(243, 246, 249, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    width: 26rem;
    height: 32rem;
    background-color: #fff;
    border-radius: 30px;
`

export const Content = styled.div`
    margin: 0.4rem 3.8rem;
    display: flex;
    flex-direction: column;

    h1 {
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: 1.8rem;
        color: #03014C;
        margin: 0;
        margin-left: -0.2rem;
    }
`

export const Login = styled.div`
    display: flex;
    align-items: center;
    padding-top: 1.3rem;
`

export const Text = styled.span`
    color: #03014C;
    font-size: 0.8rem;
    font-family: 'Open Sans', sans-serif;
`

export const CloseModal = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    font-family: 'Open Sans', sans-serif;
    color: #03014C;

    span {
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: normal;
    }
`