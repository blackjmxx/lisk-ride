import React, { Component } from "react";
import { Transition } from "semantic-ui-react";
import './styles/index.scss';
import { ActiveStepNumberBlue, ActiveStepNumberGreen, Label ,ActiveStepNumberDeafault, Image, ImageContianer, RewardsContainer, Reward, Icon, IconContainer } from './styles/index'
import openPadlockIcon from "../../assets/icons/openPadlockIcon.svg";
import lockPadlockIcon from "../../assets/icons/lockPadlockIcon.svg";

// const getReward = ({isActive, reward, index}) =>
//   {
//     //isActive means isStamped
//     if(isActive){
//       return <Image src={HVMark} className={"timelineCircleMark"} />
//     } else if(reward && reward.image){
//       return <Image src={reward.image.url} className={"timelineCircleMark2"} />
//     }
//   }

class RewardsRow extends Component {
  render() {
    const { rewardSteps = [], maxStepCount = 0, currentStepCount } = this.props;
    return (
      <RewardsContainer>
          {rewardSteps.map(reward => {
            const rewardJson = reward.toJSON();
            const isDisabled = rewardJson.step > currentStepCount;
            return (
              <Reward>
                {renderGift(
                  isDisabled,
                  rewardJson.step,
                  maxStepCount,
                  rewardJson.image.url
                )}
              </Reward>
            );
          })}
        </RewardsContainer>
    );
  }
}

export default RewardsRow;

function renderGift(isDisabled, step, maxStepCount, urlImage) {
    return (
      <Transition key={step} transitionOnMount={true} visible={true} animation="scale" duration={500}>
        <Icon.Group size="huge">
        <ImageContianer>
            <Image src={urlImage} />
            <Label>
              {isDisabled
                ? <><IconContainer><Icon src={lockPadlockIcon}/></IconContainer><ActiveStepNumberBlue>{step}/</ActiveStepNumberBlue></>
                : <><IconContainer><Icon src={openPadlockIcon}/></IconContainer><ActiveStepNumberGreen>{step}/</ActiveStepNumberGreen></>
              }<ActiveStepNumberDeafault>{maxStepCount}</ActiveStepNumberDeafault>
            </Label>
          </ImageContianer>
        </Icon.Group>
      </Transition>
    );
}
