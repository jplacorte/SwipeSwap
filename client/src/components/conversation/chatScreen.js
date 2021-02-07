import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Link }  from 'react-router-dom';
import { getTrans } from '../../actions/transaction';
import Add from '../../assets/images/additem.png';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Navbar from '../navbar';
import { MDBRow, MDBCol, MDBContainer, MDBIcon, MDBNavbar, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBView, MDBMask } from 'mdbreact';
import ChatSwap, { openModal } from './chatSwap';
import 'react-chat-elements/dist/main.css';
import { useGetConversationMessages, useSendConversationMessage, useSendPhoto } from '../../actions/chat';
import { useUploadPhoto } from '../../actions/item';

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
          itemID = result.userwantitem ? result.userwantitem : ''
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
  const [photo, setPhoto] = useState(null);
  const [photo2, setPhoto2] = useState(null);
  const [photo3, setPhoto3] = useState(null);
  const [photo4, setPhoto4] = useState(null);
  // let chatBottom = useRef(null);

  const getConversationMessages = useGetConversationMessages();
  const sendConversationMessage = useSendConversationMessage();
  const sendPhoto = useSendPhoto();
  const uploadPhoto = useUploadPhoto();

  useEffect(() => {
    reloadMessages();
    getTrans(match.params.conID, match.params.id)
  //   scrollToBottom();
  }, [lastMessage, match.params.conID, getTrans, match.params.id]);

  // Dev
  // useEffect(() => {
  //   let socket = require('socket.io-client')('http://localhost:5000', {
  //     path: '/chat/socket.io'
  //   });
  //   socket.on("messages", (data) => setLastMessage(data));
  // }, []);

  useEffect(() => {
    let socket = require('socket.io-client')('/', {
      secure: true,
      rejectUnauthorized: false,
      path: '/chat/socket.io'
    });
    socket.on("messages", (data) => setLastMessage(data));
  }, []);

  const reloadMessages = () => {
  if(match.params.conID) {
      getConversationMessages(match.params.conID).then((res) => setMessages(res));
    } else {
      setMessages([]);
    }
  };

    const [picture, setPicture] = useState(null);
    const [picture2, setPicture2] = useState(null);
    const [picture3, setPicture3] = useState(null);
    const [picture4, setPicture4] = useState(null);

    const [file, setfile] = useState(undefined);
    const [file2, setfile2] = useState(undefined);
    const [file3, setfile3] = useState(undefined);
    const [file4, setfile4] = useState(undefined);

    const [show, setShow] = useState(false);
    const handleClose2 = () => setShowModal(false);
    const handleShow2 = () => setShowModal(true);
    const [showModal, setShowModal] = useState(false);  

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    // const [ inputFile, setInputFile ] = useState ('');
    // const [ input, setInput ] = useState ('');

    const onChangePicture = e => {
      document.getElementById('uploadButton').style.display = "";
      document.getElementById('sendBtn').style.display = "none";

      setPicture(URL.createObjectURL(e.target.files[0]));
      setfile(e.target.files[0])

      uploadPhoto(e.target.files[0]).then((res) => {
        document.getElementById('uploadButton').style.display = "none";
        document.getElementById('sendBtn').style.display = "";
        setPhoto(res)
        console.log(photo)
      })
    };

    const onChangePicture2 = e => {
      document.getElementById('uploadButton').style.display = "";
      document.getElementById('sendBtn').style.display = "none";

      setPicture2(URL.createObjectURL(e.target.files[0]));
      setfile2(e.target.files[0])

      uploadPhoto(e.target.files[0]).then((res) => {
        document.getElementById('uploadButton').style.display = "none";
        document.getElementById('sendBtn').style.display = "";
        setPhoto2(res)
      })
    };

    const onChangePicture3 = e => {
      document.getElementById('uploadButton').style.display = "";
      document.getElementById('sendBtn').style.display = "none";

      setPicture3(URL.createObjectURL(e.target.files[0]));
      setfile3(e.target.files[0])

      uploadPhoto(e.target.files[0]).then((res) => {
        document.getElementById('uploadButton').style.display = "none";
        document.getElementById('sendBtn').style.display = "";
        setPhoto3(res)
      })
    };

    const onChangePicture4 = e => {
      document.getElementById('uploadButton').style.display = "";
      document.getElementById('sendBtn').style.display = "none";

      setPicture4(URL.createObjectURL(e.target.files[0]));
      setfile4(e.target.files[0])

      uploadPhoto(e.target.files[0]).then((res) => {
        document.getElementById('uploadButton').style.display = "none";
        document.getElementById('sendBtn').style.display = "";
        setPhoto4(res)
      })
    };

