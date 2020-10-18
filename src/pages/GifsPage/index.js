import React, { Component } from "react";
import { connect } from "react-redux";
import { User } from "parse";
import { loadRewards } from "../../modules/gifs/actions";
import MenuBar from "../../components/MenuBar/Menubar.js";
import "./styles.css";
import {
  NotificationsViewContainer,
  ItemsContainer,
  HeaderContainer,
  HeaderTitle,
  OtherHeaderTitle
} from "../InfosPage/styles";
import { Content, Title } from "../../components/NotificationItem/style";
import Moment from 'react-moment';
import { addBadgeToMenu } from '../../modules/home/actions'
import {
  GiftItemContainer,
  GiftImageContainer,
  GiftImage,
  GiftItemContentContainer,
  TimeoutContentContainer
} from "./styles";
// import coffee from "../../assets/images/coffee.svg";
import { GiftsEmpty } from "../../components/GiftsEmpty/GiftsEmpty";
import { GiftsRequiredEmailVerification } from "../../components/GiftsEmpty/GiftsRequiredEmailVerification"
import { GiftPopup } from "../../components/GiftPopup/GiftPopup";
export const GIFT_URL = `${process.env.REACT_APP_UV_REWARD_URL}`

const GifItem = ({
  name,
  description,
  imageUrl,
  expireAt,
  handleUseGift
}) => (
  <GiftItemContainer onClick={() => handleUseGift()}>
    <GiftImageContainer>
      <GiftImage src={imageUrl} />
    </GiftImageContainer>
    <GiftItemContentContainer>
      <Title>{name}</Title>
      <Content>{description}</Content>
      <TimeoutContentContainer>
        <Content>Expire - {<Moment format="DD MM YYYY">{expireAt}</Moment>}</Content>
      </TimeoutContentContainer>
    </GiftItemContentContainer>
  </GiftItemContainer>
);

class GifsPage extends Component {
  gifts = [
    {
      Title: "",
      Content: ""
    }
  ];

  state = {
    showUseIt: false,
    selectedGifImage:'',
    selectedGifDescription:'',
    selectedGifTitle:'',
    currentKey:-1,
    isEmailVerified:false
  };

  componentDidMount(){
    const { token } = this.props.card;
    if(User.current()){
        if(User.current().get('emailVerified') || User.current().get('authData')){
          this.setState({isEmailVerified:true})
      }else{
        User.current().fetch().then(
          (user) => {
            if(user.get('emailVerified') || user.get('authData')){
              this.setState({isEmailVerified:true})
            }
          }
        )
      }
    }
    
    this.props.loadRewards(token);
    this.props.addBadgeToMenu(false)
  }

  handleUseGift = ( i ) => {
    this.setState({ currentKey: i });
  };

  closeUseGift = ( i ) => {
    this.setState({ currentKey: -1 });
  };

  render() {

    const { rewards = []} = this.props;
    
    const activeRewards = [];
    const usedRewards = [];
    
    if(!this.state.isEmailVerified){
      return <GiftsRequiredEmailVerification />;
    }

    if (rewards.length === 0) {
      return <GiftsEmpty />;
    }

    if (rewards.length > 0) { 
      for (let i = 0; i < rewards.length; i++) {
        const reward = rewards[i];
        let rewardJSON = reward.toJSON();
        if (rewardJSON.status === "pending") activeRewards.push(rewardJSON);
        else if (rewardJSON.status === "consumed" || rewardJSON.status === "expired") usedRewards.push(rewardJSON);
      }

      return (
        <>
          <NotificationsViewContainer>
          {/* {(
              <GiftScan 
                active={true}/>
              )} */}
            <ItemsContainer>
              <HeaderContainer>
                <HeaderTitle>Active</HeaderTitle>
              </HeaderContainer>
              {activeRewards.map((reward, i)=> {
                return (
                  <div>
                    {(
                        (this.state.currentKey === i) && <GiftPopup closeUseGift={() => this.closeUseGift(i)}
                        shareLink={
                          GIFT_URL + reward.voucherRef.token
                        }
                        title={reward.rewardTemplateRef.title} description={reward.rewardTemplateRef.description} image={reward.rewardTemplateRef.image.url}/>
                      )}
                      <GifItem
                        handleUseGift={() => this.handleUseGift(i)}
                        name={reward.rewardTemplateRef.title}
                        description={reward.rewardTemplateRef.description}
                        imageUrl={reward.rewardTemplateRef.image.url}
                        expireAt={reward.rewardTemplateRef.expireAt}
                        
                    isConsumed={reward.status !== "pending"}
                  />
                  </div>
                  
                );
              })}
            </ItemsContainer>
            <ItemsContainer>
              <HeaderContainer>
                <OtherHeaderTitle>Old</OtherHeaderTitle>
              </HeaderContainer>
              {usedRewards.map(reward => {
                return (
                  <GifItem
                    handleUseGift={this.handleUseGift}
                    name={reward.rewardTemplateRef.title}
                    description={reward.rewardTemplateRef.description}
                    imageUrl={reward.rewardTemplateRef.image.url}
                    shareLink={
                      "http://dev-customer.netlify.com/#/" +
                      reward.voucherRef.token
                    }
                    isConsumed={reward.status !== "pending"}
                  />
                );
              })}
            </ItemsContainer>
          </NotificationsViewContainer>
          <MenuBar />
        </>
      );
    }
  }
}

const mapActionCreators = {
  loadRewards,
  addBadgeToMenu
};

const mapStateTopProps = state => {
  return {
    isLoadingCard: state.home.isLoadingCard,
    currentCard: state.home.currentCard,
    error: state.home.error,
    card: state.home.card,
    rewards: state.gifs.rewards,
    isGiftNotification:state.home.isGiftNotification
  };
};

export default connect(mapStateTopProps, mapActionCreators)(GifsPage);
