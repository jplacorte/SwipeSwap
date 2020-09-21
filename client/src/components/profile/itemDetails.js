import React, { useState } from 'react';
import ImageUploading from "react-images-uploading";
import MultiSelect from  'react-multiple-select-dropdown-lite';
import  'react-multiple-select-dropdown-lite/dist/index.css';
import { MDBIcon, MDBRow, MDBCol, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBCard, MDBModal, MDBModalHeader, MDBModalBody, MDBMask, MDBBtn, MDBCarouselCaption, MDBModalFooter } from 'mdbreact';
import { Link }  from 'react-router-dom';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import ItemCondition from '../itemCondition';
import Navbar from '../navbar';

function ItemDetails() {
  const [images, setImages] = useState([]);
  const maxNumber = 4;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const [showModal, setShowModal] = useState(false);  
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [value, setvalue] = useState('')

  const  handleOnchange  =  val  => {
      setvalue(val)
  }

  const  categories  = [
      { value: '1', label: 'Category 1' },
      { value: '2', label: 'Category 2' },
      { value: '3', label: 'Category 3' },
      { value: '4', label: 'Category 4' },
      { value: '5', label: 'Category 5' }
    ];

    const condition = [
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
        <MDBModalHeader >Edit Profile</MDBModalHeader>
        <MDBModalBody className="px-4 text-center">
        <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps
          }) => (
          // write your building UI
          <MDBRow className="upload-image-wrapper flex-center">
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
             
              <MDBCol size="6" key={index} className="image-item my-3">
                <img className="item-imgs" src={image.data_url} alt="" width="130" height="130" />
                <div className="image-item-btn-wrapper mt-2">
                  <button onClick={() => onImageUpdate(index)} className="mx-1">Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </MDBCol>
          
            ))}
            </MDBRow>
            )}
          </ImageUploading>
          <form>
            <input type="text" id="" className="form-control mt-3" placeholder="Sample Name" />
            <textarea type="text" id="" className="form-control mt-3" placeholder="Description" />
            <MultiSelect
              className="w-100 mt-3"
              onChange={handleOnchange}
              options={categories}
              placeholder="Categories"
            />
            <MultiSelect
              className="w-100 mt-3"
              onChange={handleOnchange}
              options={condition}
              placeholder="Condition"
              singleSelect={true}
            />
            </form>
        </MDBModalBody>
              
        <div className="mx-auto mt-2 mb-3">
        <MDBBtn className="want-ignore-btn px-5 py-2" color="white" onClick={handleClose}>Ignore</MDBBtn>
        <MDBBtn className="confirm-btn m-auto color1 mb-4 py-2 px-5" >Confirm</MDBBtn>
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
                <div className="w-100 bd-highlight col-example item-name">Sample Name</div>
                <a className="bd-highlight col-example ml-auto mt-1 font-weight-bold" style={{color: "#167D7F"}} onClick={handleShow}>Edit</a>
              </div>
              <div className="item-distance">8km<span> • Delivery</span></div>
              <div className="item-description mt-2">Sample Description Sample Description Sample Description</div>
              <div className="item-category mt-3">Category1 • Category2 • Category3</div>
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



export default ItemDetails;
