import React from 'react';
import ReactDOM from 'react-dom';
import { MDBBtn, MDBFormInline } from 'mdbreact';

class LiveChat extends React.PureComponent {

	state = {
	  chat: ['hello', 'hi!', 'do you want to chat?']
	}
  
	saveMsg = (msg) => this.setState({
	  chat: [
		...this.state.chat,
		msg
	  ]
	})
  
	render() {
	  return (
		<section className="hero is-fullheight red" style={{height: '600px', overflowY: 'auto'}}>
		  
		  <div className="hero-body">
			<Messages chat={this.state.chat} />
		  </div>
  
		  <div className="hero-foot">
			<footer className="section is-small">
			  <Chat saveMsg={this.saveMsg} />
			</footer>
		  </div>
		</section>
	  )
	}
  }
  
  const Chat = ({ saveMsg }) => (
	<form onSubmit={(e) => {
	  e.preventDefault();
	  saveMsg(e.target.elements.userInput.value);
	  e.target.reset();
	}}>
	  <div className="field has-addons">
		<MDBFormInline  className="md-form chat-screen-input">
		  <input className="form-control w-75 mx-auto" name="userInput" type="text" placeholder="Type your message" />
		  <MDBBtn gradient="aqua" rounded size="sm" type="submit" className="mr-auto">Send</MDBBtn>
		</MDBFormInline >
	  </div>
	</form>
  );
  
  const Messages = ({ chat }) => (
	<div style={{ height: '100%', width: '100%' }}>
	  {chat.map((m, i) => {
		const msgClass = i === 0 || i % 2 === 0 // for demo purposes, format every other msg
		return (
		  <p style={{ padding: '.25em', textAlign: msgClass ? 'left' : 'right', overflowWrap: 'normal' }}>
			<span key={i} className={`tag is-medium ${msgClass ? 'is-success' : 'is-info'}`}>{m}</span>
		  </p>
		)}
	  )}
	</div>
  );
  
  ReactDOM.render(<LiveChat />, document.getElementById('root'));

  export default LiveChat;