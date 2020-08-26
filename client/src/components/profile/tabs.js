import React, { Component } from "react";
import { MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import ItemGallery from "./itemGallery";

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
            <div className="mt-1 mb-5">
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
                  <p>
                    Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa
                    mollit commodo mollit ex. Aute sunt incididunt amet commodo
                    est sint nisi deserunt pariatur do. Aliquip ex eiusmod
                    voluptate exercitation cillum id incididunt elit sunt. Qui
                    minim sit magna Lorem id et dolore velit Lorem amet
                    exercitation duis deserunt. Anim id labore elit adipisicing
                    ut in id occaecat pariatur ut ullamco ea tempor duis.
                  </p>
                </MDBTabPane>
                <MDBTabPane tabId="3">
                  <p>
                    Est quis nulla laborum officia ad nisi ex nostrud culpa
                    Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis
                    ipsum nisi elit fugiat commodo sunt reprehenderit laborum
                    veniam eu veniam. Eiusmod minim exercitation fugiat irure ex
                    labore incididunt do fugiat commodo aliquip sit id deserunt
                    reprehenderit aliquip nostrud. Amet ex cupidatat excepteur
                    aute veniam incididunt mollit cupidatat esse irure officia
                    elit do ipsum ullamco Lorem. Ullamco ut ad minim do mollit
                    labore ipsum laboris ipsum commodo sunt tempor enim
                    incididunt. Commodo quis sunt dolore aliquip aute tempor
                    irure magna enim minim reprehenderit. Ullamco consectetur
                    culpa veniam sint cillum aliqua incididunt velit ullamco
                    sunt ullamco quis quis commodo voluptate. Mollit nulla
                    nostrud adipisicing aliqua cupidatat aliqua pariatur mollit
                    voluptate voluptate consequat non.
                  </p>
                </MDBTabPane>
              </MDBTabContent>
              </div>
      );
    }
}

export default ProfileTabs;