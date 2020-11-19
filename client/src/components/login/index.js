import React from 'react';
import { MDBRow, MDBCol, MDBAnimation } from 'mdbreact';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Swipe from "../../assets/icons/1.png";
import Swap from "../../assets/icons/2.png";
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
        <MDBRow className="mx-auto">
          <MDBCol size="12" className="mx-auto text-center">
             <MDBAnimation type="slideInLeft" >
              <img src={Swipe} className="ss-logo-splash swipe" />
            </MDBAnimation>
            <MDBAnimation type="slideInRight" delay="0.2s" >
              <img src={Swap} className="ss-logo-splash swap" />
            </MDBAnimation>
          </MDBCol>
            
              <MDBCol size="12">
              <MDBAnimation type="slideInUp" className="fixed-bottom" delay="1.5s">
              <div className="login-modal" size="fluid">
                  <div className="login-modal-body p-3">
                        <MDBRow>
                            <MDBCol md="12" className="mt-2 mb-3" style={{fontWeight:  "300"}}>
                              Snap.Swipe.Swap
                            </MDBCol>
                            <MDBCol md="12">
                            <Facebook/>
                            </MDBCol>
                            <MDBCol md="12" style={{fontSize: "14px", fontWeight: "300"}} className="mt-3 mb-2">
                              By logging in, you agree to our <a><u>Privacy Policy</  u></a> and <a><u>License Agreement</u></a>
                            </MDBCol>
                        </MDBRow>
                  </div>
              </div>
              </MDBAnimation>
              </MDBCol>
            </MDBRow>

          

            {/* <MDBModal isOpen={this.state.modal} toggle={this.toggle}  position="bottom" backdrop={false} className="login-modal" size="fluid" autoFocus={true} animation="right" fade={false} >
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
            </MDBModal> */}
        </div>
      </>
    );
  }
}

export default LoginPage;
