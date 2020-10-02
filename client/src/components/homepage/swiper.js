import React, { useEffect, useState } from 'react';
import { Item, AppContainer, ExtraInfo, Code } from "./swipestyle";
import { connect } from 'react-redux';
import { getAllItem, getItemById, openItemModal } from '../../actions/item';
import Carousel from "./carousel";
import { MDBRow, MDBCol, MDBBtn, MDBModal,  MDBModalFooter, MDBView, MDBMask, MDBListGroupItem } from 'mdbreact';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import SwipeImage from '../../assets/images/item1.jpg';
import SwipeImage2 from '../../assets/images/item7.jpg';
import Avatar from '../../assets/images/avatar.png';
import ImgSlider from '../imgSlider';
import ItemCondition from '../itemCondition';

const Swiper = ({ getAllItem, openItemModal, item:{ itemModal, items, loading } }) => {

    useEffect(() => {
      getAllItem() 
    }, [getAllItem])
    
    const [itemsData, setItemsData] = useState({
      itemname:'',
      description:'',
      status:'',
      categories:'',
      user_id:'',
      username:''
    })

    const {
      itemname,
      description,
      categories,
      user_id,
      username
    } = itemsData

    const [showModal, setShowModal] = useState(false);  
    const handleClose = () => setShowModal(false);
    
    const handleShow = (id, name, desc, cat, userId, user) => {
      console.log(userId)
      setItemsData({
        itemname: name,
        description: desc,
        categories: cat,
        user_id: userId,
        username: user
      })
      setShowModal(true)
    }

    return (
      <>
      {/* Modals */}
      <MDBModal isOpen={showModal} toggle={handleClose}>
        <div className="item-details-modal">
          <MDBRow>
            <MDBCol md="12">
            <ImgSlider />
            </MDBCol>
          </MDBRow>
          <MDBRow className="p-3">
            <MDBCol md="12">
              <div className="d-flex bd-highlight example-parent">
                <div className="w-100 bd-highlight col-example item-name">{itemname}</div>
                <div className="bd-highlight col-example ml-auto"><ItemCondition /></ div>
              </div>
             <div className="item-description mt-2">{description}</div>
          <div className="item-category mt-3">{categories}•</div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="12" className="">
              <div className="item-user-profile p-3">
              <div className="d-flex bd-highlight example-parent">
                 <div className="flex-fill bd-highlight col-example">
                  <img src={Avatar} /><span className="ml-2 item-user-profile-name">{username}</span>
                 </div>
                 <div className="bd-highlight col-example ml-auto">
                   <MDBBtn className="view-profile-btn" href={`/profile/${user_id}`}>View Profile</MDBBtn>
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
          <MDBBtn className="want-ignore-btn px-5 py-2" color="white" onClick={handleClose}>Ignore</MDBBtn>
          <MDBBtn className="want-ignore-btn color1 px-5 py-2">Want</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
      {/* //Modals */}

        <Carousel title="Carousel">
        {
          items.length > 0 ? (items.map(item => (
            <MDBView>
            <a className="swipe-item" onClick={val => handleShow(
              item._id, 
              item.itemname,
              item.description,
              item.categories,
              item.user._id,
              item.user.name
              )}><Item img={SwipeImage2}/>
            <MDBMask>
              <div className="swipe-item-details p-3">
               <div className="font-weight-bold item-name">{ item.itemname }</div>
              </div>
            </MDBMask>
            </a>
          </MDBView>
          ))):(<h4>No Items</h4>)
        }
        
      </Carousel>
      </>
    );
  }

const mapStateToProps = state => ({
  item: state.item
})

export default connect(mapStateToProps, { getAllItem, openItemModal })(Swiper);
