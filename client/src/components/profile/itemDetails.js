import React, { Component } from 'react';
import { MDBIcon, MDBRow, MDBCol, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBCard, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBBtn } from 'mdbreact';
import { Link }  from 'react-router-dom';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import ItemCondition from '../itemCondition';
import Navbar from '../navbar';

class ItemDetails extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);
  state = {
    modal: false
  }
  
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <>
      {/* Modals */}

      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>Edit Info</MDBModalHeader>
        <MDBModalBody>
        
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
            <MDBCarouselInner className="mx-auto text-center">
              <Link to="/conversation">
                <MDBIcon icon="angle-left" className="pt-2 ml-2" style={{fontSize: '32px', color: '#167D7F'}} />
              </Link>
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
                <a className="bd-highlight col-example ml-auto mt-1 font-weight-bold" style={{color: "#167D7F"}} onClick={this.toggle}>Edit</ a>
              </div>
              <div className="item-distance">8km<span> • Delivery</span></div>
              <div className="item-description mt-2">Sample Description Sample Description Sample Description</div>
              <div className="item-category mt-3">Category1 • Category2 • Category3</div>
                <div className="d-flex bd-highlight example-parent py-2">
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
}

export default ItemDetails;
