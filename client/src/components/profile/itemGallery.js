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
      description:'',
      itemname:'',
      status:'',
      categories: ''
    })

    const {
      description,
      itemname,
      status,
      categories
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
      e.preventDefault();
        addItem(formData)
        window.location.reload()
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
    const ImgUpload2 = () =>{
      return(
        <label htmlFor="photo-upload2" className="item-prev-upload flex-center">
          <div className="item-prev-upload-wrap item-prev-upload-img" >
            <img htmlFor="photo-upload2" src={picture2 ? picture2 : Add} />
          </div>
          <input id="photo-upload2" type="file" onChange={onChangePicture2}/> 
        </label>
      );
    }
    const ImgUpload3 = () =>{
      return(
        <label htmlFor="photo-upload3" className="item-prev-upload flex-center">
          <div className="item-prev-upload-wrap item-prev-upload-img" >
            <img htmlFor="photo-upload3" src={picture3 ? picture3 : Add} />
          </div>
          <input id="photo-upload3" type="file" onChange={onChangePicture3}/> 
        </label>
      );
    }
    const ImgUpload4 = () =>{
      return(
        <label htmlFor="photo-upload4" className="item-prev-upload flex-center">
          <div className="item-prev-upload-wrap item-prev-upload-img" >
            <img htmlFor="photo-upload4" src={picture4 ? picture4 : Add} />
          </div>
          <input id="photo-upload4" type="file" onChange={onChangePicture4}/> 
        </label>
      );
    }

    const onChangePicture = e => {
      setPicture(URL.createObjectURL(e.target.files[0]));
      setfile(e.target.files[0])
    };
    const onChangePicture2 = e => {
      setPicture2(URL.createObjectURL(e.target.files[0]));
      setfile2(e.target.files[0])
    };
    const onChangePicture3 = e => {
      setPicture3(URL.createObjectURL(e.target.files[0]));
      setfile3(e.target.files[0])
    };
    const onChangePicture4 = e => {
      setPicture4(URL.createObjectURL(e.target.files[0]));
      setfile4(e.target.files[0])
    };

    const [picture, setPicture] = useState(null);
    const [file, setfile] = useState(undefined);

    const [picture2, setPicture2] = useState(null);
    const [file2, setfile2] = useState(undefined);
  
    const [picture3, setPicture3] = useState(null);
    const [file3, setfile3] = useState(undefined);
  
    const [picture4, setPicture4] = useState(null);
    const [file4, setfile4] = useState(undefined);
    
    const onChangeStatus = val => {
      setFormData({ ...formData, status: val })
    }

    const onChangeCategory = val => {
      setFormData({ ...formData, categories: val })
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
              <ImgUpload2/>
            </MDBCol>
            <MDBCol className="item-prev-col flex-center" size="6">
              <ImgUpload3/>
            </MDBCol>
            <MDBCol className="item-prev-col flex-center" size="6">
              <ImgUpload4/>
            </MDBCol>
            </MDBRow>
            <input type="text" name="itemname" value={itemname} onChange={e => onChange(e)} className="form-control mt-3" placeholder="Item Name" required />
            <textarea type="text" name="description" value={description} onChange={e => onChange(e)} className="form-control mt-3" placeholder="Description" />
            <MultiSelect
              className="w-100 mt-3"
              onChange={onChangeCategory}
              options={cat}
              placeholder="Categories"
            />
            <MultiSelect
              className="w-100 mt-3"
              onChange={onChangeStatus}
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
            items.map(item => (
              <MDBCol size="4" className="item-gallery-image item-grid" style={{padding: '2px'}}>
                <a href={`/itemDetails/${item._id}`}>
                  <img src={item.photo[0] ? `${item.photo[0].url}` : ItemImg} alt="img.png"/>
                </a>
             </MDBCol>
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
              <img src={item.photo[0].url} alt="img.jpg"/>
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
