import React from 'react';
import { MDBRow, MDBCol, MDBContainer, MDBIcon } from 'mdbreact';
import { Link }  from 'react-router-dom';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Navbar from '../navbar';

class Settings extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
      <Navbar />
        <div className="settings">
          <MDBContainer className="settings-container">
            <MDBRow className="mx-auto">
                <MDBCol md="12" className="border-bottom pb-3">
                    <div className="page-title">Settings</div>
                </MDBCol>
                <MDBCol md="12" className="px-3 mt-4">
                    <div className="settings-header"><MDBIcon icon="database" className="mr-2" />Discovery Preferences</div>
                    <Link to="/editCategories">
                    <div className="settings-list mt-2 p-2"><MDBIcon icon="list" className="mr-2" />Edit Categories</div>
                    </Link>
                </MDBCol>
                <MDBCol md="12" className="px-3 mt-4">
                    <div className="settings-header"><MDBIcon icon="comment" className="mr-2" />Chat Settings</div>
                    <div className="settings-list mt-2 p-2"><MDBIcon far icon="comment" className="mr-2" />Message Shortcuts</div>
                </MDBCol>
                <MDBCol md="12" className="px-3 mt-4">
                    <div className="settings-header"><MDBIcon icon="bell" className="mr-2" />Notification Settings</div>
                    <div className="settings-list mt-2 p-2"><MDBIcon far icon="bell" className="mr-2" />Push Notifications</div>
                    <div className="settings-list mt-2 p-2"><MDBIcon far icon="envelope" className="mr-2" />Email Notifications</div>
                </MDBCol>
            </MDBRow>    
          </MDBContainer>
        </div>
      </> 
    );
  }
}

export default Settings;
