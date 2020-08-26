import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBFormInline, MDBTabPane, MDBTabContent, MDBNavLink, MDBNavItem, MDBNav } from 'mdbreact';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Avatar from '../../assets/images/avatar.png';
import Navbar from '../navbar';
import ProfileTabs from './tabs';

class Profile extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
      <Navbar />
        <div className="profile">
          <div className="profile-container">
            <MDBRow className="mx-auto">
              <MDBCol lg="6">
              <div className="d-flex bd-highlight example-parent flex-center">
                <div className="bd-highlight col-example mx-2">
                  <img src={Avatar} className="rounded-circle profile-avatar" />
                </div>
                <div className="flex-grow-1 bd-highlight col-example">
                  <div className="">
                    <div className="profile-name">Sample Name</div>
                    <div className="profile-address">Sample Address, Sample Address</div>
                  </div>
                </div>
              </div>
              </MDBCol>
              <MDBCol lg="6" className="text-center">
              <div className="d-flex bd-highlight example-parent profile-details flex-center">
                <div className="p-2 flex-fill bd-highlight col-example px-3">
                  <div className="font-weight-bold">15</div>
                  <div>Swaps</div>
                </div>
                <div className="p-2 flex-fill bd-highlight col-example px-3">
                  <div className="font-weight-bold">15</div>
                  <div>Rating</div>
                </div>
                <div className="p-2 flex-fill bd-highlight col-example px-3">
                  <div className="font-weight-bold">15 <MDBIcon icon="award" className="text-color-1" /></div>
                  <div>Badges</div>
                </div>
                <div className="p-2 flex-fill bd-highlight col-example px-3">
                  <div className="font-weight-bold">15 <MDBIcon icon="coins" style={{color: 'gold'}} /></div>
                  <div>SwapCoins</div>
                </div>
              </div>
              </MDBCol>
              <MDBCol lg="12" className="text-center flex-center">
                <div className="edit-profile-btn my-3 mx-2">Edit Profile</div>
              </MDBCol>
            </MDBRow>    
          </div>
          <ProfileTabs />
        </div>
      </> 
    );
  }
}

export default Profile;
