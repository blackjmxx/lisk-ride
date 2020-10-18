import React from "react";
import { PopupContainer, Image, Text, IconContainer, Icon, PopupContentContainer } from "../RegisterPopup/style"
import { SquareStatusSuccess, SquareStatusError, SquareIcon } from "../SquareStatus/style"
import closeIcon from '../../assets/icons/closeIcon.svg'
import { TitleContainer, Title } from "../../components/EmptyNotificationInformation/style"
import vector from '../../assets/images/Vector.png'
import { PopupViewContainer } from "../popup/style";

export const ValidationResultPopUp = ({ handleUseGift, active, closeUsePopUp, statusTitle ,statusMessage, hasError }) => {
    return (
        <PopupViewContainer>
            <PopupContainer>
                <IconContainer onClick={closeUsePopUp}>
                    <Icon src={closeIcon} />
                </IconContainer>
                { !hasError && <SquareStatusSuccess>
                    <SquareIcon>
                        <Image src={vector} />
                    </SquareIcon>
                </SquareStatusSuccess>}
                { hasError && <SquareStatusError>
                    <SquareIcon>
                        <Image src={vector} />
                    </SquareIcon>
                </SquareStatusError>}
                <TitleContainer>
                    <Title>
                       {statusTitle}
                    </Title>
                </TitleContainer>
                <PopupContentContainer>
                    <Text>
                        {statusMessage}
                    </Text>
                </PopupContentContainer>
            </PopupContainer>
        </PopupViewContainer>
    )
}