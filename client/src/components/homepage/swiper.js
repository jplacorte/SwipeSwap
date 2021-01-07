import React, { useEffect, useState } from 'react';
import { Item } from "./swipestyle";
import { connect } from 'react-redux';
import { getAllItem, wantItem } from '../../actions/item';
import Carousel from "./carousel";
import { MDBRow, MDBCol, MDBBtn, MDBModal,  MDBModalFooter, MDBView, MDBMask, MDBListGroupItem, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBRating } from 'mdbreact';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import SwipeImage from '../../assets/images/swipeswap_item.jpg';
import Avatar from '../../assets/images/avatar.png';

const Swiper = ({ getAllItem, wantItem, item:{ itemModal, items, loading } }) => {

    useEffect(() => {
      getAllItem() 

      setItemsData({
        item_id : items.id,
        itemname: items.name,
        description: items.desc,
        categories: items.cat,
        user_id: items.userId,
        username: items.user
      })

    }, [getAllItem])
    
    const [itemsData, setItemsData] = useState({
      item_id: '',
      itemname:'',
      description:'',
      status:'',
      categories:'',
      user_id:'',
      username:'',
      itemstatus: '',
      image1:'',
      image2:'',
      image3:'',
    })

    const {
      item_id,
      itemname,
      description,
      categories,
      user_id,
      username,
      itemstatus,
      image1,
      image2,
      image3
    } = itemsData

    const [showModal, setShowModal] = useState(false);  
    const handleClose = () => setShowModal(false);
    
    const handleShow = (id, name, desc, cat, userId, user, status, photo1, photo2, photo3) => {

      setItemsData({
        item_id : id,
        itemname: name,
        description: desc,
        categories: Array.isArray(cat) ? cat.join('•') : cat,
        user_id: userId,
        username: user,
        itemstatus: status,
        image1: photo1,
        image2: photo2,
        image3: photo3,
      })
      setShowModal(true)
    }

    const want = e => {
      wantItem(e)
    }

    return (
      <>
      {/* Modals */}
      <MDBModal isOpen={showModal} toggle={handleClose}>
        <div className="item-details-modal">
          <MDBRow>
            <MDBCol md="12">
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={false}
                showIndicators={true}
                className="z-depth-1 item-img-slider"
                interval={false}
            >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={`${image1}`}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={`${image2}`}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={`${image3}`}
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
                <div className="w-100 bd-highlight col-example item-name">{itemname}</div>
                <div className="bd-highlight col-example ml-auto">
                <MDBRating 
                data={
                    [
                      {
                        tooltip: 'Very Bad',
                        choosed: (itemstatus == 'Very Bad') ? true : false
                      },
                      {
                        tooltip: 'Poor',
                        choosed: (itemstatus == 'Poor') ? true : false
                      },
                      {
                        tooltip: 'Ok',
                        choosed: (itemstatus == 'Ok') ? true : false
                      },
                      {
                        tooltip: 'Good',
                        choosed: (itemstatus == 'Good') ? true : false
                      },
                      {
                        tooltip: 'Excellent',
                        choosed: (itemstatus == 'Excellent') ? true : false
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
                </ div>
              </div>
             <div className="item-description mt-2">{description}</div>
          <div className="item-category mt-3">{categories}</div>
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
                    <div className="font-weight-bold" style={{fontSize: '18px'}}>0</div>
                  <div>Deals</div>
                  </div>
                  <div className="flex-fill bd-highlight col-example">
                  <div className="font-weight-bold" style={{fontSize: '18px'}}>0.00</div>
                    <div>Rating</div>
                  </div>
                  <div className="flex-fill bd-highlight col-example">
                  <div className="font-weight-bold" style={{fontSize: '18px'}}>0</div>
                    <div>Items</div>
                  </div>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </div>
        <MDBModalFooter className="mx-auto">
          <MDBBtn className="want-ignore-btn px-5 py-2" color="white" onClick={handleClose}>Ignore</MDBBtn>
          <MDBBtn className="want-ignore-btn color1 px-5 py-2" onClick={val => want(item_id)}>Want</MDBBtn>
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
              item.user.name,
              item.status,
              item.photo[1] ? item.photo[1].url : SwipeImage,
              item.photo[2] ? item.photo[2].url : SwipeImage,
              item.photo[3] ? item.photo[3].url : SwipeImage
              )}><Item img={item.photo[0] ? `${item.photo[0].url}` : SwipeImage}/>
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

export default connect(mapStateToProps, { getAllItem, wantItem })(Swiper);
