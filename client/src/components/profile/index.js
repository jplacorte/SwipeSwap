import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBFormInline, MDBTabPane, MDBTabContent, MDBNavLink, MDBNavItem, MDBNav } from 'mdbreact';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Avatar from '../../assets/images/avatar.png';
import Navbar from '../navbar';
import ProfileTabs from './tabs';

const ImgUpload =({
  onChange,
})=>{
  return(
    <label for="photo-upload" className="avatar-upload flex-center">
      <div className="avatar-img-wrap avatar-img-upload" >
        <img for="photo-upload" src={Avatar} className="rounded-circle" />
      </div>
      <input id="photo-upload" type="file" onChange={onChange}/> 
    </label>
  );
}

class Profile extends React.Component {
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
        <MDBModalHeader toggle={this.toggle}>Edit Profile</MDBModalHeader>
        <MDBModalBody className="px-4 text-center">
          <ImgUpload />
          <input type="text" id="" className="form-control" placeholder="Username" />
          <input type="text" id="" className="form-control mt-3" placeholder="Full Name" />
          <input type="text" id="" className="form-control mt-3" placeholder="Address" />
          <input type="text" id="" className="form-control mt-3" placeholder="Mobile Number" />
          <input type="email" id="" className="form-control mt-3" placeholder="Email" />
          <input type="date" id="" className="form-control mt-3" placeholder="Birthdate" />
          <input type="text" id="" className="form-control mt-3" placeholder="Facebook Link" />
          <input type="text" id="" className="form-control mt-3" placeholder="Instagram Link" />
          <input type="text" id="" className="form-control mt-3" placeholder="Gmail Link" />
          <input type="password" id="" className="form-control mt-3" placeholder="Password" />
          <input type="password" id="" className="form-control mt-3" placeholder="Confirm Password" />
        </MDBModalBody>

        <MDBBtn className="confirm-btn color1 mx-auto my-4 py-2 px-5" >Confirm</MDBBtn>

      </MDBModal>
      
      {/* //Modals */}

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
                    <div className="profile-name">username</div>
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
                  <div className="font-weight-bold">4.5</div>
                  <div>Rating</div>
                </div>
                <div className="p-2 flex-fill bd-highlight col-example px-3">
                  <div className="font-weight-bold">24 <MDBIcon icon="award" className="text-color-1" /></div>
                  <div>Badges</div>
                </div>
                <div className="p-2 flex-fill bd-highlight col-example px-3">
                  <div className="font-weight-bold">15 <MDBIcon icon="coins" style={{color: 'gold'}} /></div>
                  <div>SwapCoins</div>
                </div>
              </div>
              </MDBCol>
              <MDBCol lg="12" className="text-center flex-center">
                <div className="edit-profile-btn my-3 mx-2" onClick={this.toggle}>Edit Profile</div>
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
