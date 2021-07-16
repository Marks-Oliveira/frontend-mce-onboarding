import styled, { css } from 'styled-components';

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

export const NavegationMenu = styled.div`
    width: 100%;
    margin-top: 3rem;

    span {
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        color: #ABAFB3;
        font-size: 0.8rem;
        padding-left: 2.2rem;
    }
`

export const Options = styled.div`
    width: 100%;
    margin-top: 1.2rem;
`

const optionsStyles = css`
    position: relative;
    display: flex;
    align-items: center;
    height: 3rem;
    padding-left: 2.7rem;
    background: ${props => props.value === true ? '#e5e0fd' : 'transparent'};
    cursor: pointer;

    span {
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: 0.8rem;
        color: #6A707E;
        padding-left: 1rem;
    }
`

export const ColorStripe = styled.div`
    position: absolute;
    width: 0.14rem;
    height: 100%;
    left: 0.2rem;
    background: #7F63F4;
    display: ${props => props.value === true ? 'initial' : 'none'};
`

export const DashboardOption = styled.div`
    ${optionsStyles};
`

export const EditProfileOption = styled.div`
    ${optionsStyles};
`

export const MyProfileOption = styled.div`
    ${optionsStyles};
`

export const OptionIcon = styled.img`
    width: 0.8rem;
    filter: ${props => props.value === true 
    ? 'invert(39%) sepia(80%) saturate(1396%) hue-rotate(227deg) brightness(94%) contrast(105%)' 
    : 'invert(66%) sepia(5%) saturate(16%) hue-rotate(314deg) brightness(102%) contrast(90%)'};
`

export const ContentHeader = styled.header`
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;

    span {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 0.8rem;
        color: #080F18;
        cursor: pointer;
    }
`

export const SearchInput = styled.div`
    width: 16rem;
    height: 2.4rem;
    display: flex;
    align-items: center;
    border-radius: 5px;
    background-color: #F3F3F3;
    padding-left: 0.8rem;
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