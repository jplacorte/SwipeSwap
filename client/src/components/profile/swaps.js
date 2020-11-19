import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { MDBCol, MDBRow, MDBModalFooter, MDBBtn, MDBModal, MDBRating } from 'mdbreact';
import Avatar from '../../assets/images/avatar.png';
import ImgSlider from '../imgSlider';
import ItemCondition from '../itemCondition';
import PropTypes from 'prop-types'; 
import { getAllItemsByUser, rateItem } from '../../actions/item'

const Swaps = ({ getAllItemsByUser, item: { items, loading }, rateItem }) => {
  useEffect(() => {
    getAllItemsByUser()
  }, [getAllItemsByUser])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                <div className="w-100 bd-highlight col-example item-name">Item name</div>
                <div className="bd-highlight col-example ml-auto">
                  <ItemCondition />
                </div>
              </div>
              <div className="item-distance">8km<span> • Delivery</span></div>
              <div className="item-description mt-2">Sample Description Sample Description Sample Description</div>
              <div className="item-category mt-3">Category1 • Category2 • Category3</div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="12" className="">
              <div className="item-user-profile p-3">
              <div className="d-flex bd-highlight example-parent">
                 <div className="flex-fill bd-highlight col-example">
                   <img src={Avatar} /><span className="ml-2 item-user-profile-name">Sample Username</span>
                 </div>
                 <div className="bd-highlight col-example ml-auto">
                   <MDBBtn className="view-profile-btn">View Profile</MDBBtn>
                 </div>
                </div>
               
                  <form className="my-3 text-center mx-auto">
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
                    <textarea type="text" id="" className="form-control" rows="3" placeholder="Write something here..." />
                  </div>
                  <div className="mx-auto mt-4">
                    <MDBBtn className="modal-btn-sm p-2 px-4" color="white" onClick={handleClose}>Cancel</MDBBtn>
                    <MDBBtn className="modal-btn-sm p-2 px-4 color1">Confirm</MDBBtn>
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
          
          {items.length > 0 ? (
          items.map(item => (
            <MDBCol md="12">
            <a onClick={handleShow}>
            <div className="chat">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg" className="rounded-circle chat-image mr-3" alt="KB" />
                <div className="chat-details pt-3">
                <div>{item.itemname}</div>
                  <p style={{color: "#00AF80"}}>Deal is completed</p>
                </div>
                <img src="https://mdbootstrap.com/img/Others/documentation/img%20(151)-mini.jpg" className="swap-item-img mr-3" alt="SS" />
            </div>
            </a>
        </MDBCol>

          ))) : (<div className="mx-auto grey-text">No Swapped Items yet</div>)}

        </MDBRow>
        </div>

  );
}

Swaps.propTypes = {
  rateItem: PropTypes.func.isRequired,
  getAllItemsByUser: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps, {getAllItemsByUser, rateItem})(Swaps);