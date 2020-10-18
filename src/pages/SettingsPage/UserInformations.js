import React , { Component }from "react";
import { FormattedMessage } from 'react-intl';
import { User } from "parse";
import { LogoutPopup } from "../../components/LogoutPopup/LogoutPopup";
import { BlueButton } from "./LoginForm/LoginTab/style";

import { CardsContainer } from "../../components/HomePage/styles";
import CardsCarusel from "../../components/CardsCarusel/CardsCarusel";
import {
  UserInformationContainer,
  TitleContainer,
  TopInformationContainer,
  IconContainer,
  Title,
  ImageContainer,
  Image,
  Icon,
  InfomationsContainer,
  InformationsContainer,
  HeaderInfromation,
  InformationItemContainer,
  ContentInformation,
  BottomContainer,
  ButtonContainer,
} from "./styles";

import doneIcon from "../../assets/icons/doneIcon.svg";
import personGreen from "../../assets/images/personGreen.svg";

class Informations extends Component {
    state = {
      showLogoutModal: false
    };
  
    handleLogout = () => {
      if (!this.state.showLogoutModal) {
        this.setState({ showLogoutModal: true });
  
        return;
      }
  
      User.logOut().then(() => {
        this.props.receiveUserLogIn({});
        this.props.history.push("/home/params");
        this.setState({ showLogoutModal: false });
      });
    };
  
    render() {
      const user = this.props.user || {};
      const { token } = this.props.card;
      
      return (
        <>
          {this.state.showLogoutModal && (
            <LogoutPopup
              closeModalHandler={() => this.setState({ showLogoutModal: false })}
              handleLogout={this.handleLogout}
            />
          )}
          <InformationsContainer>
            <InformationItemContainer>
              <HeaderInfromation><FormattedMessage id={"paramsPage.cardId"} /></HeaderInfromation>
              <ContentInformation>{token}</ContentInformation>
            </InformationItemContainer>
            <InformationItemContainer>
              <HeaderInfromation><FormattedMessage id={"paramsPage.firstName"} /></HeaderInfromation>
              <ContentInformation>{user.name}</ContentInformation>
            </InformationItemContainer>
            <InformationItemContainer>
              <HeaderInfromation><FormattedMessage id={"paramsPage.AccoubtId"} /></HeaderInfromation>
              <ContentInformation>
                {user.profileRef && user.profileRef.objectId}
              </ContentInformation>
            </InformationItemContainer>
            <InformationItemContainer>
              <HeaderInfromation><FormattedMessage id={"paramsPage.email"} /></HeaderInfromation>
              <ContentInformation>{user.email}</ContentInformation>
            </InformationItemContainer>
          </InformationsContainer>
          <BottomContainer>
            <ButtonContainer>
              <BlueButton onClick={this.handleLogout}><FormattedMessage id={"paramsPage.logOut"} /></BlueButton>
            </ButtonContainer>
          </BottomContainer>
        </>
      );
    }
  }

const UserInformations = (props) => {
    return (  
      <UserInformationContainer>
      <TopInformationContainer>
        <IconContainer>
          <Icon src={doneIcon} />
        </IconContainer>
        <TitleContainer>
          <Title><FormattedMessage id={"paramsPage.progressSaved"} /></Title>
        </TitleContainer>
        <ImageContainer>
          <Image src={personGreen} />
        </ImageContainer>
      </TopInformationContainer>
      <CardsContainer>
        <CardsCarusel
          cards={props.cards}
          handleSelectCard={props.handleSelectCard}
        />
      </CardsContainer>
      <InfomationsContainer>
        <Informations {...props} />
      </InfomationsContainer>
    </UserInformationContainer>
    );
  }

  export default UserInformations;