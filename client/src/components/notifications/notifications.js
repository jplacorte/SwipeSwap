import React from 'react';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Notification from './notification';
import SwipeSwapLogo from '../../assets/images/ssicon.png';

function Notifications() {
    return (
     <div className="notifications">

        <Notification 
            name="SwipeSwap Team"
            message="Welcome to SwipeSwap! Collect your 10 SwipeSwap Coins! Welcome to SwipeSwap! Collect your 10 SwipeSwap Coins!"
            timestamp="40 seconds ago"
            profilePic={SwipeSwapLogo}
        />
        <Notification 
            name="Mac Quioyo"
            message="Mac Quioyo matched with you!"
            timestamp="40 seconds ago"
            profilePic="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg"
        />   
        <Notification 
            name="Renzo"
            message="Sample Notification"
            timestamp="40 seconds ago"
            profilePic="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg"
        />
        <Notification
            name="Jaypee"
            message="Sample Notification"
            timestamp="40 seconds ago"
            profilePic="https://mdbootstrap.com/img/Photos/Others/men.jpg"
        />
    </div>
    );
}

export default Notifications;