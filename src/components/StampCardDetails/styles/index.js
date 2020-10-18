import styled from 'styled-components';
import { iphone5SEMaxWidth, forBiggerThenIphone6Devices } from '../../Theme';

export const SampCardDetailsContainer = styled.div`
    position: relative;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: center;
`

export const SampCardDetailsCenterContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ProgressBarContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    max-width: 70%;
    flex: 0.90 0 auto;
    -webkit-flex: 0.80 0 auto;
    margin-top: 10px;

    @media (max-width: ${iphone5SEMaxWidth}px) {
      max-width: 50%;
    }
`;

export const CenterContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 1;
  width: 75%;

    @media (min-width: ${forBiggerThenIphone6Devices}px) {
     width: 80%;
    } 
`;