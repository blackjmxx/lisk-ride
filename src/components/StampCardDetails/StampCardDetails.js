import React from "react";
import { Loader, Dimmer } from "semantic-ui-react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import RewardsRow from '../RewardsRow/RewardsRow';
import ProgressProvider from '../ProgressProvider';
import './styles/style.scss'
import { NextRewardImage, CurrentStepContent, CurrentStepContainer, CurrentStepContentActive, Subtitle } from "../CardAvatar/styles";
import { SampCardDetailsContainer, SampCardDetailsCenterContainer, ProgressBarContainer, CenterContainer } from "./styles";

const StampCardDetails = ({
  totalStepCount = 0,
  currentStepCount = 0,
  stamps,
  rewardSteps,
  nextRewardStep = 0,
}) => {
  
  if (currentStepCount === null || currentStepCount === undefined || totalStepCount === 0 || totalStepCount === null || totalStepCount === undefined) {
    return (<Dimmer page active inverted>
      <Loader indeterminate>Chargement</Loader>
    </Dimmer>);
  }
  let percentage = (currentStepCount * 100) / totalStepCount;
  return (
    <CenterContainer >
      <ProgressBarContainer>
        {<ProgressProvider valueStart={0} valueEnd={percentage}>
          {value => <>
            <CircularProgressbar
              value={value}
              strokeWidth={5}
              circleRatio={0.75}
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 8,
                pathTransitionDuration: 2,
                strokeLinecap: 'round',
              })}
            />
            <CurrentStep value={currentStepCount} maxValue={totalStepCount} />
          </>
          }
        </ProgressProvider>}
        <NextRewardImage src={require('../../assets/images/present.svg')} />
      </ProgressBarContainer>
      <SampCardDetailsContainer>
        <SampCardDetailsCenterContainer>

          <Subtitle>
            Plus que{" "}
            {nextRewardStep} tampons avant votre
                  <br />
            prochaine surprise!
      </Subtitle>
        </SampCardDetailsCenterContainer>
        <RewardsRow
          stamps={stamps}
          rewardSteps={rewardSteps}
          maxStepCount={totalStepCount}
          currentStepCount={currentStepCount} />
      </SampCardDetailsContainer>
    </CenterContainer>
  );
};

const CurrentStep = ({ value, maxValue }) => {
  return (
    <CurrentStepContainer>
      <CurrentStepContentActive>{value}/</CurrentStepContentActive><CurrentStepContent>{maxValue}</CurrentStepContent>
    </CurrentStepContainer>
  )
};

export default StampCardDetails