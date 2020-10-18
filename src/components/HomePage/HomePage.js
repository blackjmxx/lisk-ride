import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Notifications from "../Notifications";
import Menubar from "../MenuBar/Menubar";
// import IntroSlider from "react-intro-slider";
import {
  // Icon,
  // ShortcutContainer,
  // ShortcutContent,
  HomeContainer,
  // BackgroundCircle,
  // StampCardDetails,
  // CardsContainer
} from "./styles";
import "./styles/index.scss";
// import shortcutIcon from "../../assets/icons/shortcutIcon.svg";
// import shortcutIconAndroid from "../../assets/icons/shortcutIconAndroid.svg";
import { User } from "parse";
// import { Theme } from "../Theme";
import GlobalRequireAuth from "../../pages/SettingsPage/GlobalRequireAuth";
import { FormattedMessage, injectIntl } from "react-intl";

const UserParse = User.extend("User");

class HomePage extends Component {
  state = {
  };

  constructor(props) {
    super(props);

    let currentUser = User.current();

    if (currentUser) {
     // loadUser and redirect 
    }
  }

  componentDidMount = () => {
  };

  render() {
    const { error } = this.props;
    if (error) {
      return <Redirect to="/404" />;
    }
    return (
      <>
        <GlobalRequireAuth {...this.props}>
          <HomeContainer>
            <Notifications />
          </HomeContainer>
          <Menubar />
        </GlobalRequireAuth>
      </>
    );
  }
}
export default injectIntl(HomePage);