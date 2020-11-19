import React, { useState } from 'react';
import { Link, withRouter }  from 'react-router-dom';
import ReactDOM from 'react-dom';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Navbar from '../navbar';
import { MDBRow, MDBCol, MDBContainer, MDBIcon, MDBNavbar, MDBView, MDBMask, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import ChatSwap from './chatSwap';
import 'react-chat-elements/dist/main.css';
import LiveChat from './liveChat';
// MessageBox component
import { MessageBox, MessageList, ChatItem, Input, Button  } from 'react-chat-elements';

// /* detect url in a message and add a link tag */
// function detectURL(message) {
// 	var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
// 	return message.replace(urlRegex, function(urlMatch) {
// 		return '<a href="' + urlMatch + '">' + urlMatch + '</a>';
// 	})
// }

// /* ========== */
// //  Title component 
// class Title extends React.Component {
// 	constructor(props, context) {
//  		super(props, context);
//  	}
//  	render() {
// 		return (
//  			<div className={"chatApp__convTitle"}>{this.props.owner}</div>
//  		);
// 	}
//  }
// /* end Title component */
// /* ========== */

// /* ========== */
// /* InputMessage component - used to type the message */
// class InputMessage extends React.Component {
// 	constructor(props, context) {
// 		super(props, context);
// 		this.handleSendMessage = this.handleSendMessage.bind(this);
// 		this.handleTyping = this.handleTyping.bind(this);
// 	}
// 	handleSendMessage(event) {
// 		event.preventDefault();
// 		/* Disable sendMessage if the message is empty */
// 		if( this.messageInput.value.length > 0 ) {
// 			this.props.sendMessageLoading(this.ownerInput.value, this.ownerAvatarInput.value, this.messageInput.value);
// 			/* Reset input after send*/
// 			this.messageInput.value = '';
// 		}
// 	}
// 	handleTyping(event) {
// 		/* Tell users when another user has at least started to write */
// 		if( this.messageInput.value.length > 0 ) {
// 			this.props.typing(this.ownerInput.value);
// 		}
// 		else {
// 			/* When there is no more character, the user no longer writes */
// 			this.props.resetTyping(this.ownerInput.value);
// 		}
// 	}
// 	render() {
// 		/* If the chatbox state is loading, loading class for display */
// 		var loadingClass = this.props.isLoading ? 'chatApp__convButton--loading' : '';
// 		let sendButtonIcon = <i className={"material-icons"}>send</i>;
// 		return (
// 			<form onSubmit={this.handleSendMessage}>
// 				<input
// 					type="hidden"
// 					ref={owner => (this.ownerInput = owner)}
// 					value={this.props.owner}
// 				/>
// 				<input
// 					type="hidden"
// 					ref={ownerAvatar => (this.ownerAvatarInput = ownerAvatar)}
// 					value={this.props.ownerAvatar}
// 				/>
// 				<input
// 					type="text"
// 					ref={message => (this.messageInput = message)}
// 					className={"chatApp__convInput"}
// 					placeholder="Text message"
// 					onKeyDown={this.handleTyping}
// 					onKeyUp={this.handleTyping}
// 					tabIndex="0"
// 				/>
// 				<div className={'chatApp__convButton ' + loadingClass} onClick={this.handleSendMessage}>
// 				{sendButtonIcon}
// 				</div>
// 			</form>
// 		);
// 	}
// }
// /* end InputMessage component */
// /* ========== */

// /* ========== */
// /* TypingIndicator component */
// class TypingIndicator extends React.Component {
// 	constructor(props, context) {
// 		super(props, context);
// 	}
// 	render() {
// 		let typersDisplay = '';
// 		let countTypers = 0;
// 		/* for each user writing messages in chatroom */
// 		for ( var key in this.props.isTyping ) {
// 			/* retrieve the name if it isn't the owner of the chatbox */
// 			if( key != this.props.owner && this.props.isTyping[key] ) {
// 				typersDisplay += ', ' + key;
// 				countTypers++;
// 			}
// 		}
// 		/* formatting text */
// 		typersDisplay = typersDisplay.substr(1);
// 		typersDisplay += (( countTypers > 1 ) ? ' are ' : ' is ');
// 		/* if at least one other person writes */
// 		if ( countTypers > 0 ) {
// 			return (
// 				<div className={"chatApp__convTyping"}>{typersDisplay} writing
// 				<span className={"chatApp__convTypingDot"}></span>
// 				</div>
// 			);
// 		}
// 		return (
// 			<div className={"chatApp__convTyping"}></div>
// 		);
// 	}
// }
// /* end TypingIndicator component */
// /* ========== */

// /* ========== */
// /* MessageList component - contains all messages */
// class MessageList extends React.Component {
// 	constructor(props, context) {
// 		super(props, context);
// 	}
// 	render() {
// 		return (
// 			<div className={"chatApp__convTimeline"}>
// 			{this.props.messages.slice(0).reverse().map(
// 				messageItem => (
// 					<MessageItem
// 						key={messageItem.id}
// 						owner={this.props.owner}
// 						sender={messageItem.sender}
// 						senderAvatar={messageItem.senderAvatar}
// 						message={messageItem.message}
// 					/>
// 				)
// 			)}
// 			</div>
// 		);
// 	}
// }
// /* end MessageList component */
// /* ========== */

// /* ========== */
// /* MessageItem component - composed of a message and the sender's avatar */
// class MessageItem extends React.Component {
// 	render() {
// 		/* message position formatting - right if I'm the author */
// 		let messagePosition = (( this.props.owner == this.props.sender ) ? 'chatApp__convMessageItem--right' : 'chatApp__convMessageItem--left');
// 		return (
// 			<div className={"chatApp__convMessageItem " + messagePosition + " clearfix"}>
// 				<img src={this.props.senderAvatar} alt={this.props.sender} className="chatApp__convMessageAvatar" />
// 				<div className="chatApp__convMessageValue" dangerouslySetInnerHTML={{__html: this.props.message}}></div>
// 			</div>
// 		);
// 	}
// }
// /* end MessageItem component */
// /* ========== */

// /* ========== */
// /* ChatBox component - composed of Title, MessageList, TypingIndicator, InputMessage */
// class ChatBox extends React.Component {
// 	constructor(props, context) {
// 		super(props, context);
// 		this.state = {
// 			isLoading: false
// 		};
// 		this.sendMessageLoading = this.sendMessageLoading.bind(this);
// 		var timeout = null;
// 	}
// 	/* catch the sendMessage signal and update the loading state then continues the sending instruction */
// 	sendMessageLoading(sender, senderAvatar, message) {
// 		this.setState({ isLoading: true });
// 		this.props.sendMessage(sender, senderAvatar, message);
// 		setTimeout(() => {
// 			this.setState({ isLoading: false });
// 		}, 400);
// 	}
// 	render() {
// 		return (
// 			<div className={"chatApp__conv"}>
// 				<MessageList
// 					owner={this.props.owner}
// 					messages={this.props.messages}
// 				/>
// 				<div className={"chatApp__convSendMessage clearfix"}>
// 					<TypingIndicator
// 						owner={this.props.owner}
// 						isTyping={this.props.isTyping}
// 					/>
// 					<InputMessage
// 						isLoading={this.state.isLoading}
// 						owner={this.props.owner}
// 						ownerAvatar={this.props.ownerAvatar}
// 						sendMessage={this.props.sendMessage}
// 						sendMessageLoading={this.sendMessageLoading}
// 						typing={this.props.typing}
// 						resetTyping={this.props.resetTyping}
// 					/>
// 				</div>
// 			</div>
// 		);
// 	}
// }
// /* end ChatBox component */
// /* ========== */

// /* ========== */
// /* ChatRoom component - composed of multiple ChatBoxes */
// class ChatRoom extends React.Component {
// 	constructor(props, context) {
// 		super(props, context);
// 		this.state = {
// 			messages: [{
// 				id: 1,
// 				sender: 'Shun',
// 				senderAvatar: 'https://i.pravatar.cc/150?img=32',
// 				message: 'Hello 👋'
// 			},
// 			{
// 				id: 2,
// 				sender: 'Gabe',
// 				senderAvatar: 'https://i.pravatar.cc/150?img=56',
// 				message: 'Hey!'
// 			},
// 			{
// 				id: 3,
// 				sender: 'Gabe',
// 				senderAvatar: 'https://i.pravatar.cc/150?img=56',
// 				message: 'How are you?'
// 			},
// 			{
// 				id: 4,
// 				sender: 'Shun',
// 				senderAvatar: 'https://i.pravatar.cc/150?img=32',
// 				message: 'Great! It\'s been a while... 🙃'
// 			},
// 			{
// 				id: 5,
// 				sender: 'Gabe',
// 				senderAvatar: 'https://i.pravatar.cc/150?img=56',
// 				message: 'Indeed.... We\'re gonna have to fix that. 🌮🍻'
// 			}
// 			],
// 			isTyping: [],
// 		};
// 		this.sendMessage = this.sendMessage.bind(this);
// 		this.typing = this.typing.bind(this);
// 		this.resetTyping = this.resetTyping.bind(this);
// 	}
// 	/* adds a new message to the chatroom */
// 	sendMessage(sender, senderAvatar, message) {
// 		setTimeout(() => {
// 			let messageFormat = detectURL(message);
// 			let newMessageItem = {
// 				id: this.state.messages.length + 1,
// 				sender: sender,
// 				senderAvatar: senderAvatar,
// 				message: messageFormat
// 			};
// 			this.setState({ messages: [...this.state.messages, newMessageItem] });
// 			this.resetTyping(sender);
// 		}, 400);
// 	}
// 	/* updates the writing indicator if not already displayed */
// 	typing(writer) {
// 		if( !this.state.isTyping[writer] ) {
// 			let stateTyping = this.state.isTyping;
// 			stateTyping[writer] = true;
// 			this.setState({ isTyping: stateTyping });
// 		}
// 	}
// 	/* hide the writing indicator */
// 	resetTyping(writer) {
// 		let stateTyping = this.state.isTyping;
// 		stateTyping[writer] = false;
// 		this.setState({ isTyping: stateTyping });
// 	}
// 	render() {
// 		let users = {};
// 		let chatBoxes = [];
// 		let messages = this.state.messages;
// 		let isTyping = this.state.isTyping;
// 		let sendMessage = this.sendMessage;
// 		let typing = this.typing;
// 		let resetTyping = this.resetTyping;

// 		/* user details - can add as many users as desired */
// 		users[0] = { name: 'Shun', avatar: 'https://i.pravatar.cc/150?img=32' };
// 		// users[1] = { name: 'Gabe', avatar: 'https://i.pravatar.cc/150?img=56' };
// 		/* test with two other users :)
// 		users[2] = { name: 'Kate', avatar: 'https://i.pravatar.cc/150?img=47' };
// 		users[3] = { name: 'Patrick', avatar: 'https://i.pravatar.cc/150?img=14' };
// 		*/
		
// 		/* creation of a chatbox for each user present in the chatroom */
// 		Object.keys(users).map(function(key) {
// 			var user = users[key];
// 			chatBoxes.push(
// 				<ChatBox
// 					key={key}
// 					owner={user.name}
// 					ownerAvatar={user.avatar}
// 					sendMessage={sendMessage}
// 					typing={typing}
// 					resetTyping={resetTyping}
// 					messages={messages}
// 					isTyping={isTyping}
// 				/>
// 			);
// 		});
// 		return (
// 			<div className={"chatApp__room"}>
// 				{chatBoxes}
// 			</div>
// 		);
// 	}
// }
// /* end ChatRoom component */
// /* ========== */

// /* render the chatroom */
// setTimeout(() => {
// 	ReactDOM.render(<ChatRoom />, document.getElementById("ChatApp"));
// }, 400);


// CHATSCREEN 
function ChatScreen() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [ inputFile, setInputFile ] = useState ('');
    const [ input, setInput ] = useState ('');
    const [ messages, setMessages ] = useState ([
        {
            name: 'Mac',
            image: 'https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg',
            message: 'Hi!'
        },
        {
            name: 'Mac',
            image: 'https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg',
            message: 'How old is this item?'
        },
        {
            message: 'Good as new',
        },
    ]);

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInputFile("");
        setInput("");
    }
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
                          <div>Sample Name</div>
                          <div style={{fontSize: '12px', color: 'grey'}}>Active 40 seconds ago</div>
                      </div>
                      <div className="bd-highlight col-example">
                      <img src={"https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg"} className="rounded-circle chat-screen-image ml-2 mt-1" alt="KB" />
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
              {/* <div className="mt-5">
              <ChatSwap />
              </div>
              <section id="ChatApp" class="chatApp">
              	<div class="chatApp__loaderWrapper">
              		<div class="chatApp__loaderText">Loading...</div>
              		<div class="chatApp__loader"></div>
              	</div>
              </section> */}
            
            <p className="text-center mt-5">YOU MATCHED WITH MAC ON 08/14/20</p>

            <div>
                <ChatSwap />
            </div>
                
            {messages.map((message) => 
                    message.name ? (
                <div className="chat-screen-message">
                    <img 
                        src={message.image} 
                        className="rounded-circle chat-screen-image mb-2"   
                        alt={message.name}
                    />
                    <p className="chat-screen-text">{message.message}</p>
                </div>
                ) : 
                (
                <div className="chat-screen-message">
                 <p className="chat-screen-text-user">{message.message}</p>
                 </div>
                )
                )}
                    <form className="chat-screen-input" onSubmit={handleSend}>
                    <div className="input-group" style={{width: '50px', zIndex: '-1'}}
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
                    </div>
                        <input 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            type="text" 
                            className="chat-screen-input-field"
                            placeholder="Type a message..."
                        />
                        <button onClick={handleSend} type="submit" className="chat-screen-input-btn">Send</button>
                    </form>
                    </MDBCol>
                </MDBRow>
        </MDBContainer>
        </div>
    );
}

export default ChatScreen;
