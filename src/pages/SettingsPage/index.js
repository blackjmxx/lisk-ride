import React, { Component } from "react";
import { User } from "parse";
import { getCardId } from "../../utils/storage";
import Loadable from 'react-loadable';
import IntroSlider from "react-intro-slider";
import {
  isManifestSetted,
  setClientManifest,
} from "../../utils/storage";

import MenuBar from "../../components/MenuBar/Menubar";
import RequireAuth from "./RequireAuth";
import { Theme } from "../../components/Theme";

import {
  title,
  nextButton,
  skipButton,
  dotActive,
  dotInactive,
  description,
  slideStyle,
  sliderStyle,
} from "../../components/HomePage/styles";
import { FormattedMessage } from 'react-intl';

const slides = [
  {
    title:<FormattedMessage id={"slides.loylatyRewaredTitle"} />,
    description:<FormattedMessage id={"slides.loylatyRewaredDescription"} />,
    background: Theme.cyan10,
    image: require("../../assets/images/SplashScreen/secondImage.svg")
  },
  {
    title: <FormattedMessage id={"slides.scanLoyaltyTitle"} />,
    description: <FormattedMessage id={"slides.scanLoyaltyDescription"} />,
    background: Theme.cyan10,
    image: require("../../assets/images/SplashScreen/thirdImage.svg")
  },
  {
    title: <FormattedMessage id={"slides.earnDiscountTitle"} />,
    background: Theme.cyan10,
    image: require("../../assets/images/SplashScreen/fourthImage.svg"),
    description: <FormattedMessage id={"slides.earnDiscountDescription"} />
  }
];

const UserParse = User.extend("User");

const UserInformationLoadable = Loadable({
  loader: () => import('./UserInformations'),
  loading: () => <div>...</div>
});
class SettingsPage extends Component {
  state = {
    sliderIsOpen: false,
    moveToRegister: false
  };
  componentDidMount = () => {
    const { fakeId } = this.props;
    UserInformationLoadable.preload();
    if (fakeId) {
      //this.props.loadLoyaltyFakeCard(fakeId);
    } else {
      getCardId().then(cardId => {
        // alert('afterCardId :' +cardId)
        // let localToken = token || cardId;
        //this.props.loadLoyaltyCard(localToken);
      });
    }
    if (UserParse.current() && !this.props.user) {
      this.props.receiveUserLogIn(UserParse.current().toJSON());
      this.props.loadLoyaltyCards(UserParse.current());
    }
    if (!isManifestSetted()) {
      this.setState({ sliderIsOpen: true });
    }
  };

  handleSelectCard = index => {
    this.props.selectAndChangeCardId(index);
  };

  installAppHandler = () => {
    if (!this.state.InstallationPopup) {
      this.setState({ InstallationPopup: true });
      return;
    }
    this.setState({ InstallationPopup: false });
  }

  handleClose = () => {
    this.setState({ sliderIsOpen: false, moveToRegister: true });
    setClientManifest();
  };

  render() {
    const {moveToRegister} = this.state;
    if (this.state.sliderIsOpen) {
      return (
        <IntroSlider
          sliderIsOpen={this.state.sliderIsOpen}
          slides={slides}
          size="fullscreen"
          skipButton
          handleClose={this.handleClose}
          handleDone={this.handleClose}
          titleStyle={title}
          descriptionStyle={description}
          className="intro-slider"
          nextLabel={<FormattedMessage id={"slides.next"} />}
          doneLabel={<FormattedMessage id={"slides.next"} />}
          skipLabel={<FormattedMessage id={"slides.end"} />}
          sliderStyle={sliderStyle}
          slideStyle={slideStyle}
          nextButtonStyle={nextButton}
          skipButtonStyle={skipButton}
          controllerIconActiveStyle={dotActive}
          controllerIconInactiveStyle={dotInactive}
        />
      );
    }
    return (
      <>
        <RequireAuth moveToRegister={moveToRegister} {...this.props}>
          {!this.state.sliderIsOpen && <UserInformationLoadable {...this.props} handleSelectCard={this.handleSelectCard}/>} 
          <MenuBar />
        </RequireAuth>
      </>
    );
  }
}

export default SettingsPage;
