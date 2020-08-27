import React, { Component } from "react";
import { MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import ItemGallery from "./itemGallery";
import Swaps from "./swaps";
import Badges from "./badges";
import Reviews from "./reviews";

class ProfileTabs extends Component {
  state = {
    items: {
      default: "1",
    }
  };

  togglePills = (type, tab) => e => {
    e.preventDefault();
    if (this.state.items[type] !== tab) {
      let items = { ...this.state.items };
      items[type] = tab;
      this.setState({
        items
      });
    }
  };

  render() {
    return (
            <div className="mt-1">
              <MDBNav className="nav-pills profile-tabs">
                <MDBNavItem className="profile-tab">
                  <MDBNavLink link to="#" active={this.state.items["default"] === "1"} onClick={this.togglePills("default", "1")} >
                    Home
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="profile-tab">
                  <MDBNavLink link to="#" active={this.state.items["default"] === "2"} onClick={this.togglePills("default", "2")} >
                    Swaps
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="profile-tab">
                  <MDBNavLink link to="#" active={this.state.items["default"] === "3"} onClick={this.togglePills("default", "3")} >
                    Badges
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="profile-tab" style={{borderRight: "solid 1px black"}}>
                  <MDBNavLink link to="#" active={this.state.items["default"] === "4"} onClick={this.togglePills("default", "4")} >
                    Reviews
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
              <MDBTabContent activeItem={this.state.items["default"]} className="profile-tab-content">
                <MDBTabPane tabId="1">
                    <div className="item-tab">
                        <ItemGallery/>
                    </div>
                </MDBTabPane>
                <MDBTabPane tabId="2">
                    <div className="swaps-tab">
                        <Swaps/>
                    </div>
                </MDBTabPane>
                <MDBTabPane tabId="3">
                        <Badges/>
                </MDBTabPane>
                <MDBTabPane tabId="4">
                        <Reviews/>
                </MDBTabPane>
              </MDBTabContent>
              </div>
      );
    }
}

export default ProfileTabs;