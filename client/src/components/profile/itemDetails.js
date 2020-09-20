import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImageUploader from 'react-images-upload';
import Select from 'react-select';
import { MDBIcon, MDBRow, MDBCol, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBCard, MDBModal, MDBModalHeader, MDBModalBody, MDBMask, MDBBtn, MDBCarouselCaption } from 'mdbreact';
import { Link }  from 'react-router-dom';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import ItemCondition from '../itemCondition';
import Navbar from '../navbar';
import { getItemById } from '../../actions/item';

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

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const [showModal, setShowModal] = useState(false);  
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  
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

      <MDBModal isOpen={showModal} toggle={handleShow}>
        <MDBModalHeader toggle={handleClose}>Edit Info</MDBModalHeader>
        <MDBModalBody className="px-4">
          <form>
          <ImageUploader
            className="item-imgs"
            withIcon={false}
            buttonText='Choose images (Max. 4)'
            imgExtension={['.jpg', '.gif', '.png', '.gif', 'webp', 'jpeg']}
            maxFileSize={5242880}
            withPreview={true}
            />
            <input type="text" name="itemname" value={itemname} className="form-control mt-3" placeholder="itemname" />
            <textarea type="text" name="description" value={description} className="form-control mt-3" placeholder="Description" />
            <Select
              className="mt-3"
              defaultValue={[categories[0], categories[1]]}
              options={categories}
              isMulti  
            />
            <Select
              className="mt-3"
              defaultValue={[conditions[0]]}
              options={conditions}
            />
            </form>
        </MDBModalBody>
        <MDBBtn className="confirm-btn color1 mx-auto my-4 py-2 px-5" >Confirm</MDBBtn>
        
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
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg"
                    alt="First slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg"
                    alt="Second slide"
                  />
                </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg"
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
                      <div className=""><ItemCondition /></div>
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
