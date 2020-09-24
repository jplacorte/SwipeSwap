import React, { useEffect, useState } from 'react';
import ImageUploading from "react-images-uploading";
import MultiSelect from  'react-multiple-select-dropdown-lite';
import 'react-multiple-select-dropdown-lite/dist/index.css';
import { connect } from 'react-redux';
import Add from '../../assets/images/additem.png';
import PropTypes from 'prop-types';
import { MDBIcon, MDBRow, MDBCol, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBCard, MDBModal, MDBModalHeader, MDBModalBody, MDBMask, MDBBtn, MDBCarouselCaption } from 'mdbreact';
import { Link }  from 'react-router-dom';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import ItemCondition from '../itemCondition';
import Navbar from '../navbar';
import { getItemById } from '../../actions/item';
import ItemImg from '../../assets/images/swipeswap_item.jpg';

const ItemDetails = ({ getItemById, item:{ item, loading }, match }) => {

  const [formData, setFormData] = useState({
        itemname:'',
        description:'',
        status:'',
        category:'',
        photo:'',
  })

  useEffect(() => {
    getItemById(match.params.id)

    setFormData({
      itemname: loading || !item.itemname ? '' : item.itemname,
      description: loading || !item.description ? '' : item.description,
      status: loading || !item.status ? '' : item.status,
      category: loading || !item.category ? '' : item.category,
      photo: loading || !item.photo ? '' : item.photo,
    })
  }, [getItemById, match.params.id, loading])

  const {
        itemname,
        description,
        status,
        category,
        photo
  } = formData

  const [images, setImages] = useState([]);
  const maxNumber = 4;
  const uploadImage = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const [showModal, setShowModal] = useState(false);  
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [value, setvalue] = useState('')

  const  handleOnchange = val => {
      setvalue(val)
  }

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

  const onChangePicture = e => {
    setPicture(URL.createObjectURL(e.target.files[0]) );
  };

  const [picture, setPicture] = useState(null);
  
  const categories = [
    { value: '1', label: 'Category 1' },
    { value: '2', label: 'Category 2' },
    { value: '3', label: 'Category 3' },
    { value: '4', label: 'Category 4' },
    { value: '5', label: 'Category 5' }
  ];
  
  const conditions = [
    { value: '1', label: 'Very Bad' },
    { value: '2', label: 'Poor' },
    { value: '3', label: 'Ok' },
    { value: '4', label: 'Good' },
    { value: '5', label: 'Excellent' }
  ];

    return (
      <>
      {/* Modals */}

      <MDBModal isOpen={showModal} toggle={handleClose}>
      <MDBModalHeader toggle={handleClose}>Edit Item</MDBModalHeader>
        <MDBModalBody className="px-4 text-center">
          <form>
          <MDBRow className="mx-auto">
            <MDBCol className="item-prev-col flex-center" size="6">
              <ImgUpload/>
            </MDBCol>
            <MDBCol className="item-prev-col flex-center" size="6">
              <ImgUpload/>
            </MDBCol>
            <MDBCol className="item-prev-col flex-center" size="6">
              <ImgUpload/>
            </MDBCol>
            <MDBCol className="item-prev-col flex-center" size="6">
              <ImgUpload/>
            </MDBCol>
            </MDBRow>
            <input type="text" name="itemname" value={itemname} className="form-control mt-3" placeholder="itemname" />
            <textarea type="text" name="description" value={description} className="form-control mt-3" placeholder="Description" />
            <MultiSelect
              className="w-100 mt-3"
              onChange={handleOnchange}
              options={categories}
              placeholder="Categories"
            />
            <MultiSelect
              className="w-100 mt-3"
              onChange={handleOnchange}
              options={conditions}
              placeholder="Condition"
              singleSelect={true}
            />
            </form>
        </MDBModalBody>
              
        <div className="mx-auto mt-2 mb-3">
        <MDBBtn className="confirm-btn m-auto color1 mb-4 mt-3 py-2 px-5" >Confirm</MDBBtn>
        </div>

      </MDBModal>

      {/* //Modals */}

      <Navbar />
        <div className="profile-item-details flex-center">
        <MDBCard className="p-3 profile-item-details-card">
        <MDBRow className="profile-item-details-content mx-auto">
            <MDBCol lg="6" className="px-0">
            <MDBCarousel
              activeItem={1}
              length={3}
              showControls={false}
              showIndicators={true}
              interval={false}
              className="item-img-car mx-auto"
            >
            <MDBCarouselInner className="mx-auto text-center" style={{zIndex: '0'}}>

              <MDBCarouselCaption className="text-left back-icon">
              <Link to="/profile">
                <MDBIcon icon="angle-left" className="pt-2" style={{fontSize: '32px', color: '#167D7F'}} />
              </Link>
              </MDBCarouselCaption>  

              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src={ItemImg}
                    alt="First slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src={ItemImg}
                    alt="Second slide"
                  />
                </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={ItemImg}
                      alt="Third slide"
                    />
                  </MDBView>
                </MDBCarouselItem>
            </MDBCarouselInner>         
            </MDBCarousel>
            </MDBCol>
            <MDBCol lg="6" className="mt-3">
              <div className="d-flex bd-highlight example-parent">
                <div className="w-100 bd-highlight col-example item-name">{itemname}</div>
                <a className="bd-highlight col-example ml-auto mt-1 font-weight-bold" style={{color: "#167D7F"}} onClick={handleShow}>Edit</a>
              </div>
              <div className="item-description mt-2">{description}</div>
              <div className="item-category mt-3">{category}</div>
                <div className="d-flex bd-highlight example-parent py-3">
                    <div className="flex-fill bd-highlight col-example">
                      <div className=""></div>
                    </div>
                    <div className="bd-highlight col-example ml-auto" style={{color: "#167D7F"}} >
                        <MDBIcon icon="eye" /><span className="font-weight-bold"> 10</span>
                    </div>
                </div>
            </MDBCol>
           </MDBRow>
           </MDBCard>
        </div>
      </> 
    );
}

ItemDetails.propTypes = {
  getItemById: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  item: state.item
})
export default connect( mapStateToProps, { getItemById })(ItemDetails);
