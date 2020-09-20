import React, { Fragment, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ImageUploader from 'react-images-upload';
import Select from 'react-select';
import { MDBIcon, MDBRow, MDBCol, MDBModal, MDBModalHeader, MDBModalBody, MDBBtn, MDBAnimation } from 'mdbreact';
import { Link }  from 'react-router-dom';
import { Container, Button } from 'react-floating-action-button';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import { getAllItemsByUser } from '../../actions/item';


const ItemGallery = ({ getAllItemsByUser, item: { items, loading } }) => {

  useEffect(() => {

    getAllItemsByUser()

  }, [getAllItemsByUser])

  const categories = [
    { value: 'Vehicles', label: 'Vehicles' },
    { value: 'Apparel', label: 'Apparel ' },
    { value: 'Electronics', label: 'Electronics' },
    { value: 'Entertainment', label: 'Entertainment' },
    { value: 'Pet Supplies', label: 'Pet Supplies' },
    { value: 'Sporting Goods', label: 'Sporting Goods' },
    { value: 'Toys & Games', label: 'Toys & Games' },
    { value: 'Office Supplies', label: 'Office Supplies' },
    { value: 'Musical Instruments', label: 'Musical Instruments' },
    { value: 'Home Goods', label: 'Home Goods' },
    { value: 'Garden & Outdoor', label: 'Garden & Outdoor' } 
  ];
  
  const conditions = [
    { value: '1', label: 'Very Bad' },
    { value: '2', label: 'Poor' },
    { value: '3', label: 'Ok' },
    { value: '4', label: 'Good' },
    { value: '5', label: 'Excellent' }
  ];
  
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

    const catChange = category => {
      setFormData({ category })
      console.log(`Value:${category}`)
    }

    const statChange = status => {
      setFormData({ status })
      console.log(`Value:${status}`)
    }

    return (
      <Fragment>
      {/* Modals */}

      <MDBModal isOpen={showModal} toggle={handleShow}>
        <MDBModalHeader toggle={handleClose}>Add Item</MDBModalHeader>
        <MDBModalBody className="px-4">
          <form>
          <ImageUploader
            className="item-imgs"
            withIcon={false}
            name="photo"
            value={photo}
            buttonText='Choose images (Max. 4)'
            onChange={ e => onChange(e) }
            imgExtension={['.jpg', '.gif', '.png', '.gif', 'webp', 'jpeg']}
            maxFileSize={5242880}
            withPreview={true}
            />
            <input type="text" name="itemname" value={itemname} onChange={e => onChange(e)} className="form-control mt-3" placeholder="Item Name" />
            <textarea type="text" name="description" value={description} onChange={e => onChange(e)} className="form-control mt-3" placeholder="Description" />
            <Select
              name="category"
              className="mt-3"
              placeholder="Select Category"
              value={category}
              onChange={catChange}
              options={categories}
              isMulti  
            />
            <Select
              name="status"
              className="mt-3"
              value={status}
              placeholder="Select Condition"
              onChange={statChange}
              options={conditions}
            />
            </form>
        </MDBModalBody>
        <MDBBtn className="confirm-btn color1 mx-auto my-4 py-2 px-5">Confirm</MDBBtn>
        
      </MDBModal>

      {/* //Modals */}

      <MDBRow className="mx-auto item-gallery-container" style={{ height: '650px' }}>
        {
          items.length > 0 ? (
            items.map(item => (
            <MDBCol size="4" className="p-0 item-gallery-image item-grid">
              <Link to="/itemDetails">
              <img src="https://mdbootstrap.com/img/Others/documentation/img%20(151)-mini.jpg" alt="img.png"/>
              </Link>
            </MDBCol>
            ))
          ) : (<h4>No items found...</h4>)
        }
          <MDBCol size="12" className="my-3 text-center">
              <div>Swapped Items</div>
          </MDBCol>
          

          {/* Swapped Items */}
          <MDBCol size="4" className="p-0 swapped-item item-grid">
              <img src="https://mdbootstrap.com/img/Others/documentation/img%20(151)-mini.jpg" alt="img.png"/>
          </MDBCol>

          <MDBCol size="4" className="p-0 swapped-item item-grid">
              <img src="https://mdbootstrap.com/img/Others/documentation/img%20(151)-mini.jpg" alt="img.png"/>
          </MDBCol>
          <MDBCol size="4" className="p-0 swapped-item item-grid">
              <img src="https://mdbootstrap.com/img/Others/documentation/img%20(151)-mini.jpg" alt="img.png"/>
          </MDBCol>

          
          
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
  item: PropTypes.object.isRequired
}
  
const mapStateToProps = state => ({
  item: state.item
});
export default connect(mapStateToProps, { getAllItemsByUser })(withRouter(ItemGallery));
