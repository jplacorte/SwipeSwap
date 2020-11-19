import React, { Component } from "react";
import { MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBIcon } from "mdbreact";
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
                    <MDBIcon icon="th" /><span className="profile-tab-label"> Items</span>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="profile-tab">
                  <MDBNavLink link to="#" active={this.state.items["default"] === "2"} onClick={this.togglePills("default", "2")} >
                    <MDBIcon icon="sync" /><span className="profile-tab-label"> Swaps</span>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="profile-tab">
                  <MDBNavLink link to="#" active={this.state.items["default"] === "3"} onClick={this.togglePills("default", "3")} >
                    <MDBIcon icon="award" style={{fontSize: "18px"}} /><span className="profile-tab-label"> Badges</span>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="profile-tab">
                  <MDBNavLink link to="#" active={this.state.items["default"] === "4"} onClick={this.togglePills("default", "4")} >
                    <MDBIcon icon="star" /><span className="profile-tab-label"> Reviews</span>
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