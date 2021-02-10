import React, { useEffect, useState } from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import { connect } from 'react-redux';
import { useGetConversations } from '../../actions/chat';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Chat from './chat';

const Chats = ({auth: { isAuthenticated, user } }) => {

    const [conversations, setConversations] = useState([]);
    const [newConversation, setNewConversation] = useState(null);
    const getConversations = useGetConversations();

    useEffect(() => {
        getConversations().then((res) => setConversations(res));
    }, [newConversation]);
    
    let userid
    if(isAuthenticated){
      userid = user._id
    }

    useEffect(() => {
        let socket = require('socket.io-client')('/', {
            secure: true,
            rejectUnauthorized: false,
            path: '/chat/socket.io'
        });

        socket.on("messages", (data) => setNewConversation(data));

        socket.on("match", (data) => toast.success(data, {
            transition: Slide
        }));
        
        socket.on(`accept${userid}`, (data) => toast.success(`Superwant accepted by ${data}!`, {
            transition: Slide
        }));
    
        return () => {
          socket.removeListener("messages");
          socket.removeListener(`accept${userid}`);
        };
    }, []);

    return (
     <div className="chats">
         {
             conversations.length > 0 ? (
                 <>
                 {
                     conversations.map((c) => (
                        <Chat
                            id={c.transaction}
                            conID={c._id}
                            name={isAuthenticated ? user._id === c.users[0] ? c.names[1] : c.names[0] : ''}
                            message={c.lastMessage === "new" ? `Say hi` : c.lastMessage}
                            // timestamp="40 seconds ago"
                            profilePic={isAuthenticated ? user._id === c.users[0] ? c.avatars[1] : c.avatars[0] : ''}
                        />
                     ))
                 }
                 </>
             ) : (<center><h1>Conversation is Empty...</h1></center>)
         }
    </div>
    );
}

const mapStateToProps = state => ({
    chat: state.chat,
    auth: state.auth
})

export default connect(mapStateToProps, {})(Chats);