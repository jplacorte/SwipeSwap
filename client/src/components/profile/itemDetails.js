import React, { useEffect, useState } from 'react';
import Select, { components } from "react-select";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MDBIcon, MDBRow, MDBCol, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBCard, MDBModal, MDBModalHeader, MDBModalBody, MDBBtn, MDBCarouselCaption } from 'mdbreact';
import { Link }  from 'react-router-dom';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Navbar from '../navbar';
import { getItemById, updateItem, uploadImage } from '../../actions/item';
import ItemImg from '../../assets/images/swipeswap_item.jpg';

const ItemDetails = ({ getItemById, updateItem, uploadImage, item:{ item, loading }, match }) => {

  const [formData, setFormData] = useState({
        itemname:'',
        description:'',
        status:'',
        categories:'',
        catvalue: '',
        photo:'',
  })

  useEffect(() => {
    getItemById(match.params.id)

    setFormData({
      itemname: loading || !item.itemname ? '' : item.itemname,
      description: loading || !item.description ? '' : item.description,
      status: loading || !item.status ? '' : item.status,
      categories: loading || !item.categories ? '' : Array.isArray(item.categories) ? item.categories.join(', ') : item.categories,
      catvalue: loading || !item.categories ? '' : item.categories,
      photo1: loading || !item.photo[0] ? ItemImg : item.photo[0].url,
      photo2: loading || !item.photo[1] ? ItemImg : item.photo[1].url,
      photo3: loading || !item.photo[2] ? ItemImg : item.photo[2].url,
      photo4: loading || !item.photo[3] ? ItemImg : item.photo[3].url,
    })
  }, [getItemById, match.params.id, loading])

  const {
        itemname,
        description,
        status,
        categories,
        catvalue,
        photo1,
        photo2,
        photo3,
        photo4
  } = formData


  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const [showModal, setShowModal] = useState(false);  
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [picture, setPicture] = useState(null);
  const [file, setfile] = useState(undefined);

  const [picture2, setPicture2] = useState(null);
  const [file2, setfile2] = useState(undefined);

  const [picture3, setPicture3] = useState(null);
  const [file3, setfile3] = useState(undefined);

  const [picture4, setPicture4] = useState(null);
  const [file4, setfile4] = useState(undefined);

  const [selectedValue, setSelectedValue] = useState('');

  const onChangeStatus = e => {
    setFormData({ ...formData, status: e.value })
  }

  const onChangeCategory = val => {
    setFormData({ ...formData, catvalue: selectedValue.toString() })
    setSelectedValue(Array.isArray(val) ? val.map(x => x.value) : '')
  }

  const ImgUpload = () =>{
    return(
      <label htmlFor="photo-upload" className="item-prev-upload flex-center">
        <div className="item-prev-upload-wrap item-prev-upload-img" >
          <img htmlFor="photo-upload" src={picture ? picture : photo1} />
        </div>
        <input id="photo-upload" type="file" onChange={onChangePicture}/> 
      </label>
    );
  }
  const ImgUpload2 = () =>{
    return(
      <label htmlFor="photo-upload2" className="item-prev-upload flex-center">
        <div className="item-prev-upload-wrap item-prev-upload-img" >
          <img htmlFor="photo-upload2" src={picture2 ? picture2 : photo2} />
        </div>
        <input id="photo-upload2" type="file" onChange={onChangePicture2}/> 
      </label>
    );
  }
  const ImgUpload3 = () =>{
    return(
      <label htmlFor="photo-upload3" className="item-prev-upload flex-center">
        <div className="item-prev-upload-wrap item-prev-upload-img" >
          <img htmlFor="photo-upload3" src={picture3 ? picture3 : photo3} />
        </div>
        <input id="photo-upload3" type="file" onChange={onChangePicture3}/> 
      </label>
    );
  }
  const ImgUpload4 = () =>{
    return(
      <label htmlFor="photo-upload4" className="item-prev-upload flex-center">
        <div className="item-prev-upload-wrap item-prev-upload-img" >
          <img htmlFor="photo-upload4" src={picture4 ? picture4 : photo4} />
        </div>
        <input id="photo-upload4" type="file" onChange={onChangePicture4}/> 
      </label>
    );
  }

  const onChangePicture = e => {
    setPicture(URL.createObjectURL(e.target.files[0]));
    setfile(e.target.files[0])
    uploadImage(e.target.files[0], match.params.id)
  };
  const onChangePicture2 = e => {
    setPicture2(URL.createObjectURL(e.target.files[0]));
    setfile2(e.target.files[0])
    uploadImage(e.target.files[0], match.params.id)
  };
  const onChangePicture3 = e => {
    setPicture3(URL.createObjectURL(e.target.files[0]));
    setfile3(e.target.files[0])
    uploadImage(e.target.files[0], match.params.id)
  };
  const onChangePicture4 = e => {
    setPicture4(URL.createObjectURL(e.target.files[0]));
    setfile4(e.target.files[0])
    uploadImage(e.target.files[0], match.params.id)
  };

  const onSubmit = async e => {
      e.preventDefault();
      updateItem(formData, match.params.id);
      getItemById(match.params.id)
      window.location.reload()
  }
  
  const cat = [
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
  
  const conditions = [
    { value: 'Very Bad', label: 'Very Bad' },
    { value: 'Poor', label: 'Poor' },
    { value: 'Ok', label: 'Ok' },
    { value: 'Good', label: 'Good' },
    { value: 'Excellent', label: 'Excellent' }
  ];

  const Menu = props => {
    const optionSelectedLength = props.getValue().length || 0;
    return (
      <components.Menu {...props}>
        {optionSelectedLength < 5 ? (
          props.children
        ) : (
          <div className="p-2 red-text" style={{fontSize: "14px"}}>Max limit reached!</div>
        )}
      </components.Menu>
    );
  };

    return (
      <>
      {/* Modals */}

      <MDBModal isOpen={showModal} toggle={handleClose}>
      <MDBModalHeader toggle={handleClose}>Edit Item</MDBModalHeader>
        <MDBModalBody className="px-4 text-center">
          <form onSubmit={e => onSubmit(e)}>
          <MDBRow className="mx-auto">
            <MDBCol className="item-prev-col flex-center" size="6">
              <ImgUpload/>
            </MDBCol>
            <MDBCol className="item-prev-col flex-center" size="6">
              <ImgUpload2/>
            </MDBCol>
            <MDBCol className="item-prev-col flex-center" size="6">
              <ImgUpload3/>
            </MDBCol>
            <MDBCol className="item-prev-col flex-center" size="6">
              <ImgUpload4/>
            </MDBCol>
            </MDBRow>
            <input type="text" name="itemname" value={itemname} onChange={e => onChange(e)} className="form-control mt-3" placeholder="itemname" />
            <textarea type="text" name="description" value={description} onChange={e => onChange(e)} className="form-control mt-3" placeholder="Description" />
            <Select
              className="w-100 mt-3"
              onChange={onChangeCategory}
              options={cat}
              value={cat.filter(obj => catvalue.includes(obj.value))}
              placeholder="Categories"
              isMulti
              isSearchable
              components={{ Menu }}
            />
            <Select
              className="w-100 mt-3"
              onChange={onChangeStatus}
              options={conditions}
              placeholder="Condition"
              value={conditions.find(obj => obj.value === status)}
              singleSelect={true}
            />
   
            <div className="flex-center">
              <MDBBtn type="submit" className="confirm-btn color1 my-4 py-2 px-5">Confirm</MDBBtn>
            </div>
          </form>
        </MDBModalBody>
      </MDBModal>

      {/* //Modals */}

      <Navbar />
        <div className="profile-item-details flex-center">
        <MDBCard className="p-3 profile-item-details-card">
        <MDBRow className="profile-item-details-content mx-auto">
            <MDBCol md="6" className="px-0">
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
                <MDBIcon icon="angle-left" className="pt-2 angle-left-icon" />
              </Link>
              </MDBCarouselCaption>  

              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src={photo1}
                    alt="First slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src={photo2}
                    alt="Second slide"
                  />
                </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={photo3}
                      alt="Third slide"
                    />
                  </MDBView>
                </MDBCarouselItem>
            </MDBCarouselInner>         
            </MDBCarousel>
            </MDBCol>
            <MDBCol md="6" className="mt-3">
              <div className="d-flex bd-highlight example-parent">
                <div className="w-100 bd-highlight col-example item-name">{itemname}</div>
                <a className="bd-highlight col-example ml-auto mt-1 font-weight-bold" style={{color: "#167D7F"}} onClick={handleShow}>Edit</a>
              </div>
              <div className="item-description mt-2">{description}</div>
              <div className="item-category mt-3">{categories}</div>
                <div className="d-flex bd-highlight example-parent py-3">
                    <div className="flex-fill bd-highlight col-example">
                      <div className=""></div>
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
  getItemById: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  item: state.item
})
export default connect( mapStateToProps, { getItemById, updateItem, uploadImage })(ItemDetails);
