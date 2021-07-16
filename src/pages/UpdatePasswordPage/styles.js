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
        font-size: 2rem;
        color: #03014C;
        margin: 0;
        margin-left: -0.2rem;
    }
`

export const Inputs = styled.div`
    margin-top: 1.5rem;
`