import React, { useState, useEffect } from 'react';
import { MDBView, MDBMask, MDBIcon, MDBBtn, MDBModal, MDBModalFooter, MDBModalBody, MDBModalHeader, MDBRow, MDBCol, MDBRating } from 'mdbreact';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import SwipeImage from '../../assets/images/sslogo.png';
import ProfileAvatar from '../../assets/images/avatar.png';
import { connect } from 'react-redux';
import { getTrans, useApprove, useUpdateItem } from '../../actions/transaction';
import { getAllItemsByUser } from '../../actions/item';
import { useSubmitReview } from '../../actions/review';
import Select from "react-select";
import chat from '../../reducers/chat';
// import { useHistory } from 'react-router-dom';
// import ItemCondition from '../itemCondition'

var showChangeModal

const ChatSwap = ({ getAllItemsByUser, getTrans, transaction: { chats, loading }, auth: { isAuthenticated, user }, item: { items } }) => {

    useEffect(() => {
      getTrans()
      getAllItemsByUser()
    }, [getTrans, getAllItemsByUser])

    useEffect(() => {

      let socket = require('socket.io-client')('/', {
        secure: true,
        rejectUnauthorized: false,
        path: '/chat/socket.io'
      });

      socket.on(`change`, (data) => data === chats[0]._id ? document.location.reload() : '');

      
      return () => {
        socket.removeListener(`change`)
      };

    })

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const [count, setCount] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [formData, setFormData] = useState({
      reviewdetails:'',
    })
    const [item_id, setItemId] = useState(null)
    const {
      reviewdetails
    } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const approve = useApprove()

    const approveTrans = () => {
      if(chats[0].count === 1 || count === 1){
        document.getElementById('approvingBtn').style.display = "none";
        document.getElementById('declineBtn').style.display = "none";
        document.getElementById('approveBtn').style.display = "none";
        document.getElementById('pending-btn').style.display = "";
      }else if(chats[0].count === 2 || count === 2){
        handleShow2()
      }else{
        setCount(1)
        document.getElementById('approvingBtn').style.display = "";
        approve(count, userID2, chats[0]._id).then(res => {
          document.getElementById('approvingBtn').style.display = "none";
          document.getElementById('pending-btn').style.display = "";
          document.getElementById('declineBtn').style.display = "none";
          document.getElementById('approveBtn').style.display = "none";
        })
      }
    }

    showChangeModal = handleShow

    let userID = ''
    let userName = ''
    let itemID = ''
    let itemPhoto = ''
    let userAvatar = ''
    let itemName = ''
    let desc = ''
    let status = ''

    chats.map(result => {
     if(result.owner && result.userwant){
      if(isAuthenticated && user._id === result.owner){
        userID = result.owner 
        userName = result.ownername
        itemID = result.item
        itemPhoto = result.itemphoto
        userAvatar = result.owneravatar
        itemName = result.itemname
        desc = result.itemdesc
        status = result.itemstatus
      }else{
        userID = result.userwant 
        userName = result.userwantname
        itemID = result.userwantitem ? result.userwantitem : ''
        itemPhoto = result.userwantitemphoto ? result.userwantitemphoto : ''
        userAvatar = result.userwantavatar
        itemName = result.userwantitemname
        desc = result.userwantitemdesc
        status = result.userwantitemstat
      }
     }else{
       if(isAuthenticated && user._id === result.user1){
        userID = result.user1
        userName = result.username1
        itemID = result.item1
        itemPhoto = result.itemphoto1
        userAvatar = result.useravatar1
        itemName = result.itemname1
        desc = result.itemdesc1
        status = result.itemstatus1
       }else{
        userID = result.user2
        userName = result.username2
        itemID = result.item2
        itemPhoto = result.itemphoto2
        userAvatar = result.useravatar2
        itemName = result.itemname2
        desc = result.itemdesc2
        status = result.itemstatus2
       }
     }
    })

    let userID2 = ''
    let userName2 = ''
    let itemID2 = ''
    let itemPhoto2 = ''
    let userAvatar2 = ''
    let itemName2 = ''
    let desc2 = ''
    let status2 = ''

    chats.map(result => {
     if(result.owner && result.userwant){
      if(isAuthenticated && user._id === result.owner){
        userID2 = result.userwant 
        userName2 = result.userwantname
        itemID2 = result.userwantitem ? result.userwantitem : ''
        itemPhoto2 = result.userwantitemphoto ? result.userwantitemphoto : ''
        userAvatar2 = result.userwantavatar
        itemName2 = result.userwantitemname
        desc2 = result.userwantitemdesc
        status2 = result.userwantitemstat
      }else{
        userID2 = result.owner 
        userName2 = result.ownername
        itemID2 = result.item
        itemPhoto2 = result.itemphoto
        userAvatar2 = result.owneravatar
        itemName2 = result.itemname
        desc2 = result.itemdesc
        status2 = result.itemstatus
      }
     }else{
       if(isAuthenticated && user._id === result.user1){
        userID2 = result.user2
        userName2 = result.username2
        itemID2 = result.item2
        itemPhoto2 = result.itemphoto2
        userAvatar2 = result.useravatar2
        itemName2 = result.itemname2
        desc2 = result.itemdesc2
        status2 = result.itemstatus2
       }else{
        userID2 = result.user1
        userName2 = result.username1
        itemID2 = result.item1
        itemPhoto2 = result.itemphoto1
        userAvatar2 = result.useravatar1
        itemName2 = result.itemname1
        desc2 = result.itemdesc1
        status2 = result.itemstatus1
       }
     }
    })

    useEffect(() => {

      let socket = require('socket.io-client')('/', {
        secure: true,
        rejectUnauthorized: false,
        path: '/chat/socket.io'
      });

      socket.on(`count${userID}`, (data) => {
        setCount(2)
        window.location.reload(true)
      });
      
      return () => {
        socket.removeListener(`count${userID}`);
      }
    })

    const onChangeItem = (e) => {
      setItemId(e.value)
    }
    const updateItem = useUpdateItem()
    const changeItem = () => {
      document.getElementById('update-btn').style.display = "";
      document.getElementById('change-btn').style.display = "none";

      updateItem(item_id, chats[0]._id).then(() => {
        document.location.reload()
      })
    }
    
    const submitReview = useSubmitReview()
    
    const onSubmit = e => {
      e.preventDefault();
      if(chats[0].count === 2 || count === 2){
        document.getElementById('cnfrming-btn').style.display = "";
        document.getElementById('cnfrm-btn').style.display = "none";
        submitReview(itemID2, userID2, formData).then(() => {
          //Dev
          // window.location="/profile"

          //Deploy
          //For ios compatibility
          window.location="https://swipeswap.me/profile"
        })
      }else{
        document.getElementById('cnfrm-btn').style.display = "none";
        document.getElementById('cancel-btn').style.display = "none";
      }     
    }

    return (
      <div className="">

        {/* Modals */}
        <MDBModal isOpen={show} toggle={handleClose}>
          <MDBModalHeader toggle={handleClose}>Change Item</MDBModalHeader>
        <MDBModalBody className="px-4">
        <Select
              className="w-100 mt-3"
              onChange={onChangeItem}
              options={items.map((item) => ({
                value: item._id, label: item.itemname
              }))}
              placeholder="Choose an Item"
            />
        </MDBModalBody>
          <MDBModalFooter className="mx-auto">
            <MDBBtn className="want-ignore-btn px-5 py-2" color="white" onClick={handleClose} >Close</MDBBtn>
            <MDBBtn className="want-ignore-btn color1 px-5 py-2" id="change-btn" onClick={changeItem}>Change</MDBBtn>
            <MDBBtn className="want-ignore-btn color1 px-5 py-2" id="update-btn" style={{ display: 'none' }} disabled>Updating...</MDBBtn>
          </MDBModalFooter>
        </MDBModal>

        {/* Rate Modal */}
        <MDBModal isOpen={show2} onHide={handleClose2}>
          <div className="item-details-modal">
          <MDBRow>
            <MDBCol md="12">
            <MDBView>
              <img
                className="d-block w-100"
                src={itemPhoto2 ? itemPhoto2 : SwipeImage}
                alt="First slide"
              />
              </MDBView>
            </MDBCol>
          </MDBRow>
          <MDBRow className="p-3">
            <MDBCol md="12">
              <div className="d-flex bd-highlight example-parent">
                <div className="w-100 bd-highlight col-example item-name">{itemName2}</div>
                <div className="bd-highlight col-example ml-auto">
                <MDBRating 
                  data={
                    [
                      {
                        tooltip: 'Very Bad',
                        choosed: (status2 === 'Very Bad') ? true : false
                      },
                      {
                        tooltip: 'Poor',
                        choosed: (status2 === 'Poor') ? true : false
                      },
                      {
                        tooltip: 'Ok',
                        choosed: (status2 === 'Ok') ? true : false
                      },
                      {
                        tooltip: 'Good',
                        choosed: (status2 === 'Good') ? true : false
                      },
                      {
                        tooltip: 'Excellent',
                        choosed: (status2 === 'Excellent') ? true : false
                      }
                    ]
                  }
                  fillColors={[
                  'red-text',
                  'orange-text',
                  'yellow-text',
                  'lime-text',
                  'light-green-text'
                  ]} 
                />
                </div>
              </div>
        <div className="item-description mt-2">{desc2 ? desc2 : 'No description'}</div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="12" className="">
              <div className="item-user-profile p-3">
              <div className="d-flex bd-highlight example-parent">
                 <div className="flex-fill bd-highlight col-example">
                  <img src={userAvatar2 ? userAvatar2 : ProfileAvatar} /><span className="ml-2 item-user-profile-name">{userName2}</span>
                 </div>
                 <div className="bd-highlight col-example ml-auto">
                   <MDBBtn className="view-profile-btn">View Profile</MDBBtn>
                 </div>
                </div>
                {/* onSubmit={e => onSubmit(e)} */}
                  <form  className="my-3 text-center mx-auto" onSubmit={e => onSubmit(e)}>
                  <div style={{fontSize: '16px', fontWeight: 'bold'}}>Rate</div>
                  <div className="flex-center my-2">
                    <MDBRating
                      data={
                        [
                          {
                            tooltip: 'Poor'
                          },
                          {
                            tooltip: 'Unsatisfactory'
                          },
                          {
                            tooltip: 'Satisfactory'
                          },
                          {
                            tooltip: 'Very Satisfactory'
                          },
                          {
                            tooltip: 'Outstanding'
                          }
                        ]
                      } 
                      iconFaces 
                      fillColors={[
                        'red-text',
                        'orange-text',
                        'yellow-text',
                        'lime-text',
                        'light-green-text',   
                      ]}  
                      iconRegular
                      iconSize="lg" 
                    />
                  </div>
                  <div className="m-3">
                    <textarea
                    className="form-control" 
                    rows="3" 
                    placeholder="Write something here..." 
                    name="reviewdetails"
                    value={reviewdetails}
                    required 
                    onChange={e => onChange(e)}
                    />
                  </div>
                  <div className="mx-auto mt-4">
                    <MDBBtn className="modal-btn-sm p-2 px-4" color="white" onClick={handleClose2} id="cancel-btn">Cancel</MDBBtn>
                    <MDBBtn  className="modal-btn p-2 px-4 color1"id="cnfrming-btn" style={{ display:'none' }} disabled>Confirming...</MDBBtn>
                    <MDBBtn  className="modal-btn-sm p-2 px-4 color1" type="submit" id="cnfrm-btn">Confirm</MDBBtn>
                   </div>
                  </form>
              </div>
            </MDBCol>
          </MDBRow>
          </div>
          </MDBModal>
        {/* //Rate Modal */}
        {/* //Modals */}

      <div className="chat-swap flex-center my-3">

          <MDBView className="chat-swap-img mx-3" onClick={handleShow}>
          <img src={itemPhoto ? itemPhoto :SwipeImage}/>

              <MDBMask className="m-1">
                <p className="chat-swap-avatar"><img src={userAvatar ? userAvatar : ProfileAvatar} className="rounded-circle"/></p>
              </MDBMask>

          </MDBView>

          <MDBIcon icon="sync-alt" style={{color: 'gray'}} size="lg" />

          <MDBView className="chat-swap-img mx-3">
          <img src={itemPhoto2 ? itemPhoto2 :SwipeImage}/>

              <MDBMask className="m-1">
              <p className="chat-swap-avatar"><img src={userAvatar2 ? userAvatar2 :ProfileAvatar} className="rounded-circle"/></p>
              </MDBMask>
              
          </MDBView>
      </div>

      <div className="mb-3 text-center">
        {
          chats.map(trans =>
            trans.count === 1 ? (
              <MDBBtn className="chat-swap-btn-approve mx-2" id="pending-btn" disabled>Pending Approval...</MDBBtn>
            ) 
            : trans.count === 2 ? (
              <MDBBtn onClick={val => approveTrans()} id="approveBtn" className="chat-swap-btn-approve mx-2">Review and Submit</MDBBtn>
            ) : (<>
              <MDBBtn className="chat-swap-btn-ignore mx-2" color="danger" id="declineBtn">Decline</MDBBtn>
              <MDBBtn id="approvingBtn" className="chat-swap-btn-approve mx-2" disabled style={{ display: 'none' }}>Confirming...</MDBBtn>
              <MDBBtn className="chat-swap-btn-approve mx-2" id="pending-btn" style={{ display:'none' }} disabled>Pending Approval...</MDBBtn>
              <MDBBtn onClick={val => approveTrans()} id="approveBtn" className="chat-swap-btn-approve mx-2">Approve</MDBBtn>
            </>)
          )
          
        }
          
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

export const openModal = () => {
  showChangeModal()
}

const mapStateToProps = state => ({
  transaction: state.transaction,
  auth: state.auth,
  item: state.item
})

export default connect( mapStateToProps, { getTrans, getAllItemsByUser })(ChatSwap);
