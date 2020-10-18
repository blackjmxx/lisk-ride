import styled from "styled-components"

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5%;
    width: 100%;
    height: 31.15%;
`

export const Button = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.cyan};
    box-shadow: 0px 2px 24px rgba(50, 146, 255, 0.3);
    border-radius: 50px;
`

export const ButtonContent = styled.div`
    font-family: 'Avenir Next';
    font-size: 16px;
    line-height: 140%;
    text-align: center;
    color: ${({theme}) => theme.menuBarBg};
`

export const BottomContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 86%;
    height: 25%;
`