import React from 'react';
import { NavLink } from 'react-router-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBIcon, MDBListGroup, MDBListGroupItem, MDBBadge } from 'mdbreact';
import 'react-pro-sidebar/dist/css/styles.css';
import Sidebar from "react-sidebar";
import SSLogo from '../assets/icons/sslogo2.png';
import Logout from './Logout';

class Navbar extends React.Component {
  
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
          sidebarOpen: false
      };
      this.onClick = this.onClick.bind(this);
      this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }


  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }

  render() {
    const bg = {backgroundColor: '#167D7F', zIndex: '1'}
    const container = {height: 1300}
    return(
        <div>
        <Sidebar
        sidebar={<b>
        <div className="sidemenu-logo my-4 mx-5">SWIPE<span>SWAP</span></div>
         <MDBListGroup className="sidemenu-list">

          <NavLink to="/homepage" activeStyle={{ fontWeight: "bold", color: "#167D7F!important" }}>
          <MDBListGroupItem hover><MDBIcon icon="sync" className="mr-3" />SwipeSwap</MDBListGroupItem>
          </NavLink>

          <NavLink to="/profile" activeStyle={{ fontWeight: "bold",color: "#167D7F!important" }}>
          <MDBListGroupItem hover><MDBIcon icon="user" className="mr-3" />My Profile</MDBListGroupItem>
          </NavLink>
          
          <NavLink to="/marketplace" activeStyle={{ fontWeight: "bold", color: "#167D7F!important" }}>
          <MDBListGroupItem hover><MDBIcon icon="shopping-cart" className="mr-3" />Marketplace<MDBBadge className="ml-2" color="teal">Coming Soon!</MDBBadge></MDBListGroupItem>
          </NavLink>

          <NavLink to="/swapCoins" activeStyle={{ fontWeight: "bold", color: "#167D7F!important" }}>
          <MDBListGroupItem hover><MDBIcon icon="coins" className="mr-3" />Swap Coins</MDBListGroupItem>
          </NavLink>

          <NavLink to="/settings" activeStyle={{ fontWeight: "bold", color: "#167D7F!important" }}>
          <MDBListGroupItem hover><MDBIcon icon="cog" className="mr-3" />Settings</MDBListGroupItem>
          </NavLink>
          
          <NavLink to="/support" activeStyle={{ fontWeight: "bold", color: "#167D7F!important" }}>
          <MDBListGroupItem hover><MDBIcon icon="question" className="mr-3" />Support</MDBListGroupItem>
          </NavLink>

          <MDBListGroupItem className="red-text" href="#" hover><MDBIcon icon="trash-alt" className="mr-3" />Delete Account</MDBListGroupItem>
          </MDBListGroup>
        
        
        <Logout/>
        

        </b>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white", borderRadius: '0px 0px 50px 0px', position: "fixed", opacity: '1' } }}
        >
      </Sidebar>
        
          <header>
            <MDBNavbar className="navbar" style={bg} dark expand="xs" fixed="top">
              <MDBNavbarBrand className="navbar-logo" onClick={() => this.onSetSidebarOpen(true)}>
                  <img src={SSLogo} height="35" />
              </MDBNavbarBrand>
                <MDBNavbarNav className="mt-2" right>
                  <MDBNavItem>
                    <NavLink className="waves-effect waves-light" to="/conversation" activeStyle={{ fontWeight: "bold",color: "#98D7C2" }} style={{color: 'white'}}><MDBIcon className="mx-2" icon="comment" size="lg" />
                    </NavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <NavLink className="waves-effect waves-light" to="/notifications" activeStyle={{ fontWeight: "bold",color: "#98D7C2" }} style={{color: 'white'}}><MDBIcon className="mx-0" icon="bell" size="lg" />
                      <MDBBadge color="danger" className="rounded-circle mb-2 ml-0"> </MDBBadge>
                    </NavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
            </MDBNavbar>
          </header>
          </div>
    );
  }
}

export default Navbar;