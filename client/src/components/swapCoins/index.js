import React from 'react';
import { MDBRow, MDBCol, MDBContainer, MDBIcon, MDBListGroup, MDBListGroupItem } from 'mdbreact';
import { Link }  from 'react-router-dom';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Navbar from '../navbar';
import LoginClaim from './loginClaim';

class SwapCoins extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
      <Navbar />
        <div className="edit-categories">
        <MDBContainer className="edit-categories-container">
            <MDBRow>
              <MDBCol md="12" className="border-bottom pb-3">
                <div className="page-title">SwapCoins</div>
              </MDBCol>
              <MDBCol size="12" className="swap-coins-amount text-center my-3">
                <MDBIcon icon="coins" className="mr-2" style={{color: "gold"}} /><span>10.00</span>
              </MDBCol>
              <MDBCol size="12">
                <LoginClaim />
              </MDBCol>
              <MDBCol size="12" className="earn-swapcoins my-4">
              <div className="black-text mb-1" style={{fontSize: '18px'}}>Earn SwapCoins</div>
              <div className="earn-swapcoins-list">
                <Link to="">Publish New Item</Link>
              </div>
              <div className="earn-swapcoins-list">
                <Link to="">Earn Badges</Link>
              </div>
              <div className="earn-swapcoins-list">
                <Link to="">Share on Facebook</Link>
              </div>
              <div className="earn-swapcoins-list">
                <Link to="">Answer Survey</Link>
              </div>
              <div className="earn-swapcoins-list">
                <Link to="">Game</Link>
              </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </> 
    );
  }
}

export default SwapCoins;
