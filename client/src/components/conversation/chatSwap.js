import React, { useState, useEffect } from 'react';
import { MDBView, MDBMask, MDBIcon, MDBBtn, MDBModal, MDBModalFooter, MDBModalBody, MDBModalHeader, MDBRow, MDBCol, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBRating } from 'mdbreact';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import SwipeImage from '../../assets/images/sslogo.png';
import ProfileAvatar from '../../assets/images/avatar.png';
import { connect } from 'react-redux';
import { getTrans, approve } from '../../actions/transaction';
import { getAllItemsByUser } from '../../actions/item';
import MultiSelect from  'react-multiple-select-dropdown-lite';
import ItemCondition from '../itemCondition'

const ChatSwap = ({ getAllItemsByUser, getTrans, approve, transaction: { chats, loading }, auth: { isAuthenticated, user }, item: { items } }) => {

    useEffect(() => {
      getTrans()
      getAllItemsByUser()
    }, [getTrans, getAllItemsByUser])

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [formData, setFormData] = useState({
      reviewdetails:''
    })

    const {
      reviewdetails,
    } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
      e.preventDefault();
      approve(formData, itemID2, userID2)

      setTimeout(() => {
        window.location.href='/profile'
      }, 1000);
      
    }

    const approveTrans = () => {
      handleShow2()
    }

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
                    <MDBBtn className="modal-btn-sm p-2 px-4" color="white" onClick={handleClose2}>Cancel</MDBBtn>
                    <MDBBtn  className="modal-btn-sm p-2 px-4 color1" type="submit">Confirm</MDBBtn>
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
