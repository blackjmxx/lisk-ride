import React, { Component } from 'react'
import './styles.css'
import { EmptyNotificationInformation } from '../../components/EmptyNotificationInformation/EmptyNotificationInformation';
// import { NotificationItem } from '../../components/NotificationItem/NotificationItem';
// import { NotificationsViewContainer, ItemsContainer, HeaderContainer, HeaderTitle, OtherHeaderTitle } from './styles';
// import MenuBar from '../../components/MenuBar/Menubar.js'

class InfosPage extends Component {

  todayNotifications = [
    {
      title: `You've won a free donut`,
      content: 'Locals Coffee',
    },
    {
      title: `You've won a free donut`,
      content: 'Locals Coffee',
    },
    {
      title: `You've won a free donut`,
      content: 'Locals Coffee',
    },
  ]

  render() {
      // if (this.todayNotifications.length > 0) {
      //   return (
      //       <>
      //       <NotificationsViewContainer>
      //       <ItemsContainer>
      //         <HeaderContainer>
      //           <HeaderTitle>
      //               Today
      //           </HeaderTitle>
      //           </HeaderContainer>
      //           {this.todayNotifications.map(item => <NotificationItem title={item.title} content={item.content}/>)}
      //       </ItemsContainer>
      //       <ItemsContainer>
      //       <HeaderContainer>
      //         <OtherHeaderTitle>
      //         Oct 18, Friday
      //         </OtherHeaderTitle>
      //       </HeaderContainer>  
      //         {this.todayNotifications.map(item =><NotificationItem title={item.title} content={item.content} earlierNotification />)}
      //       </ItemsContainer>
      //       </NotificationsViewContainer>
      //       <MenuBar />
      //      </>
      //   )};

        //if (this.todayNotifications.length === 0 ) {
          return <EmptyNotificationInformation />
        //}

       // return null;
  }
}
export default InfosPage
