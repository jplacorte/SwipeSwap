import React, { useState, useEffect } from 'react';
import { MDBView, MDBMask, MDBIcon, MDBBtn, MDBModal, MDBModalFooter, MDBModalBody, MDBModalHeader } from 'mdbreact';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import SwipeImage from '../../assets/images/sslogo.png';
import ProfileAvatar from '../../assets/images/avatar.png';
import { connect } from 'react-redux';
import { getTrans, approve } from '../../actions/transaction';
import { getAllItemsByUser } from '../../actions/item';
import MultiSelect from  'react-multiple-select-dropdown-lite';

const ChatSwap = ({ getAllItemsByUser, getTrans, approve, transaction: { chats, loading }, auth: { isAuthenticated, user }, item: { items } }) => {

    useEffect(() => {
      getTrans()
      getAllItemsByUser()
    }, [getTrans, getAllItemsByUser])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const approveTrans = (userID, userName, itemID) => {
      console.log("Approved")
      // console.log(userID, userName, itemID)
    }

    // let userID = ''
    // let userName = ''
    // let itemID = ''
    // chats.map(result => {
    //   if(isAuthenticated && user.name === result.users[0].ownername){
    //     userID = result.users[0].owner 
    //     userName = result.users[0].ownername
    //     itemID = result.users[0].item
    //   }else{
    //     userID = result.users[0].userwant 
    //     userName = result.users[0].userwantname
    //     itemID = result.users[0].userwantitem ? result.users[0].userwantitem : ''
    //   }
    // })
    const selecitems = [
      { value: 'Ps4 Controller', label: 'Ps4 Controller' },
      { value: 'Logitech Mouse M331 Silent', label: 'Logitech Mouse M331 Silent'},
      { value: 'Sony Bluetooth Speaker', label: 'Sony Bluetooth Speaker' }
    ];
    const onChangeItem = () => {
      console.log("Item Changed")
    }
    return (
      <div className="">

        {/* Modals */}
        <MDBModal isOpen={show} toggle={handleClose}>
          <MDBModalHeader toggle={handleClose}>Change Item</MDBModalHeader>
        <MDBModalBody className="px-4">
        <MultiSelect
              className="w-100 mt-3"
              onChange={onChangeItem}
              options={selecitems}
              placeholder="Change Item"
              singleSelect={true}
            />
        </MDBModalBody>
          <MDBModalFooter className="mx-auto">
            <MDBBtn className="want-ignore-btn px-5 py-2" color="white" onClick={handleClose} >Close</MDBBtn>
            <MDBBtn className="want-ignore-btn color1 px-5 py-2">Change</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
        {/* //Modals */}

      <div className="chat-swap flex-center my-3">

          <MDBView className="chat-swap-img mx-3" onClick={handleShow}>
          <img src={chats.length > 0 ? chats.map(trans => `${ trans.owner && trans.userwant ? isAuthenticated ? ( user._id === trans.ownername ? trans.itemphoto : trans.userwantitemphoto) :SwipeImage : isAuthenticated ? user._id === trans.user1 ? trans.itemphoto1 : trans.itemphoto2 : SwipeImage}`):SwipeImage}/>

              <MDBMask className="m-1">
                <p className="chat-swap-avatar"><img src={chats.length > 0 ? chats.map(trans => `${ trans.owner && trans.userwant ? isAuthenticated ? ( user._id === trans.owner ? trans.owneravatar : trans.userwantavatar) :ProfileAvatar : isAuthenticated ? user._id === trans.user1 ? trans.useravatar1 : trans.useravatar2 : ProfileAvatar}`):ProfileAvatar} className="rounded-circle"/></p>
              </MDBMask>

          </MDBView>

          <MDBIcon icon="sync-alt" style={{color: 'gray'}} size="lg" />

          <MDBView className="chat-swap-img mx-3">
          <img src={chats.length > 0 ? chats.map(trans => `${ trans.owner && trans.userwant ? isAuthenticated ? ( user._id === trans.ownername ? trans.userwantitemphoto : trans.itemphoto) :ProfileAvatar : isAuthenticated ? user._id === trans.user1 ? trans.itemphoto2 : trans.itemphoto1 : SwipeImage}`):SwipeImage}/>

              <MDBMask className="m-1">
              <p className="chat-swap-avatar"><img src={chats.length > 0 ? chats.map(trans => `${ trans.owner && trans.userwant ? isAuthenticated ? ( user._id === trans.owner ? trans.userwantavatar : trans.owneravatar) :ProfileAvatar : isAuthenticated ? user._id === trans.user1 ? trans.useravatar2 : trans.useravatar1 : ProfileAvatar}`):ProfileAvatar} className="rounded-circle"/></p>
              </MDBMask>
              
          </MDBView>
      </div>

      <div className="mb-3 text-center">
          <MDBBtn className="chat-swap-btn-ignore mx-2" color="danger">Decline</MDBBtn>
          <MDBBtn onClick={val => approveTrans()} className="chat-swap-btn-approve mx-2">Approve</MDBBtn>
          {/* {
            chats.length > 0 ? chats.map(users => (
              <MDBBtn onClick={val => approveTrans(userID, userName, itemID)} className="chat-swap-btn-approve mx-2">Approve</MDBBtn>
            )):
            (<MDBBtn className="chat-swap-btn-approve mx-2">Accept</MDBBtn>)
          } */}
      </div>

    </div>
    );
}

const mapStateToProps = state => ({
  transaction: state.transaction,
  auth: state.auth,
  item: state.item
})

export default connect( mapStateToProps, { getTrans, approve, getAllItemsByUser })(ChatSwap);
