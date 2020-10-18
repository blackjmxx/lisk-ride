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
  SquareStatusSuccess,
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

const ValidationSuccessPopUp = ({
  closeUsePopUp,
}) => {
  return (
    <PopupViewContainer>
      <PopupContainer>
        <IconContainer onClick={closeUsePopUp}>
          <Icon src={closeIcon} />
        </IconContainer>
        <SquareStatusSuccess>
          <SquareIcon>
            <Image src={vector} />
          </SquareIcon>
        </SquareStatusSuccess>
        <TitleContainer>
          <Title>
            <FormattedMessage id={"global.modalScanSuccessTitle"} />
          </Title>
        </TitleContainer>
        <PopupContentContainer>
          <Text>
            <FormattedMessage id={"global.modalScanSuccesMessage"} />
          </Text>
        </PopupContentContainer>
      </PopupContainer>
    </PopupViewContainer>
  );
};

export default injectIntl(ValidationSuccessPopUp)