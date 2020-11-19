import React from 'react';
import { MDBRow, MDBCol, MDBContainer, MDBIcon } from 'mdbreact';
import { Link }  from 'react-router-dom';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Navbar from '../navbar';

class PrivacyPolicy extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
      <Navbar />
        <div className="privacy-policy">
          <MDBContainer className="settings-container">
            <MDBRow className="mx-auto">
                <MDBCol md="12" className="border-bottom pb-3">
                <Link to="/support" className="float-left" >
                    <MDBIcon icon="angle-left" className="ml-2" style={{fontSize: '32px', color: '#167D7F'}} />
                    </Link>
                    <div className="page-title">End User License Agreement</div>
                </MDBCol>
                <MDBCol md="12">
                    <div className="p-4">
                    This End User License Agreement (“Agreement”) is between you and Swipe Swap and governs use of this app made available through the Apple App Store, and Google Play Store. By installing the Swipe Swap App, you agree to be bound by this Agreement and understand that there is no tolerance for objectionable content. If you do not agree with the terms and conditions of this Agreement, you are not entitled to use the Swipe Swap App.
                    </div>
                </MDBCol>
                
            </MDBRow>    
          </MDBContainer>
        </div>
      </> 
    );
  }
}

export default PrivacyPolicy;
