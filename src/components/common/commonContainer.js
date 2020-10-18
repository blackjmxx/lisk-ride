import styled from "styled-components";

export const CommonContainerView = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background-color: ${({theme}) => theme.cyan10};
`