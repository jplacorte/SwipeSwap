import React from 'react';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Chat from './chat';

function Chats() {
    return (
     <div className="chats">

        <Chat
            name="Mac"
            message="Hello!"
            timestamp="40 seconds ago"
            profilePic="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg"
        />
        <Chat 
            name="Christian"
            message="Hello!"
            timestamp="40 seconds ago"
            profilePic="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
        />
        <Chat 
            name="Renzo"
            message="Hello!"
            timestamp="40 seconds ago"
            profilePic="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg"
        />
        <Chat 
            name="Jaypee"
            message="Hello!"
            timestamp="40 seconds ago"
            profilePic="https://mdbootstrap.com/img/Photos/Others/men.jpg"
        />
    </div>
    );
}

export default Chats;