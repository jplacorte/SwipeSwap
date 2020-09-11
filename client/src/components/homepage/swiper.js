import React from 'react';
import { Item, AppContainer, ExtraInfo, Code } from "./swipestyle";
import Carousel from "./carousel";
import { MDBRow, MDBCol, MDBBtn, MDBModal,  MDBModalFooter, MDBView, MDBMask, MDBListGroupItem } from 'mdbreact';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import SwipeImage from '../../assets/images/item1.jpg';
import SwipeImage2 from '../../assets/images/item7.jpg';
import Avatar from '../../assets/images/avatar.png';
import ImgSlider from '../imgSlider';
import ItemCondition from '../itemCondition';

class Swiper extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  state = {
    modal: false
  }
  
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  
  // toggle={this.toggle}

  render() {
    return (
      <>
      {/* Modals */}
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <div className="item-details-modal">
          <MDBRow>
            <MDBCol md="12">
            <ImgSlider />
            </MDBCol>
          </MDBRow>
          <MDBRow className="p-3">
            <MDBCol md="12">
              <div className="d-flex bd-highlight example-parent">
                <div className="w-100 bd-highlight col-example item-name">Sample Name</div>
                <div className="bd-highlight col-example ml-auto"><ItemCondition /></ div>
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
                <div className="d-flex bd-highlight example-parent text-center mt-3">
                  <div className="flex-fill bd-highlight col-example">
                    <div className="font-weight-bold" style={{fontSize: '18px'}}>20</div>
                  <div>Deals</div>
                  </div>
                  <div className="flex-fill bd-highlight col-example">
                  <div className="font-weight-bold" style={{fontSize: '18px'}}>4.7</div>
                    <div>Rating</div>
                  </div>
                  <div className="flex-fill bd-highlight col-example">
                  <div className="font-weight-bold" style={{fontSize: '18px'}}>4</div>
                    <div>Items</div>
                  </div>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </div>
        <MDBModalFooter className="mx-auto">
          <MDBBtn className="want-ignore-btn px-5 py-2" color="white" onClick={this.toggle}>Ignore</MDBBtn>
          <MDBBtn className="want-ignore-btn color1 px-5 py-2">Want</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
      {/* //Modals */}

        <Carousel title="Carousel">
          <MDBView>
            <a className="swipe-item" onClick={this.toggle} ><Item img={SwipeImage2}/>
            <MDBMask>
              <div className="swipe-item-details p-3">
                <div className="font-weight-bold item-name">Sample Name</div>
                <div className="item-distance">8km<span> • Delivery</span></div>
              </div>
            </MDBMask>
            </a>
          </MDBView>

          <MDBView>
            <a className="swipe-item" onClick={this.toggle} ><Item img={SwipeImage}/>
            <MDBMask>
              <div className="swipe-item-details p-3">
                <div className="font-weight-bold item-name">Sample Name</div>
                <div className="item-distance">8km<span> • Delivery</span></div>
              </div>
            </MDBMask>
            </a>
          </MDBView>

          <MDBView>
            <a className="swipe-item" onClick={this.toggle} ><Item img={SwipeImage2}/>
            <MDBMask>
              <div className="swipe-item-details p-3">
              <div className="font-weight-bold item-name">Sample Name</div>
                <div className="item-distance">8km<span> • Delivery</span></div>
              </div>
            </MDBMask>
            </a>
          </MDBView>
        
      </Carousel>
      </>
    );
  }
}

export default Swiper;
