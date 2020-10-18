import React from "react";
import {
  PopupContainer,
  Image,
  Text,
  IconContainer,
  Icon,
  PopupContentContainer
} from "../RegisterPopup/style";
import {
  SquareStatusError,
  SquareIcon
} from "../SquareStatus/style";
import closeIcon from "../../assets/icons/closeIcon.svg";
import {
  TitleContainer,
  Title
} from "../../components/EmptyNotificationInformation/style";
import vector from "../../assets/images/Vector.png";
import { PopupViewContainer } from "../popup/style";
import { FormattedMessage, injectIntl } from "react-intl";

export const ValidationErrorPopUp = ({ closeUsePopUp }) => {
  return (
    <PopupViewContainer>
      <PopupContainer>
        <IconContainer onClick={closeUsePopUp}>
          <Icon src={closeIcon} />
        </IconContainer>
        <SquareStatusError>
          <SquareIcon>
            <Image src={vector} />
          </SquareIcon>
        </SquareStatusError>
        <TitleContainer>
          <Title>
            <FormattedMessage id={"global.modalScanErrorMessage"} />
          </Title>
        </TitleContainer>
        <PopupContentContainer>
          <Text>
            <FormattedMessage id={"global.modalScanErrotMessage"} />
          </Text>
        </PopupContentContainer>
      </PopupContainer>
    </PopupViewContainer>
  );
};

export default injectIntl(ValidationErrorPopUp)