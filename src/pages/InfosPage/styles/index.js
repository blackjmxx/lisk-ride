import styled, { keyframes } from 'styled-components'

export const NotificationsViewContainer = styled.div`
    display: flex;
    width: 100%;
    flex-basis: 100%;
    background-color: ${({theme}) => theme.cyan10};
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    -webkit-overflow-scrolling: auto;
`
export const HeaderTitle = styled.div`
  font-family: 'Avenir Next';
  font-size: 16px;
  width: 100%;
  margin-top: 5%;
  padding-left: 10px;
  color: ${({theme}) => theme.cyan};
  font-weight: bold;
`
export const OtherHeaderTitle =styled(HeaderTitle)`
   color: ${({theme}) => theme.gray};
`
export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  justify-content: flex-start;
  align-items: flex-start;
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 100%;
  flex: 1;
`
export const Border = styled.div`
  margin: 0 auto;
  background-color: #000000;
  padding: 50px;
  padding-bottom: 30px;
  
  @media (min-height: 600px) {
    position: fixed;
    padding-bottom: 80px;
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;
  }
`
const intro = keyframes`
0% {transform: translateY(100%)}
100% {transform: translateY(0)}
`;

const outtro = keyframes`
0% {
  transform: translateY(0);
}
100% {transform: translateY(100%);}
}
`;

export const L9Div = styled.div`
&.page-enter {
  animation-name: ${intro};
  animation-duration: 0.4s;
  animation-iteration-count: 1;
}
&.page-exit {
  animation-name: ${outtro};
  animation-duration: 0.4s;
  animation-iteration-count: 1;
}
`