import React from 'react';
import { MDBRow, MDBCol, MDBContainer, MDBIcon } from 'mdbreact';
import { Link }  from 'react-router-dom';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Navbar from '../navbar';

class EditCategories extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
      <Navbar />
        <div className="edit-categories">
          <MDBContainer className="edit-categories-container">
            <MDBRow className="mx-auto">
                <MDBCol md="12" className="border-bottom pb-3">
                <Link to="/settings" className="float-left" >
                    <MDBIcon icon="angle-left" className="ml-2" style={{fontSize: '32px', color: '#167D7F'}} />
                    </Link>
                    <div className="page-title">Edit Categories</div>
                </MDBCol>  
            </MDBRow>    
          </MDBContainer>
        </div>
      </> 
    );
  }
}

export default EditCategories;
