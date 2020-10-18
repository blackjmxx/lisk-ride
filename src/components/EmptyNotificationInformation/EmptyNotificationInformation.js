import React from 'react'
import MenuBar from '../../components/MenuBar/Menubar.js'
import { Content } from '../Scanner/SelectFromImages/style/index.js'
import { Title, EmptyNotificationsContainer, ImageContainer, Image, ContentContainer, TitleContainer } from './style/index.js'
import emptyNotifications from '../../assets/images/notificationsEmpty.svg'
import { FormattedMessage } from 'react-intl';

export const EmptyNotificationInformation = () => {
    return (
        <>
        <EmptyNotificationsContainer>
            <ImageContainer>
                <Image src={emptyNotifications} />
            </ImageContainer>
            <TitleContainer>
                <Title>
                    <FormattedMessage id={"infosPage.NotificationtAvailableTitle"} />
                </Title>
            </TitleContainer>
            <ContentContainer>
                <Content>
                    <FormattedMessage id={"infosPage.NotificationtAvailableDescription"} />
                </Content>
            </ContentContainer>
        </EmptyNotificationsContainer>
        <MenuBar />
        </>
    )
}