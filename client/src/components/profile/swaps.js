import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { MDBCol, MDBRow, MDBModalFooter, MDBBtn, MDBModal, MDBRating } from 'mdbreact';
import Avatar from '../../assets/images/avatar.png';
import ImgSlider from '../imgSlider';
import ItemCondition from '../itemCondition';
import PropTypes from 'prop-types'; 
import { getAllItemsByUser, getReceivedItems, rateItem } from '../../actions/item';

const Swaps = ({ getAllItemsByUser, getReceivedItems, item: { items, loading, receivedItems }, rateItem }) => {
  useEffect(() => {
    getAllItemsByUser()
    getReceivedItems()

    setFormData({
      reviewdetails: reviewdetails ? reviewdetails : '',
      rating: rating ? rating : ''
    })
  }, [getAllItemsByUser, getReceivedItems])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (item_id, itemname, itemimage, name, avatar) => {

    setItems({
      item_id: item_id,
      itemname: itemname,
      itemimage: itemimage,
      name: name,
      avatar: avatar
    }) 
    
    setShow(true)
  };

  const [received_items, setItems] = useState({
    item_id: '',
    itemname: '',
    itemImage: '',
    name: '',
    avatar: ''
  })

  const [formData, setFormData] = useState({
    reviewdetails:'',
    rating:'',
  })

  const {
    reviewdetails,
    rating
  } = formData

  const {
    item_id,
    itemname,
    itemImage,
    name,
    avatar
  } = received_items

  const [basic] = useState([
      {
        tooltip: 'Poor'
      },
      {
        tooltip: 'Unsatisfactory'
      },
      {
        tooltip: 'Satisfactory',
        choosed: true
      },
      {
        tooltip: 'Very Satisfactory'
      },
      {
        tooltip: 'Outstanding'
      }
    ]);
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    rateItem(formData, item_id)
  }
  return (
        <div>
          {/* Modals */}
          {/* Rate Modal */}
          <MDBModal isOpen={show} onHide={handleClose}>
          <div className="item-details-modal">
          <MDBRow>
            <MDBCol md="12">
            <ImgSlider />
            </MDBCol>
          </MDBRow>
          <MDBRow className="p-3">
            <MDBCol md="12">
              <div className="d-flex bd-highlight example-parent">
                <div className="w-100 bd-highlight col-example item-name">{itemname}</div>
                <div className="bd-highlight col-example ml-auto">
                  <ItemCondition />
                </div>
              </div>
              <div className="item-description mt-2">Sample Description Sample Description Sample Description</div>
              <div className="item-category mt-3">Category1 • Category2 • Category3</div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="12" className="">
              <div className="item-user-profile p-3">
              <div className="d-flex bd-highlight example-parent">
                 <div className="flex-fill bd-highlight col-example">
                    <img src={avatar ? avatar : Avatar} /><span className="ml-2 item-user-profile-name">{name}</span>
                 </div>
                 <div className="bd-highlight col-example ml-auto">
                   <MDBBtn className="view-profile-btn">View Profile</MDBBtn>
                 </div>
                </div>
               
                  <form onSubmit={e => onSubmit(e)} className="my-3 text-center mx-auto">
                  <div style={{fontSize: '16px', fontWeight: 'bold'}}>Rate</div>
                  <div className="flex-center my-2">
                    <MDBRating
                      data={basic} 
                      iconFaces 
                      fillColors={[
                        'red-text',
                        'orange-text',
                        'yellow-text',
                        'lime-text',
                        'light-green-text',   
                      ]}  
                      iconRegular
                      iconSize="lg" 
                    />
                  </div>
                  <div className="m-3">
                    <textarea
                    className="form-control" 
                    rows="3" 
                    placeholder="Write something here..." 
                    name="reviewdetails"
                    value={reviewdetails} 
                    onChange={e => onChange(e)}
                    />
                  </div>
                  <div className="mx-auto mt-4">
                    <MDBBtn className="modal-btn-sm p-2 px-4" color="white" onClick={handleClose}>Cancel</MDBBtn>
                    <MDBBtn type="submit" className="modal-btn-sm p-2 px-4 color1">Confirm</MDBBtn>
                   </div>
                  </form>
              </div>
            </MDBCol>
          </MDBRow>
          </div>
          </MDBModal>
        {/* //Rate Modal */}
         {/*//Modals  */}
        
        <MDBRow className="swaps-container mx-auto px-2 py-3">
          
        {

        receivedItems.length > 0 ? (
          receivedItems.map(item => (
            item.receivedFromSwapped.map(receivedItems => (
              <MDBCol md="12">
              <a onClick={val => handleShow(
                receivedItems.item,
                receivedItems.itemname,
                receivedItems.itemimage,
                receivedItems.name,
                receivedItems.avatar
                )}>
              <div className="chat">
                <img src={`${receivedItems.itemimage}`} className="rounded-circle chat-image mr-3" alt="Item Img.jpg" />
                <div className="chat-details pt-3">
                <div>{receivedItems.itemname}</div>
                  <p style={{color: "#00AF80"}}>Transaction Complete</p>
                </div>
                <img src={`${receivedItems.avatar}`} className="swap-item-img mr-3" alt="Owner Img.jpg"/>
            </div>
            </a>
        </MDBCol>
            ))
          ))) : (<h4>No items found...</h4>)
          
      }

        </MDBRow>
        </div>

  );
}

Swaps.propTypes = {
  rateItem: PropTypes.func.isRequired,
  getAllItemsByUser: PropTypes.func.isRequired,
  getReceivedItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps, {getAllItemsByUser, getReceivedItems, rateItem})(Swaps);