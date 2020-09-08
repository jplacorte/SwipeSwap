import React from 'react';
import { MDBRow, MDBCol, MDBContainer, MDBIcon } from 'mdbreact';
import { Link }  from 'react-router-dom';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Navbar from '../navbar';

class Support extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
      <Navbar />
        <div className="settings">
          <MDBContainer className="settings-container">
            <MDBRow className="mx-auto">
                <MDBCol md="12" className="border-bottom pb-3">
                    <div className="page-title">Support</div>
                </MDBCol>
                <MDBCol md="12" className="px-3 mt-4">
                    <Link to="#">
                        <div className="settings-list mt-2 p-2"><MDBIcon icon="question-circle" className="mr-2" />Help Center</div>
                    </Link>
                    <Link to="#">
                        <div className="settings-list mt-2 p-2"><MDBIcon icon="lightbulb" className="mr-2" />Tips and Tricks</div>
                    </Link>
                    <Link to="#">
                        <div className="settings-list mt-2 p-2"><MDBIcon icon="users" className="mr-2" />Community Rules</div>
                    </Link>
                </MDBCol>
                <MDBCol md="12" className="px-3 mt-4">
                    <div className="settings-header"><MDBIcon icon="user-shield" className="mr-2" />SwipeSwap Policies</div>
                    <Link to="#">
                        <div className="settings-list mt-2 p-2"><MDBIcon icon="clipboard-check" className="mr-2" />Terms of Service</div>
                    </Link>
                    <Link to="#">
                        <div className="settings-list mt-2 p-2"><MDBIcon icon="shield-alt" className="mr-2" />Privacy Policy</div>
                    </Link>
                    <Link to="#">
                        <div className="settings-list mt-2 p-2"><MDBIcon icon="ban" className="mr-2" />Prohibited and Restricted Items Policy</div>
                    </Link>
                </MDBCol>
                <MDBCol md="12" className="px-3 mt-4">
                    <div className="settings-header"><MDBIcon icon="info" className="mr-2" />About</div>
                    <Link to="#">
                        <div className="settings-list mt-2 p-2"><MDBIcon icon="info-circle" className="mr-2" />About SwipeSwap</div>
                    </Link>
                </MDBCol>
            </MDBRow>    
          </MDBContainer>
        </div>
      </> 
    );
  }
}

export default Support;
