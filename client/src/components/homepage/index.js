import React, { useState, useEffect } from 'react';
import { Item, PREV, NEXT } from "./swipestyle";
import { MDBRow, MDBCol, MDBBtn, MDBModal,  MDBModalFooter, MDBView, MDBMask, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBRating, MDBIcon, MDBContainer } from 'mdbreact';
import { connect } from 'react-redux';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Navbar from '../navbar';
import SwipeImage from '../../assets/images/swipeswap_item.jpg';
import Avatar from '../../assets/images/avatar.png';
import Carousel, { slideNext, slidePrev } from "./carousel";
import { getAllItem, wantItem } from '../../actions/item';
import { superWant } from '../../actions/match';

const HomePage = ({ getAllItem, wantItem, superWant, item:{ items, loading } }) => {

    useEffect(() => {
      getAllItem() 

    }, [getAllItem])

    const handelShow2 = () => setShowModal2(true);

    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);  
    
    const handleClose = () => setShowModal(false);
    const handleClose2 = () => setShowModal2(false);

    const [count, setCount] = useState(1)
  
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

    const want = () => {
      wantItem(items[count]._id, items[count].user._id)

      setCount(count => count + 1)

      slideNext()
      
      if(count === items.length - 1){
        setCount(count => count = 0)
      }

    }

    const superwant = () => {
      superWant(items[count]._id, items[count].user._id)

      setCount(count => count + 1)

      slideNext()

      if(count === items.length - 1){
        setCount(count => count = 0)
      }

    }

    const boring = () => {
      setCount(count => count + 1)
      
      slideNext()

      if(count === items.length - 1){
        setCount(count => count = 0)
      }
    }

    const rewind = () => {
      slidePrev()

      setCount(count => count - 1)

      if(count === 0){
        setCount(count => count = items.length - 1)
      }
    }
  
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
  
    return (
      <>
      <Navbar />
        <div className="homepage">

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
                        choosed: (itemstatus === 'Very Bad') ? true : false
                      },
                      {
                        tooltip: 'Poor',
                        choosed: (itemstatus === 'Poor') ? true : false
                      },
                      {
                        tooltip: 'Ok',
                        choosed: (itemstatus === 'Ok') ? true : false
                      },
                      {
                        tooltip: 'Good',
                        choosed: (itemstatus === 'Good') ? true : false
                      },
                      {
                        tooltip: 'Excellent',
                        choosed: (itemstatus === 'Excellent') ? true : false
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
          <MDBBtn className="want-ignore-btn color1 px-5 py-2" onClick={val => want(item_id,user_id)}>Want</MDBBtn>
        </MDBModalFooter>
      </MDBModal>

          {/* //Modals */}
        
          <MDBContainer className="homepage-container">
            <MDBRow>
            <MDBCol lg="7" className="px-4">
              <div className="ss-btns-dsk mt-4">
              <div className="d-flex bd-highlight example-parent mb-5 px-4">
                  <div className="flex-fill bd-highlight col-example">
                    <MDBBtn className="ss-btn-want p-2" onClick={val => want(item_id,user_id)} color="success">
                      <MDBIcon icon="heart" style={{fontSize: '45px'}} /><br/> Want</MDBBtn>
                  </div>
                  <div className="flex-fill bd-highlight col-example">
                    <MDBBtn className="ss-btn-swant p-2" color="primary" onClick={val => superwant(item_id,user_id)}>
                      <MDBIcon icon="star" style={{fontSize: '45px'}} /><br/> Super Want</MDBBtn>
                  </div>
              </div>
              <div className="d-flex bd-highlight example-parent px-4">
                <div className="flex-fill bd-highlight col-example">
                    <MDBBtn className="ss-btn-boring p-2" color="danger" onClick={val => boring()}>
                      <MDBIcon icon="times" style={{fontSize: '50px'}}/><br/> Boring</MDBBtn>
                </div>
                <div className="flex-fill bd-highlight col-example">
                    <MDBBtn className="ss-btn-rewind p-2" color="warning" onClick={rewind}><MDBIcon icon="backward" style={{fontSize: '45px'}} /><br/>Rewind</MDBBtn>
                </div> 
                    {/* <MDBBtn className="ss-btn-boost p-2 ml-4" color="secondary" ><MDBIcon icon="rocket" style={{fontSize: '45px'}} /><br/> Boost</MDBBtn> */}
                  
              </div>
            </div>

              {/* <Select options={this.options} setValue={this.setValue}/> <br />
              You select "{this.state.value}" */}
            </MDBCol>
              <MDBCol lg="5">
                <div className="swiper mx-auto flex-center">
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
                </div>
                <div className="ss-btns-m mt-4 mb-3 text-center">
                <MDBBtn className="ss-btn-rewind-m mx-2" color="warning" onClick={rewind}><MDBIcon icon="backward" size="lg" /></MDBBtn>
                <MDBBtn className="ss-btn-boring-m mx-2" color="danger" onClick={val => boring()}><MDBIcon icon="times" size="lg"/></MDBBtn>
                <MDBBtn className="ss-btn-swant-m mx-2" color="primary" onClick={val => superwant(item_id,user_id)}><MDBIcon icon="star" size="lg"/></MDBBtn>
                <MDBBtn onClick={val => want(item_id,user_id)} className="ss-btn-want-m mx-2" color="success"><MDBIcon icon="heart" size="lg" /></MDBBtn>
                  {/* <MDBBtn className="ss-btn-boost-m mx-2" color="secondary"><MDBIcon icon="rocket" size="lg" /></MDBBtn> */}
                </div>
            </MDBCol>
          </MDBRow>
          </MDBContainer>
        </div>
      </>
    );
  }

const mapStateToProps = state => ({
  item: state.item
})

export default connect(mapStateToProps, { getAllItem, wantItem, superWant })(HomePage);
