import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";

class LandingNavbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar className="px-5 fixed-top" color="black" dark expand="lg">
        <MDBNavbarBrand style={{fontSize: '30px'}}>
          <strong className="white-text font-weight-bold">SWIPESWAP</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav className="landing-navbar" right>
            <MDBNavItem>
              <Link className="landing-navbar-link " to="home" activeClass="active-nav-item" spy={true} smooth={true} offset={-50} duration={500}>
                HOME<MDBIcon className="mx-2" icon="circle" />
              </Link>
            </MDBNavItem>
            <MDBNavItem>
             <Link className="landing-navbar-link" to="about" activeClass="active-nav-item" spy={true} smooth={true} offset={-88} duration={500}>
                ABOUT<MDBIcon className="mx-2" icon="circle" />
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link className="landing-navbar-link" to="features" activeClass="active-nav-item" spy={true} smooth={true} offset={-107} duration={500}>
                FEATURES<MDBIcon className="mx-2" icon="circle" />
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link className="landing-navbar-link" to="reviews" activeClass="active-nav-item" spy={true} smooth={true} offset={-85} duration={500}>
                REVIEWS<MDBIcon className="mx-2" icon="circle" style={{visibility:"hidden"}} />
              </Link>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default LandingNavbar;