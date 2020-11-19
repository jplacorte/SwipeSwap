import React, { useState, useEffect } from 'react';
import { MDBRow, MDBCol, MDBView, MDBMask, MDBIcon, MDBBtn, MDBModal, MDBModalFooter } from 'mdbreact';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import SwipeImage from '../../assets/images/item1.jpg';
import ProfileAvatar from '../../assets/images/avatar.png';
import Avatar from '../../assets/images/avatar.png';
import ImgSlider from '../imgSlider';
import ItemCondition from '../itemCondition';
import { connect } from 'react-redux';
import { getAllChat, approve } from '../../actions/transaction';

const ChatSwap = ({ getAllChat, approve, transaction: { chats, loading }, auth: { isAuthenticated, user }, name, message, profilePic, timestamp }) => {

    useEffect(() => {
      getAllChat()
    }, [getAllChat])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const approveTrans = (userID, userName, itemID) => {
      approve(itemID, userID, userName)
      // console.log(userID, userName, itemID)
    }

    let userID = ''
    let userName = ''
    let itemID = ''
    chats.map(result => {
      if(isAuthenticated && user.name === result.users[0].name){
        userID = result.users[1].user 
        userName = result.users[1].name
        itemID = result.users[1].item
      }else{
        userID = result.users[0].user 
        userName = result.users[0].name
        itemID = result.users[0].item
      }
    })
    return (
      <div className="">

        {/* Modals */}
        <MDBModal isOpen={show} toggle={handleClose}>
        <div className="item-details-modal">
          <MDBRow>
              <MDBCol md="12">
              <ImgSlider />
              </MDBCol>
            </MDBRow>
            <MDBRow className="p-3">
              <MDBCol md="12">
                <div className="d-flex bd-highlight example-parent">
                  <div className="bd-highlight col-example item-name">Sample Name</div>
                  <div className="bd-highlight col-example ml-auto"><ItemCondition /></ div>
                </div>
                <div className="item-distance">8km<span> • Delivery</span></div>
                <div className="item-description mt-2">Sample Description Sample Description Sample   Description</div>
                <div className="item-category mt-3">Category1 • Category2 • Category3</div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12" className="">
                <div className="item-user-profile p-3">
                <div className="d-flex bd-highlight example-parent">
                   <div className="flex-fill bd-highlight col-example">
                     <img src={Avatar} /><span className="ml-2 item-user-profile-name">Sample   Username</span>
                   </div>
                   <div className="bd-highlight col-example ml-auto">
                     <MDBBtn className="view-profile-btn">View Profile</MDBBtn>
                   </div>
                  </div>
                  <div className="d-flex bd-highlight example-parent text-center mt-3">
                    <div className="flex-fill bd-highlight col-example">
                      <div className="font-weight-bold" style={{fontSize: '18px'}}>20</div>
                    <div>Deals</div>
                    </div>
                    <div className="flex-fill bd-highlight col-example">
                    <div className="font-weight-bold" style={{fontSize: '18px'}}>4.7</div>
                      <div>Rating</div>
                    </div>
                    <div className="flex-fill bd-highlight col-example">
                    <div className="font-weight-bold" style={{fontSize: '18px'}}>4</div>
                      <div>Items</div>
                    </div>
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
          </div>
          <MDBModalFooter className="mx-auto">
            <MDBBtn className="want-ignore-btn px-5 py-2" color="white" onClick={handleClose} >Ignore</MDBBtn>
            <MDBBtn className="want-ignore-btn color1 px-5 py-2">Want</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
        {/* //Modals */}

      <div className="chat-swap flex-center my-3">

          <MDBView className="chat-swap-img mx-3" onClick={handleShow}>
              <img src={`${chats.length > 0 ? chats.map(itemphoto => (
                isAuthenticated ? (user._id === itemphoto.users[0].user ? itemphoto.users[0].url : itemphoto.users[1].url) : SwipeImage
              )) : SwipeImage}`} />
              <MDBMask className="m-1">
                <p className="chat-swap-avatar"><img src={ProfileAvatar} className="rounded-circle"/></p>
              </MDBMask>
          </MDBView>

          <MDBIcon icon="sync-alt" style={{color: 'gray'}} size="lg" />

          <MDBView className="chat-swap-img mx-3" onClick={handleShow}>
          <img src={`${chats.length > 0 ? chats.map(itemphoto => (
                isAuthenticated ? (user._id === itemphoto.users[0].user ? itemphoto.users[1].url : itemphoto.users[0].url) : SwipeImage
              )) : SwipeImage}`} />
              <MDBMask className="m-1">
                <p className="chat-swap-avatar"><img src={ProfileAvatar} className="rounded-circle"/></p>
              </MDBMask>
          </MDBView>
      </div>

      <div className="mb-3 text-center">
          <MDBBtn className="chat-swap-btn-ignore mx-2" color="danger">Decline</MDBBtn>
          {
            chats.length > 0 ? chats.map(users => (
              <MDBBtn onClick={val => approveTrans(userID, userName, itemID)} className="chat-swap-btn-approve mx-2">Approve</MDBBtn>
            )):(<MDBBtn className="chat-swap-btn-approve mx-2">Accept</MDBBtn>)
          }
      </div>

    </div>
    );
}

const mapStateToProps = state => ({
  transaction: state.transaction,
  auth: state.auth
})

export default connect( mapStateToProps, { getAllChat, approve })(ChatSwap);
