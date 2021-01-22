import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { MDBCol, MDBRow, MDBBtn, MDBModal, MDBRating, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from 'mdbreact';
import ItemImg from '../../assets/images/swipeswap_item.jpg';
import Avatar from '../../assets/images/avatar.png';
import ItemCondition from '../itemCondition';
import { getReviews } from '../../actions/review';

const Swaps = ({ getReviews, review: { reviews, loading } }) => {
  
  useEffect(() => {
    getReviews()
  }, [getReviews])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async (item_id, owner_id, review, ownername, avatar, itemname, desc, image) => {
    setItems({
      item_id: item_id,
      owner_id: owner_id,
      name: ownername,
      itemname: itemname,
      avatar: avatar,
      desc: desc,
      photo1: image,
    }) 

    setFormData({
      reviewdetails: review
    })
    setShow(true)
  };

  const [received_items, setItems] = useState({
    item_id: '',
    owner_id: '',
    itemname: '',
    photo1: '',
    photo2: '',
    photo3: '',
    photo4: '',
    desc: '',
    cat: '',
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
    owner_id,
    itemname,
    photo1,
    photo2,
    photo3,
    photo4,
    desc,
    cat,
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
  // const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // const onSubmit = async e => {
  //   e.preventDefault()
  //   submitReview(item_id, owner_id, formData)
  //   window.location.reload(false)
  // }
  return (
        <div>
          {/* Modals */}
          {/* Rate Modal */}
          {/* <MDBModal isOpen={show} onHide={handleClose}>
          <div className="item-details-modal">
          <MDBRow>
            <MDBCol md="12">
            <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1 item-img-slider"
        interval={false}
      >
        <MDBCarouselInner>
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
          </MDBRow>
          <MDBRow className="p-3">
            <MDBCol md="12">
              <div className="d-flex bd-highlight example-parent">
                <div className="w-100 bd-highlight col-example item-name">{
                itemname
          }</div>
                <div className="bd-highlight col-example ml-auto">
                  <ItemCondition />
                </div>
              </div>
        <div className="item-description mt-2">{desc}</div>
        <div className="item-category mt-3">{cat}</div>
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
          </MDBModal> */}
        {/* //Rate Modal */}
         {/*//Modals  */}
        
        <MDBRow className="swaps-container mx-auto px-2 py-3">
          {
            reviews.map(review => (
              <MDBCol md="12">
              {/* <a onClick={val => handleShow(
                review.item,
                review.owner,
                review.review,
                review.ownername,
                review.avatar,
                review.itemname,
                review.itemdesc,
                review.image
              )}> */}
              <div className="chat">
                <img src={review.image} className="rounded-circle chat-image mr-3" alt="Item Img.jpg" />
                <div className="chat-details pt-3">
                <div>{review.itemname}</div>
                  <p style={{color: "#00AF80"}}>Transaction Complete</p>
                </div>
                <img src={review.avatar ? review.avatar : Avatar} className="swap-item-img mr-3" alt="Owner Img.jpg"/>
            </div>
            {/* </a> */}
          </MDBCol>
            ))
          }
        
        </MDBRow>
        </div>

  );
}

const mapStateToProps = state => ({
  review: state.review
});

export default connect(mapStateToProps, { getReviews })(Swaps);