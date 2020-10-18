import React from "react";
import { PopupContainer, IconContainer, Icon, Image, Text, ButtonContainer, PopupContentContainer } from "../RegisterPopup/style"
import { BlueButton } from "../../pages/SettingsPage/LoginForm/LoginTab/style"
import closeIcon from '../../assets/icons/closeIcon.svg'
import coffee from '../../assets/images/coffee.svg'
import { PopupViewContainer } from "../popup/style";
import '../popup/index.scss'

export const GiftScan = ({ handleUseGift, active }) => {
    return (
        <PopupViewContainer className={active ? 'active' : null}>
            <PopupContainer>
                <IconContainer>
                    <Icon src={closeIcon} />
                </IconContainer>
                <Image src={coffee} />
                <PopupContentContainer>
                    <Text>
                    Show the screen to the merchant so he can scan it
                    </Text>
                </PopupContentContainer>
                <ButtonContainer onClick={handleUseGift}>
                    <BlueButton> Use it</BlueButton>
                </ButtonContainer>
            </PopupContainer>
        </PopupViewContainer>
    )
}