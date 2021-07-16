import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 97%;
    height: 3rem;
    margin-top: 0.5rem;
    margin-left: 1.8rem;
    background: #fff;
    box-shadow: 0.5px 3px 10px rgba(119, 119, 119, 0.1);
    display: flex;
    align-items: center;
    font-weight: bold;
    color: #464A53;
`

export const Position = styled.div`
    width: 3rem;

    p {
        margin: 0;
        padding: 0 1.3rem;
    }
`

export const Name = styled.div`
    width: 14rem;
    margin-left: 0.6rem;
    margin-right: 0.5rem;
`

export const Email = styled.div`
    width: 20rem;
    padding-left: 1.6rem;
`

export const Date = styled.div`
    margin-left: 3.4rem;
`

export const Buttons = styled.div`
    position: absolute;
    width: 4rem;
    display: flex;
    justify-content: space-between;
    right: 1.5rem;

    img {
        width: 30%;
        cursor: pointer;
    }
`