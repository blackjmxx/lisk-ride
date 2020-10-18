import React from "react";
import {
  PopupContainer,
  Image,
  Text,
  IconContainer,
  PopupContentContainer
} from "../RegisterPopup/style";
import { SquareFinalSuccess, SquareIcon } from "../SquareStatus/style";
// import closeIcon from "../../assets/icons/closeIcon.svg";
import {
  TitleContainer,
  Title
} from "../../components/EmptyNotificationInformation/style";
import happyBirthday from "../../assets/icons/427-happy-birthday.gif";
import { PopupViewContainer } from "../popup/style";
import { FormattedMessage, injectIntl } from "react-intl";
import { ButtonContainer, Button, ButtonContent, BottomContainer } from "./style/index.js";

export const ValidationSuccessWithGift = ({ closeUsePopUp, handleRestart }) => {
  return (
    <PopupViewContainer>
      <PopupContainer>
        <IconContainer >
          {/* <Icon src={closeIcon} onClick={closeUsePopUp}/> */}
        </IconContainer>
        <SquareFinalSuccess>
          <SquareIcon>
            <Image src={happyBirthday} onClick={closeUsePopUp}/>
          </SquareIcon>
        </SquareFinalSuccess>
        <TitleContainer>
          <Title>
            <FormattedMessage id={"global.validationSuccessWithGiftTitle"} />
          </Title>
        </TitleContainer>
        <PopupContentContainer>
          <Text>
            <FormattedMessage id={"global.finalSuccessPopUpMessage"} />
          </Text>
        </PopupContentContainer>
        <BottomContainer>
        <ButtonContainer>
          <Button onClick={handleRestart}>
            <ButtonContent>
              <FormattedMessage id={"global.accessGift"} />
            </ButtonContent>
          </Button>
        </ButtonContainer>
        </BottomContainer>
      </PopupContainer>
    </PopupViewContainer>
  );
};

export default injectIntl(ValidationSuccessWithGift);
