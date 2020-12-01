import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useGetConversations } from '../../actions/chat';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Chat from './chat';
import socketIOClient from 'socket.io-client';

const Chats = ({props, auth: { isAuthenticated, user } }) => {

    const [conversations, setConversations] = useState([]);
    const [newConversation, setNewConversation] = useState(null);
    const getConversations = useGetConversations();

    useEffect(() => {
        getConversations().then((res) => setConversations(res));
    }, [newConversation]);
    
    useEffect(() => {
        let socket = socketIOClient(process.env.REACT_APP_API_URL);
        socket.on("messages", (data) => setNewConversation(data));
    
        return () => {
          socket.removeListener("messages");
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
                            message={c.lastMessage}
                            // timestamp="40 seconds ago"
                            profilePic={isAuthenticated ? user._id === c.users[0] ? c.avatars[1] : c.avatars[0] : ''}
                        />
                     ))
                 }
                 </>
             ) : (<center><h1>Conversation is Empty...</h1></center>)
         }
                {/* <Chat
                    id="aasdad"
                    name="Jaypee"
                    message="Hello!"
                    // timestamp="40 seconds ago"
                    // profilePic={}
                /> */}
            {/* {
             transactions.length > 0 ? (
                 transactions.map( transaction => (
                    transaction.users.length > 1 && transaction.superwant != true ? (
                    
                ): '')) 
             ):(<h4>Chat is empty....</h4>)
            }
            {
                transactions.length > 0 ? (
                    transactions.map( transaction => transaction.superwant === true ? (<Chat
                        id={transaction._id}
                        name={transaction.users[0].userwantname}
                        message="Hello!"
                        profilePic={`${transaction.users[0].userwantavatar}`}
                    />) : ''
                )) : ("")
            } */}
    </div>
    );
}

const mapStateToProps = state => ({
    chat: state.chat,
    auth: state.auth
})

export default connect(mapStateToProps, {})(Chats);