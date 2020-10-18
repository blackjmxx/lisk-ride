import styled from "styled-components";
import {Label as SamanticLabel} from "semantic-ui-react";
import {Image as SemanticImage} from "semantic-ui-react";
import {iphone6MaxWidth} from "../../Theme";

export const Reward = styled.div`
    width: 10vw;
    margin-right: 20px;
    @media (max-width: ${iphone6MaxWidth}px) {
        margin-bottom: 10px;
    }
`
export const ActiveStepNumberBlue = styled.div`
    display: flex;
    flex-direction: row;
    font-family: 'Product Sans';
    font-size: 12px;
    line-height: 15px;
    font-weight: normal;
    display: flex;
    align-items: center;
    text-align: center;
    color: ${({theme}) => theme.cyan};
    font-weight: 400;
`
export const ActiveStepNumberGreen = styled(ActiveStepNumberBlue)`
    color: ${({theme}) => theme.green};
`
export const ActiveStepNumberDeafault = styled(ActiveStepNumberGreen)`
    color: ${({theme}) => theme.gray60};
`
export const ImageContianer = styled.div`
     &&& {
      position: relative;
    }
    display: flex;
    align-items: center;
    justify-content: center;

`
export const Image = styled(SemanticImage)`
    &&& {
        position: relative;
    }
`
export const Label = styled(SamanticLabel)`
    &&& {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    width: 110%;
    height: 37%;
    border-radius: 30px;
    background-color: ${({theme}) => theme.menuBarBg};
    box-shadow: 0px 0px 4px rgba(50, 146, 255, 0.15);
    padding: 0;
}`
export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 20%;
    padding: 0;
    margin-top: 0.50rem;
    margin-right: 0.10rem;
`
export const Icon = styled(SemanticImage)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0;
`
export const RewardsContainer = styled.div`
    display: flex;
    width: 70vw;
    justify-content: space-around;
    padding-top: 20px;
    margin-bottom: 10px;
`