// src={picture ? picture : ''} 
    const ImgUpload = () =>{
      return(
        <label htmlFor="photo-upload" className="item-prev-upload flex-center">
          <div className="item-prev-upload-wrap item-prev-upload-img" >
            <img htmlFor="photo-upload" src={picture ? picture : Add} />
          </div>
          <input id="photo-upload" type="file" onChange={onChangePicture}/> 
        </label>
      );
    }

    const ImgUpload2 = () =>{
      return(
        <label htmlFor="photo-upload2" className="item-prev-upload flex-center">
          <div className="item-prev-upload-wrap item-prev-upload-img" >
            <img htmlFor="photo-upload2" src={picture2 ? picture2 : Add} />
          </div>
          <input id="photo-upload2" type="file" onChange={onChangePicture2}/> 
        </label>
      );
    }

    const ImgUpload3 = () =>{
      return(
        <label htmlFor="photo-upload3" className="item-prev-upload flex-center">
          <div className="item-prev-upload-wrap item-prev-upload-img" >
            <img htmlFor="photo-upload3" src={picture3 ? picture3 : Add} />
          </div>
          <input id="photo-upload3" type="file" onChange={onChangePicture3}/> 
        </label>
      );
    }

    const ImgUpload4 = () =>{
      return(
        <label htmlFor="photo-upload4" className="item-prev-upload flex-center">
          <div className="item-prev-upload-wrap item-prev-upload-img" >
            <img htmlFor="photo-upload4" src={picture4 ? picture4 : Add} />
          </div>
          <input id="photo-upload4" type="file" onChange={onChangePicture4}/> 
        </label>
      );
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      sendConversationMessage(userID, match.params.conID, newMessage, match.params.id).then((res) => {
        setNewMessage("");
      });
    };

    const onSubmit = (e) => {
      e.preventDefault();
      document.getElementById('sendingBtn').style.display = "";
      document.getElementById('sendBtn').style.display = "none";
      sendPhoto(userID, match.params.conID, photo, photo2, photo3, photo4, match.params.id).then((res) => {
        handleClose2();
        setNewMessage("");
        document.getElementById('sendingBtn').style.display = "none";
        document.getElementById('sendBtn').style.display = "";
      });
    };
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

        <MDBModal isOpen={showModal} toggle={handleClose2}>
      <MDBModalHeader toggle={handleClose2}>Add Images</MDBModalHeader>
        <MDBModalBody className="px-4 text-center">
        {/*  */}
          <form onSubmit={e => onSubmit(e)} >
          <MDBRow className="mx-auto">
            <MDBCol className="item-prev-col flex-center" size="6">
              <ImgUpload/>
            </MDBCol>
            <MDBCol className="item-prev-col flex-center" size="6">
              <ImgUpload2/>
            </MDBCol>
            <MDBCol className="item-prev-col flex-center" size="6">
              <ImgUpload3/>
            </MDBCol>
            <MDBCol className="item-prev-col flex-center" size="6">
              <ImgUpload4/>
            </MDBCol>
            </MDBRow>
   
            <div className="flex-center">
            <MDBBtn className="modal-btn-sm p-2 px-4" color="white" onClick={handleClose2}>Cancel</MDBBtn>
            <MDBBtn className="confirm-btn color1 my-4 py-2 px-5" id="uploadButton" style={{ display: "none" }} disabled>Uploading Photo...</MDBBtn>
            <MDBBtn className="confirm-btn color1 my-4 py-2 px-5" id="sendingBtn" style={{ display: "none" }} disabled>Sending...</MDBBtn>
              <MDBBtn type="submit" className="confirm-btn color1 my-4 py-2 px-5" id="sendBtn">Send</MDBBtn>
            </div>
          </form>
        </MDBModalBody>
      </MDBModal>

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
                    <>
                <div className="chat-screen-message">
                    <img 
                        src={m.fromAvatar} 
                        className="rounded-circle chat-screen-image mb-2"   
                        alt={m.fromName}
                    />
                    <p >{m.body}</p>
                    { m.photos.length > 0 ? m.photos.map(photo => photo != null ?<img src={photo} alt="msg" style={{ height:"200px", width:"200px" }}/>: '') : '' }
                </div>
                
                </>
                ) : 
                (<>
                <div className="chat-screen-message">
                 <p className="chat-screen-text-user">{m.body}</p>
                 { m.photos.length > 0 ? m.photos.map(photo => photo != null ? <img src={photo} alt="msg" style={{ height:"200px", width:"200px" }}/> : '') : '' }
                 </div>
                 </>
                ) : ""
                )
            )}
              {chats.map(trans => trans.swapped === "true" || trans.swapped === "Declined" ? ('') : (<form className="chat-screen-input" onSubmit={handleSubmit}>
                    <div className="input-group" style={{width: '50px', zIndex: '-1'}}
                    >
                      <MDBView className="custom-file mt-1">
                      <a onClick={handleShow2}>
                      <MDBMask className="flex-center">
                      <MDBIcon icon="fas fa-plus-circle" size="lg" style={{color: '#167D7F'}} />
                      </MDBMask>
                      </a>
                      </MDBView>
                      <MDBView className="custom-file mt-1">
                      <a onClick={openModal}>
                      <MDBMask className="flex-center">
                      <MDBIcon icon="exchange-alt" size="lg" style={{color: '#167D7F'}} />
                      </MDBMask>
                      </a>
                      </MDBView>
                    </div>
                        <input 
                            name="message"
                            onChange={(e) => setNewMessage(e.target.value)}
                            value={newMessage}
                            type="text" 
                            className="chat-screen-input-field"
                            placeholder="Type a message..."
                            required="true"
                        />
                        <button type="submit" className="chat-screen-input-btn">Send</button>
                    </form>))}
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
