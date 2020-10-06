import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon } from 'mdbreact';
import Select from 'react-select';
import { connect } from 'react-redux';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Swiper from './swiper';
import Navbar from '../navbar';
import SwipeImage from '../../assets/images/swipeswap_item.jpg';
import { getAllItem } from '../../actions/item';

const HomePage = ({ getAllItem, item: {items, loading} }) => {

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
    username:''
  })

  const {
    item_id,
    itemname,
    description,
    categories,
    user_id,
    username
  } = itemsData

    const [showModal, setShowModal] = useState(false);  
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
  
    const categoriesoptions = [
      { value: 'Vehicles', label: 'Vehicles' },
      { value: 'Apparel', label: 'Apparel' },
      { value: 'Electronics', label: 'Electronics' },
      { value: 'Entertainment', label: 'Entertainment' },
      { value: 'Baby & Kids Items', label: 'Baby & Kids Items' },
      { value: 'Health & Beauty', label: 'Health & Beauty' },
      { value: 'Pet Supplies', label: 'Pet Supplies' },
      { value: 'Musical Instruments', label: 'Musical Instruments' },
      { value: 'Office Supplies', label: 'Office Supplies' },
      { value: 'Sporting Goods', label: 'Sporting Goods' },
      { value: 'Toys & Games', label: 'Toys & Games' }
    ];

    const want = (val) => {
      console.log(val)
      console.log("aosudad")
    }

    return (
      <>
      <Navbar />
        <div className="homepage">

          {/* Modals */}
          <MDBModal isOpen={showModal} toggle={handleClose}>
            <MDBModalHeader toggle={handleClose}>Select Item</MDBModalHeader>
            <MDBModalBody className="px-4 text-center">
              <img src={SwipeImage} className="item-img-modal mx-auto mb-3" />
              <label className="mt-3">Item Categories to Swap</label>
                <Select
                options={categoriesoptions}
                isMulti
              />
            </MDBModalBody>

            <MDBBtn className="confirm-btn color1 mx-auto my-4 py-2 px-5" >Confirm</MDBBtn>

          </MDBModal>

          {/* //Modals */}
        
          <MDBContainer className="homepage-container">
            <MDBRow>
            <MDBCol lg="7" className="px-4">
              <div className="d-flex bd-highlight example-parent">
                <div className="p-1 flex-fill bd-highlight col-example mb-5">
                  <img src={SwipeImage} className="item-img" />
                </div>
                <div className="px-1 flex-fill bd-highlight col-example my-2 select-item-name">
                  Search by categories
                </div>
                <div className="flex-fill bd-highlight col-example text-center my-3 select-item">
                  <a className="text-center" onClick={handleShow} style={{color: "#167D7F", fontSize: '12px'}}>
                    <MDBIcon icon="sync" className="select-item-icon" style={{fontSize: '28px'}} />
                    <div>Select Item</div>
                  </a>
                </div>
              </div>
              <div className="ss-btns-dsk mt-4">
                <div className="flex-center">
                    <MDBBtn className="ss-btn-want p-2 mr-4" onClick={val => want(items[0]._id)} color="success"><MDBIcon icon="heart" style={{fontSize: '45px'}} /><br/> Want</MDBBtn>
        
                    <MDBBtn className="ss-btn-swant mx-4 p-2" color="primary"><MDBIcon icon="star" style={{fontSize: '45px'}} /><br/> Super Want</MDBBtn>

                    <MDBBtn className="ss-btn-boring p-2 ml-4" color="danger"><MDBIcon icon="times" style={{fontSize: '50px'}} /><br/> Boring</MDBBtn>
                </div>
                <div className="flex-center mt-3">
                    <MDBBtn className="ss-btn-rewind p-2 mr-4" color="warning"><MDBIcon icon="backward" style={{fontSize: '45px'}} /><br/> Rewind</MDBBtn>
         
                    <MDBBtn className="ss-btn-boost p-2 ml-4" color="secondary" ><MDBIcon icon="rocket" style={{fontSize: '45px'}} /><br/> Boost</MDBBtn>
                </div>
               
              </div>

              {/* <Select options={this.options} setValue={this.setValue}/> <br />
              You select "{this.state.value}" */}
            </MDBCol>
              <MDBCol lg="5">
                <div className="swiper mx-auto flex-center">
                  <Swiper />
                </div>
                <div className="ss-btns-m my-3 text-center">
                <MDBBtn className="ss-btn-rewind-m mx-2" color="warning"><MDBIcon icon="backward" size="lg" /></MDBBtn>
                <MDBBtn className="ss-btn-boring-m mx-2" color="danger"><MDBIcon icon="times" size="lg" /></MDBBtn>
                <MDBBtn className="ss-btn-swant-m mx-2" color="primary"><MDBIcon icon="star" size="lg" /></MDBBtn>
                <MDBBtn onClick={val => want(items[0]._id)} className="ss-btn-want-m mx-2" color="success"><MDBIcon icon="heart" size="lg" /></MDBBtn>
                  <MDBBtn className="ss-btn-boost-m mx-2" color="secondary"><MDBIcon icon="rocket" size="lg" /></MDBBtn>
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

export default connect(mapStateToProps, { getAllItem })(HomePage);
