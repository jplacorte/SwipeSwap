import React from 'react';
import { MDBRow, MDBCol, MDBBtn, MDBIcon, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Logo from "../../assets/icons/sslogo2.png";
import Facebook from '../Facebook';

class LoginPage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  state = {
    modal: true
  }
  
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <>
        <div className="login-page text-center">
            <img src={Logo} className="ss-logo-splash" />
            <MDBModal isOpen={this.state.modal} toggle={this.toggle} fullHeight position="bottom" backdrop={false} className="login-modal" size="fluid" autoFocus={true}>
                <MDBModalBody className="login-modal-body">
                      <MDBRow>
                          <MDBCol md="12" className="my-2" style={{fontWeight: "300"}}>
                            Snap.Swipe.Swap
                          </MDBCol>
                          <MDBCol md="12">
                          <Facebook/>
                          </MDBCol>
                          <MDBCol md="12" style={{fontSize: "14px", fontWeight: "300"}} className="my-2">
                            By logging in, you agree to our <a><u>Privacy Policy</u></a> and <a><u>Licence Agreement</u></a>
                          </MDBCol>
                      </MDBRow>
                </MDBModalBody>
            </MDBModal>
        </div>
      </>
    );
  }
}

export default LoginPage;
