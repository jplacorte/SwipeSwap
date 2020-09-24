import React, { Fragment, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Add from '../../assets/images/additem.png';
import ItemImg from '../../assets/images/swipeswap_item.jpg';
import Select from 'react-select';
import { MDBIcon, MDBRow, MDBCol, MDBModal, MDBModalHeader, MDBModalBody, MDBBtn, MDBAnimation } from 'mdbreact';
import { Link }  from 'react-router-dom';
import { Container, Button } from 'react-floating-action-button';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import { getAllItemsByUser, getSwappedItems, addItem } from '../../actions/item';
import Items from './ItemGalleryItems';
import MultiSelect from  'react-multiple-select-dropdown-lite';


const ItemGallery = ({ getAllItemsByUser, getSwappedItems, item:{ items, swappedItems }, addItem }) => {

  useEffect(() => {

    getAllItemsByUser()
    getSwappedItems()

  }, [getAllItemsByUser, getSwappedItems])
  
    const [showModal, setShowModal] = useState(false);  
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const [formData, setFormData] = useState({
      photo: '',
      category:'',
      status:'',
      description:'',
      itemname:''
    })

    const {
      photo,
      category,
      status,
      description,
      itemname
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
      e.preventDefault();
        addItem(formData)
        window.location.reload()
    }

    const catChange = category => {
      setFormData({ category })
      console.log(`Value:${category}`)
    }

    const statChange = status => {
      setFormData({ status })
      console.log(`Value:${status}`)
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

    const [uploadPhoto, setPhoto] = useState({
      file: '',
      imagePreviewUrl: ''
    })

    const onChangePicture = e => {
        setPicture(URL.createObjectURL(e.target.files[0]) );
    };

    const [picture, setPicture] = useState(null);
    
    
    const  handleOnchange = val => {
      setvalue(val)
  }

    const [value, setvalue] = useState('')

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
      <Fragment>
      {/* Modals */}

      <MDBModal isOpen={showModal} toggle={handleClose}>
        <MDBModalHeader toggle={handleClose}>Add Item</MDBModalHeader>
        <MDBModalBody className="px-4">
          <form onSubmit={e => onSubmit(e)}>
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
            <input type="text" name="itemname" value={itemname} onChange={e => onChange(e)} className="form-control mt-3" placeholder="Item Name" required />
            <textarea type="text" name="description" value={description} onChange={e => onChange(e)} className="form-control mt-3" placeholder="Description" />
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
            <div className="flex-center">
              <MDBBtn type="submit" className="confirm-btn color1 my-4 py-2 px-5">Confirm</MDBBtn>
            </div>
            </form>
        </MDBModalBody>
        
      </MDBModal>

      {/* //Modals */}

      <MDBRow className="mx-auto item-gallery-container" style={{ height: '650px' }}>
        {
          items.length > 0 ? (
            items.map((item) => (
              <Items key={item._id} item={item}/>
            ))
          ) : (<h4>No items found...</h4>)
        }
          <MDBCol size="12" className="my-3 text-center">
              <div>Swapped Items</div>
          </MDBCol>
          

          {/* Swapped Items */}
          
          {
            swappedItems.length > 0 ? (
              swappedItems.map((item) => (
              <MDBCol size="4" className="p-0 swapped-item item-grid">
              <img src={ItemImg} alt="img.jpg"/>
              </MDBCol>
            ))): (<h4>No items found...</h4>)
          }

          
          
          <Container className="add-item-container">
          <MDBAnimation type="zoomIn" className="fast">
          <MDBAnimation type="heartBeat" className="slower" delay="1s" infinite>
            <Button
                className="add-item-btn"
                tooltip="Add Item"
                icon="fas fa-plus"
                onClick={handleShow}
               />
               </MDBAnimation>
               </MDBAnimation>
          </Container>
          

        </MDBRow>
      </Fragment> 
    );
}

ItemGallery.propTypes = {
  getAllItemsByUser: PropTypes.func.isRequired,
  getSwappedItems: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}
  
const mapStateToProps = state => ({
  item: state.item
});
export default connect(mapStateToProps, { getAllItemsByUser, getSwappedItems, addItem })(withRouter(ItemGallery));
