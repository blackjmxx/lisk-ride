import React from 'react';
import {Grid, Icon, Label, Image} from 'semantic-ui-react'
import plain1 from '../assets/images/plain1.svg'
import './styles/home.css'

const style = {
  label:{base:{fontSize: '10px', zIndex: '0'}, color:{grey:'grey', black:'black'}, size:'big'},
  icon:{base:{fontSize: '25px'}}
}

const StampZoneRow = (props) => {
  let {currentPointCount, totalPointCount, rewardSteps} = props
  const stampsStepColors = []
  const stampsStepReward = []

  for (let i = 1; i <= totalPointCount; i++) {
    if(currentPointCount >= i){
      stampsStepColors.push("black")
    }else{
      stampsStepColors.push("grey")
    }
  }
  return (
    <Grid.Row centered style={{position: 'relative', 'paddingBottom': '115px'}}>
      <Image src={plain1} style={{height: '240px'}} />
      <div style={{position: 'absolute', top: '220px', left:'-15px', right: '205px'}}>
        <Icon.Group>
          <Icon name='paw' size={style.label.size} color={stampsStepColors[0]} circular inverted style={style.icon.base} />
          <Label color={stampsStepColors[0]} floating circular style={style.label}>
            1/5
          </Label>
        </Icon.Group>
      </div>
      <div style={{position: 'absolute', top: '165px', left:'250px', right: '15px'}}>
        <Icon.Group>
          {!rewardSteps[0] &&  <Icon name='paw' size='big' color={stampsStepColors[1]} circular inverted  style={style.icon.base} />}
          {rewardSteps[0] &&  <Image style={{width:'50px',height:'50px'}} avatar spaced='right' src={rewardSteps[0].ImageUrl} />}
          <Label color={stampsStepColors[1]} floating circular style={style.label}>
            2/5
          </Label>
        </Icon.Group>
      </div>
      <div style={{position: 'absolute', top: '105px', left:'85px', right: '80px'}}>
        <Icon.Group>
          <Icon name='paw' size='big' color={stampsStepColors[2]} circular inverted style={style.icon.base} />
          <Label color={stampsStepColors[2]} floating circular style={style.label}>
            3/5
          </Label>
        </Icon.Group>
      </div>
      <div style={{position: 'absolute', top: '50px', left:'-15px', right: '205px'}}>
        <Icon.Group>
          <Icon name='paw' size='big' color={stampsStepColors[3]} circular inverted style={style.icon.base} />
          <Label color={stampsStepColors[3]} floating circular style={style.label}>
            4/5
          </Label>
        </Icon.Group>
      </div>
      <div style={{position: 'absolute', top: '-10px', left:'250px', right: '15px'}}>
        <Icon.Group>
        {!rewardSteps[2] && <Icon name='paw' size='huge' color={stampsStepColors[4]} circular inverted style={style.icon.base} />}
        {rewardSteps[2] &&  <Image style={{width:'50px',height:'50px'}} avatar spaced='right' src={rewardSteps[2].ImageUrl} />}
          <Label color={stampsStepColors[4]} floating circular style={style.label}>
            5/5
          </Label>
        </Icon.Group>
      </div>
    </Grid.Row>
  );
};

export default StampZoneRow;