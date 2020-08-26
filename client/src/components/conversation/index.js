import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBFormInline } from 'mdbreact';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Navbar from '../navbar';
import Chats from './chats';

class Conversation extends React.Component {
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
      <Navbar />
        <div className="conversation">

          {/* Modals */}

        {/* //Modals */}

          <MDBContainer className="conversation-container">
            <MDBRow>
              <MDBCol md="12" className="border-bottom pb-3">
                <div className="page-title">Messages</div>
              </MDBCol>
                <MDBCol md="12" className="conversation-search">
                  <MDBFormInline className="md-form flex-center">
                    <MDBIcon icon="search" />
                    <input className="form-control form-control-md ml-3 w-75"   type="text" placeholder="Search" aria-label="Search" />
                  </MDBFormInline>
                </MDBCol>
                <MDBCol md="12">
                  <div className="my-3 mx-2">
                    <Chats />
                  </div>
                </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </>
    );
  }
}

export default Conversation;
