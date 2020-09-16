import React from 'react';
import { MDBRow, MDBCol, MDBContainer, MDBIcon, MDBMask, MDBView, MDBBtn, MDBModal, MDBModalFooter } from 'mdbreact';
import { Link }  from 'react-router-dom';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Navbar from '../navbar';
import Item from '../../assets/images/item1.jpg';
import SwipeImage from '../../assets/images/item1.jpg';
import SwipeImage2 from '../../assets/images/item7.jpg';
import Avatar from '../../assets/images/avatar.png';
import ImgSlider from '../imgSlider';
import ItemCondition from '../itemCondition';

class Marketplace extends React.Component {
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
        </div>
        <MDBModalFooter className="mx-auto">
          <MDBBtn className="want-ignore-btn px-5 py-2" color="white" onClick={this.toggle}>Ignore</MDBBtn>
          <MDBBtn className="want-ignore-btn color1 px-5 py-2">Buy</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
      {/* //Modals */}

      <Navbar />
      <MDBView>
        <div className="marketplace mb-4">
          <MDBContainer className="marketplace-container">
            <MDBRow className="mx-auto">

              <MDBCol size="12" className="flex-center">
                <input className="form-control marketplace-search mr-3" type="text" placeholder="Search" aria-label="Search" />
                <span className="marketplace-swapcoins"><MDBIcon icon="coins" className="mr-2"  style={{color: 'gold'}} />10.00</span>
              </MDBCol>

              <MDBCol size="12" className="text-center my-4">
                <div>Collect SwapCoins to get this awesome items.</div>
              </MDBCol>
              <MDBCol md="12" className="mx-auto">

              <div className="d-flex flex-wrap bd-highlight example-parent flex-center">

                <MDBView className="bd-highlight col-example marketplace-col" onClick={this.toggle}>
                    <div className="marketplace-item">
                      <img src={Item} />
                    </div>
                    <MDBMask className="white-text custom-mask" overlay="black-strong">
                      <div className="marketplace-item-value text-right p-2">
                        <MDBIcon icon="coins" style={{color: 'gold'}} /> 50</div>
                      <div className="marketplace-item-details p-2">Sample Name</div>
                    </MDBMask>
                </MDBView>
             
                <MDBView className="bd-highlight col-example marketplace-col" onClick={this.toggle}>
                    <div className="marketplace-item">
                      <img src={Item} />
                    </div>
                    <MDBMask className="white-text custom-mask" overlay="black-strong">
                      <div className="marketplace-item-value text-right p-2">
                        <MDBIcon icon="coins" style={{color: 'gold'}} /> 50</div>
                      <div className="marketplace-item-details p-2">Sample Name</div>
                    </MDBMask>
                </MDBView>
                
                <MDBView className="bd-highlight col-example marketplace-col" onClick={this.toggle}>
                    <div className="marketplace-item">
                      <img />
                    </div>
                    <MDBMask className="white-text custom-mask" overlay="black-strong">
                      <div className="marketplace-item-value text-right p-2">
                        <MDBIcon icon="coins" style={{color: 'gold'}} /> 50</div>
                      <div className="marketplace-item-details p-2">Sample Name</div>
                    </MDBMask>
                </MDBView>
                
                <MDBView className="bd-highlight col-example marketplace-col" onClick={this.toggle}>
                    <div className="marketplace-item">
                      <img />
                    </div>
                    <MDBMask className="white-text custom-mask" overlay="black-strong">
                      <div className="marketplace-item-value text-right p-2">
                        <MDBIcon icon="coins" style={{color: 'gold'}} /> 50</div>
                      <div className="marketplace-item-details p-2">Sample Name</div>
                    </MDBMask>
                </MDBView>

                <MDBView className="bd-highlight col-example marketplace-col" onClick={this.toggle}>
                    <div className="marketplace-item">
                      <img />
                    </div>
                    <MDBMask className="white-text custom-mask" overlay="black-strong">
                      <div className="marketplace-item-value text-right p-2">
                        <MDBIcon icon="coins" style={{color: 'gold'}} /> 50</div>
                      <div className="marketplace-item-details p-2">Sample Name</div>
                    </MDBMask>
                </MDBView>

                <MDBView className="bd-highlight col-example marketplace-col" onClick={this.toggle}>
                    <div className="marketplace-item">
                      <img />
                    </div>
                    <MDBMask className="white-text custom-mask" overlay="black-strong">
                      <div className="marketplace-item-value text-right p-2">
                        <MDBIcon icon="coins" style={{color: 'gold'}} /> 50</div>
                      <div className="marketplace-item-details p-2">Sample Name</div>
                    </MDBMask>
                </MDBView>

              </div>

              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
          <MDBMask className="flex-center" overlay="black-strong">
              
          </MDBMask>
        </MDBView>
      </> 
    );
  }
}

export default Marketplace;
