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

    const approveTrans = (userID, userName, itemID) => {
      console.log("Approved")
      handleShow2()
      // console.log(userID, userName, itemID)
    }

    const confirm = () => {
      window.location.href='/profile'
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

    const [basic] = useState([
      {
        tooltip: 'Poor'
      },
      {
        tooltip: 'Unsatisfactory'
      },
      {
        tooltip: 'Satisfactory',
        choosed: true
      },
      {
        tooltip: 'Very Satisfactory'
      },
      {
        tooltip: 'Outstanding'
      }
    ]);
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
            <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={true}
            className="z-depth-1 item-img-slider"
            interval={false}
          >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
               
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
            </MDBCol>
          </MDBRow>
          <MDBRow className="p-3">
            <MDBCol md="12">
              <div className="d-flex bd-highlight example-parent">
                <div className="w-100 bd-highlight col-example item-name">Item Name</div>
                <div className="bd-highlight col-example ml-auto">
                  <ItemCondition />
                </div>
              </div>
        <div className="item-description mt-2">Item Description</div>
        <div className="item-category mt-3">Cateories</div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="12" className="">
              <div className="item-user-profile p-3">
              <div className="d-flex bd-highlight example-parent">
                 <div className="flex-fill bd-highlight col-example">
                    <img src={ProfileAvatar} /><span className="ml-2 item-user-profile-name">Name</span>
                 </div>
                 <div className="bd-highlight col-example ml-auto">
                   <MDBBtn className="view-profile-btn">View Profile</MDBBtn>
                 </div>
                </div>
                {/* onSubmit={e => onSubmit(e)} */}
                  <form  className="my-3 text-center mx-auto">
                  <div style={{fontSize: '16px', fontWeight: 'bold'}}>Rate</div>
                  <div className="flex-center my-2">
                    <MDBRating
                      data={basic} 
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
                    // value={reviewdetails} 
                    // onChange={e => onChange(e)}
                    />
                  </div>
                  <div className="mx-auto mt-4">
                    <MDBBtn className="modal-btn-sm p-2 px-4" color="white" onClick={handleClose2}>Cancel</MDBBtn>
                    <MDBBtn  className="modal-btn-sm p-2 px-4 color1" onClick={e => confirm()}>Confirm</MDBBtn>
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
