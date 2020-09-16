import React, { useState } from 'react';
import { Link, withRouter }  from 'react-router-dom';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Navbar from '../navbar';
import { MDBRow, MDBCol, MDBContainer, MDBIcon, MDBNavbar, MDBView, MDBMask, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import ChatSwap from './chatSwap';

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
        <div>

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
        <MDBContainer className="chat-screen mx-auto">
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
                          <MDBDropdownItem style={{color: '#167D7F'}} ><MDBIcon far icon="thumbs-up"/> Approve</MDBDropdownItem>
                          <MDBDropdownItem style={{color: 'red'}} ><MDBIcon far icon="times-circle" /> Ignore</MDBDropdownItem>
                        </MDBDropdownMenu>
                      </MDBDropdown>
                      </div>
                    </div>
                   </div>
                 </div>
                </MDBNavbar>

            <MDBRow className="chat-screen-content">
            <MDBCol xl="12" className="mx-auto pb-5">  
            
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
                    <form className="chat-screen-input">
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
