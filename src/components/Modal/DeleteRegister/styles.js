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
    width: 42rem;
    height: 20rem;
    display: flex;
    background-color: #fff;
    border-radius: 30px;
`

export const Image = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 90%;
    }
`

export const Question = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: 1.5rem;
        color: #03014C;
    }
`

export const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`