import React from 'react';
import { MDBRow, MDBCol, MDBContainer, MDBIcon } from 'mdbreact';
import { Link }  from 'react-router-dom';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Navbar from '../navbar';

class Marketplace extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
      <Navbar />
        <div className="marketplace">
          <MDBContainer className="marketplace-container">
            
          </MDBContainer>
        </div>
      </> 
    );
  }
}

export default Marketplace;
