import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Link }  from 'react-router-dom';
import { getTrans } from '../../actions/transaction';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Navbar from '../navbar';
import { MDBRow, MDBCol, MDBContainer, MDBIcon, MDBNavbar, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import ChatSwap from './chatSwap';
import 'react-chat-elements/dist/main.css';
import { useGetConversationMessages, useSendConversationMessage } from '../../actions/chat';

// CHATSCREEN 
const ChatScreen = ({ getTrans, transaction: { chats, transaction_users, loading }, match, auth: { isAuthenticated, user } }) => {

    let userID = ''
    let userName = ''
    let itemID = ''
    
    chats.map(result => {
      if(result.ownername || result.userwant){
        if(isAuthenticated && user._id === result.owner){
          userID = result.userwant 
          userName = result.userwantname
          itemID = result.userwantitem ? result.users.userwantitem : ''
        }else{
          userID = result.owner 
          userName = result.ownername
          itemID = result.item
        }
      }else{
        if(result.user1 || result.user2){
          if(isAuthenticated && user._id === result.user1){
            userID = result.user2 
            userName = result.username2
            itemID = result.useritem2
          }else{
            userID = result.user1 
            userName = result.username1
            itemID = result.useritem1
          }
        }
      }
    })

  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [lastMessage, setLastMessage] = useState(null);
  // let chatBottom = useRef(null);

  const getConversationMessages = useGetConversationMessages();
  const sendConversationMessage = useSendConversationMessage();

  useEffect(() => {
    reloadMessages();
  //   scrollToBottom();
  }, [lastMessage, match.params.conID]);

  useEffect(() => {
    let socket = require('socket.io-client')('http://localhost:5000');
    socket.on("messages", (data) => setLastMessage(data));
  }, []);

  const reloadMessages = () => {
  if(match.params.conID != "conv") {
      getConversationMessages(match.params.conID).then((res) => setMessages(res));
    } else {
      setMessages([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendConversationMessage(userID, match.params.conID, newMessage, match.params.id).then((res) => {
      setNewMessage("");
    });
  };

  useEffect(() => {
    getTrans(match.params.id)
  }, [getTrans, match.params.id])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    // const [ inputFile, setInputFile ] = useState ('');
    // const [ input, setInput ] = useState ('');
    // const [ messages, setMessages ] = useState ([
        {
            // name: 'John Phillip Lacorte',
            // image: 'https://res.cloudinary.com/dibx7ua1g/image/upload/v1602141359/swipeSwap/jrpcj5s7vpijiqxau5x0.jpg',
            // message: 'Hi!'
        }
    // ]);

    // const handleSend = e => {
    //     e.preventDefault();
    //     setMessages([...messages, { message: input }]);
    //     setInputFile("");
    //     setInput("");
    // }
    return (
        <div className="chat-screen">

          {/* Modals */}
          {/* Set Schedule Modal */}
          <MDBModal isOpen={show} onHide={handleClose} size="sm">
          <MDBModalHeader>Set Schedule</MDBModalHeader>
            <MDBModalBody>
            <div className="form-group">
              <label>Set Date</label>
              <input type="date" id="example1" className="form-control form-control-md" />
            </div>
            <div className="form-group">
              <label>Set Time</label>
              <input type="time" id="example2" className="form-control form-control-md" />
            </div>
            </MDBModalBody>
        <MDBModalFooter>
          <div className="mx-auto">
          <MDBBtn className="modal-btn-sm p-2 px-4" color="white" onClick={handleClose}>Cancel</MDBBtn>
          <MDBBtn className="modal-btn-sm p-2 px-4 color1">Set</MDBBtn>
          </div>
        </MDBModalFooter>
          </MDBModal>
        {/* //Set Schedule Modal */}

         {/*//Modals  */}

        <Navbar style={{zIndex: '2'}} />
        <MDBContainer className="chat-screen-container mx-auto">
            <MDBNavbar color="white" fixed="top" className="" style={{marginTop: '61px', padding: '0px', zIndex: '1'}} >
                <div className="d-flex bd-highlight example-parent p-2 mx-auto w-100">
                  <div className="flex-fill bd-highlight col-example">
                    <Link to="/conversation" >
                    <MDBIcon icon="angle-left" className="pt-2 ml-4" style={{fontSize: '32px', color: '#167D7F'}} />
                    </Link>
                   </div>
                   <div className="flex-fill bd-highlight col-example text-right">
                   <div className="d-flex bd-highlight example-parent">
                      <div className="w-100 bd-highlight col-example">
                        <div>{chats.map(m => m.owner && m.superwant?  isAuthenticated ? user._id === m.owner ? m.userwantname : m.ownername : '' : isAuthenticated ? user._id === m.user1 ? m.username2 : m.username1: '')}</div>
                          {/* <div style={{fontSize: '12px', color: 'grey'}}>Active 40 seconds ago</div> */}
                      </div>
                      <div className="bd-highlight col-example">
                      <img src={chats.map(m => m.owner && m.superwant?  isAuthenticated ? user._id === m.owner ? m.userwantavatar : m.owneravatar : '' : isAuthenticated ? user._id === m.user1 ? m.useravatar2 : m.useravatar1: '')} className="rounded-circle chat-screen-image ml-2 mt-1" alt="KB" />
                      </div>
                      <div className="text-right">
                      <MDBDropdown className="pt-1" style={{fontSize: '10px!important'}} dropleft>
                        <MDBDropdownToggle nav>
                          <span><MDBIcon icon="ellipsis-v" style={{color: '#167D7F'}} /></span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                          <MDBDropdownItem onClick={handleShow}><MDBIcon far icon="calendar-alt" /> Set Schedule</MDBDropdownItem>
                          {/* <MDBDropdownItem style={{color: '#167D7F'}} ><MDBIcon far icon="thumbs-up"/> Approve</MDBDropdownItem> */}
                          <MDBDropdownItem style={{color: 'red'}} ><MDBIcon far icon="times-circle" /> Report User</MDBDropdownItem>
                        </MDBDropdownMenu>
                      </MDBDropdown>
                      </div>
                    </div>
                   </div>
                 </div>
                </MDBNavbar>

            <MDBRow className="chat-screen-content">
            <MDBCol xl="12" className="mx-">
            {/* YOU MATCHED WITH {transaction_users.length > 0 ? (transaction_users.map(user_trans => (isAuthenticated ? ( user.name === user_trans.users[0].name ? user_trans.users[1].name : user_trans.users[0].name) : ''))) : ""} ON 10/23/20 */}
            <p className="text-center mt-5"></p>

            <div>
                <ChatSwap />
            </div>
            {/*Chat*/}    
            {messages && (messages.map((m) => 
                  isAuthenticated ? user._id === m.to ? (
                <div className="chat-screen-message">
                    <img 
                        src={m.fromAvatar} 
                        className="rounded-circle chat-screen-image mb-2"   
                        alt={m.fromName}
                    />
                    <p className="chat-screen-text">{m.body}</p>
                </div>
                ) : 
                (
                <div className="chat-screen-message">
                 <p className="chat-screen-text-user">{m.body}</p>
                 </div>
                ) : ""
                )
            )}
                    <form className="chat-screen-input" onSubmit={handleSubmit}>
                    {/* <div className="input-group" style={{width: '50px', zIndex: '-1'}}
                    >
                      <MDBView className="custom-file mt-1">
                      <MDBIcon icon="paperclip" size="lg" style={{color: '#167D7F'}} />
                      <MDBMask className="flex-center">
                        <input
                          value={inputFile}
                          onChange={(e) => setInputFile(e.target.value)}
                          type="file"
                          className="custom-file-input chat-screen-input-field"
                          style={{zIndex: '1!important'}}
                        />
                        </MDBMask>
                      </MDBView>
                    </div> */}
                        <input 
                            name="message"
                            onChange={(e) => setNewMessage(e.target.value)}
                            value={newMessage}
                            type="text" 
                            className="chat-screen-input-field"
                            placeholder="Type a message..."
                        />
                        <button type="submit" className="chat-screen-input-btn">Send</button>
                    </form>
                    </MDBCol>
                </MDBRow>
        </MDBContainer>
        </div>
    );
}

const mapStateToProps = state => ({
    transaction: state.transaction,
    auth: state.auth
})
export default connect(mapStateToProps, { getTrans })(ChatScreen);
