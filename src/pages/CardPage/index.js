import React, { Component } from "react";
import { Link } from "react-router-dom";
import { User } from "parse";
import CardsCarusel from "../../components/CardsCarusel/CardsCarusel";
import {
  Content,
  ScanContainer,
  ImageContainer,
  TitleContainer,
  TypeScanContainer,
  TypeButtonsContainer,
  CircleTypeButtonContainer,
  CircleQrButton,
  CircleStampButton,
  ButtonIcon,
  ContentContainer,
  BottomContainer
} from "./styles";
import Notifications from "../../components/Notifications";
import {
  BackgroundCircle,
  ShortcutContent,
  CardsContainer,
  ShortcutContainer
} from "../../components/HomePage/styles";
import { Icon } from "../../components/HomePage/styles";
import shortcutIcon from "../../assets/icons/shortcutIcon.svg";
import shortcutIconAndroid from "../../assets/icons/shortcutIconAndroid.svg";
import MenuBar from "../../components/MenuBar/Menubar.js";
import scannerIcon from "../../assets/icons/scannerIcon.svg";
import stampIcon from "../../assets/icons/stampIcon.svg";
import BarCodeLoyalty from "../../components/BarCodeLoyalty";
import InstallationPopup from "../../components/InstallationPopup/InstallationPopup";
import GlobalRequireAuth from "../../pages/SettingsPage/GlobalRequireAuth";
import { FormattedMessage, injectIntl } from "react-intl";
import  ValidationSuccessPopUp  from "../../components/GiftScan/ValidationSuccessPopUp";
import  ValidationErrorPopUp from "../../components/GiftScan/ValidationErrorPopUp";
import ValidationSuccessWithGift from "../../components/GiftScan/ValidationSuccessWithGift"

class CardPage extends Component {
  state = {
    data: ["1", "2", "3"],
    imgHeight: 176,
    InstallationPopup: false
  };
  componentDidMount() {
    let currentUser = User.current();
    if (currentUser) {
      this.props.loadLoyaltyCards(currentUser);
    }
  }

  handleSelectCard = index => {
    this.props.selectAndChangeCardId(index);
  };

  closeSucessPopUp = i => {
    this.props.closeValidationModal();
    this.props.history.push("/home");
  };

  closeGotoGift= i => {
    this.props.closeValidationModal();
    this.props.history.push("/home/gifts");
  };

  closeErrorPopUp = i => {
    this.props.closeValidationModal();
    this.props.history.push("/home/card");
  };

  installAppHandler = () => {
    if (!this.state.InstallationPopup) {
      this.setState({ InstallationPopup: true });

      return;
    }

    this.setState({ InstallationPopup: false });
  };

  render() {
    const { cards, card } = this.props;
    const isAndroid = /android/i.test(navigator.userAgent);

    return (
      <>
        {this.state.InstallationPopup && (
          <InstallationPopup
            active
            closeModalHandler={() =>
              this.setState({ InstallationPopup: false })
            }
            installAppHandler={this.installAppHandler}
          />
        )}
        <GlobalRequireAuth {...this.props}>
          <ScanContainer>
            <Notifications />
            <BackgroundCircle />
            <ShortcutContainer onClick={this.installAppHandler}>
              <Icon src={isAndroid ? shortcutIconAndroid : shortcutIcon} />
              <ShortcutContent name="cardsPopup" to={"/home/cardsPopup"}>
                <FormattedMessage id={"home.addTohomeScreen"} />
              </ShortcutContent>
            </ShortcutContainer>
            <CardsContainer>
              {/* <LoyaltyCard url={card.templateRef.imageLogo.url}/>  */}
              <CardsCarusel
                cards={cards}
                handleSelectCard={this.handleSelectCard}
              />
            </CardsContainer>
            <BottomContainer>
              <ImageContainer>
                <BarCodeLoyalty token={card.token} />
              </ImageContainer>
              <TitleContainer>
                <Content>
                  <FormattedMessage
                    id={"cardPage.scanQuickValidationMessage"}
                  />
                </Content>
              </TitleContainer>
              <TypeScanContainer>
                <TypeButtonsContainer>
                  <Link to={"/home/scanner"}>
                    <CircleTypeButtonContainer>
                      <CircleQrButton>
                        <ButtonIcon src={scannerIcon} />
                      </CircleQrButton>
                    </CircleTypeButtonContainer>
                  </Link>
                  <ContentContainer>
                    <Content>
                      <FormattedMessage id={"cardPage.scanQrCode"} />
                    </Content>
                  </ContentContainer>
                </TypeButtonsContainer>
                <TypeButtonsContainer>
                  <Link to={"/home/magicStamps"}>
                    <CircleTypeButtonContainer>
                      <CircleStampButton>
                        <ButtonIcon src={stampIcon} />
                      </CircleStampButton>
                    </CircleTypeButtonContainer>
                  </Link>
                  <ContentContainer>
                    <Content>
                      <FormattedMessage id={"cardPage.MagicStamp"} />
                    </Content>
                  </ContentContainer>
                </TypeButtonsContainer>
              </TypeScanContainer>
            </BottomContainer>
          </ScanContainer>
          {this.props.hasValue && this.props.isValidationSucceed && (
            <ValidationSuccessPopUp
              closeUsePopUp={() => this.closeSucessPopUp()}
            />
          )}
          {this.props.hasValue && !this.props.isValidationSucceed && !this.props.isValidationSucceedWithGift &&(
            <ValidationErrorPopUp
              closeUsePopUp={() => this.closeErrorPopUp()}
            />
          )}
          {this.props.hasValue && this.props.isValidationSucceedWithGift && (
            <ValidationSuccessWithGift
              closeUsePopUp={() => this.closeSucessPopUp()}
              handleRestart={() => this.closeGotoGift()}
            />
          )}
          <MenuBar />
        </GlobalRequireAuth>
      </>
    );
  }
}
export default injectIntl(CardPage);
