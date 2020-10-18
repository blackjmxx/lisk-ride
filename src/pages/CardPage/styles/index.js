import styled, { keyframes } from 'styled-components'
import {Image as SemanticImage} from "semantic-ui-react";
import { iphone5SEMaxWidth } from '../../../components/Theme';

export const ScanContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  align-items: center;
  background-color: ${({theme}) => theme.cyan10};
`
export const ImageContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 75%;
    height: 65%;

  @media (max-width: ${iphone5SEMaxWidth}px) {
    width: 60%;
    height: 60%;
  }
`
export const TitleContainer = styled.div`
  width: 80%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TypeScanContainer = styled.div`
  display: flex;
  width: 81%;
  height: 30%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const TypeButtonsContainer = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`
export const CircleTypeButtonContainer = styled.div`
  display: flex;
  height: 15vw;
  width: 15vw;
  justify-content: center;
  align-items: center;
`
export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 30%;
  width: 100%;
`
export const CircleQrButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-shadow: 0px 2px 8px rgba(50, 146, 255, 0.15);
  border-radius: 50px;
  background-color: ${({theme}) => theme.cyan};
`
export const CircleStampButton = styled(CircleQrButton)`
  background-color: ${({theme}) => theme.yellow};

`
export const ButtonIcon = styled(SemanticImage)`
  display: flex;
  width: 6.5vw;
  height: 6.5vw;
`
export const Content = styled.div`
  font-family: 'Avenir Next';
  font-size: 16px;
  text-align: center;
  color: ${({theme}) => theme.gray80};

  @media (max-width: ${iphone5SEMaxWidth}px) {
    font-size: 14px;
  }
`
export const Border = styled.div`
  margin: 0 auto;
  background-color: #000000;
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
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 85%;
  height: 70%;
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