import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBNavLink, MDBNavItem, MDBNav } from 'mdbreact';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Navbar from '../navbar';
import Notifications from './notifications';

class NotificationsList extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

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
      <>
      <Navbar />
        <div className="notifications-list">
          <MDBContainer className="notifications-container">
            <MDBRow>
              <MDBCol md="12" className="border-bottom pb-3">
                <div className="page-title">Notifications</div>
              </MDBCol>
                <MDBCol md="12" className="">
                  <div className="my-4">

                  <MDBNav className="nav-pills flex-center mb-4">
                    <MDBNavItem>
                      <MDBNavLink link to="#" active={this.state.items["default"] === "1"}  onClick={this.togglePills("default", "1")} className="notif-pills mx-1 text-center" >
                        All
                      </MDBNavLink>
                    </MDBNavItem>
                    {/* <MDBNavItem>
                      <MDBNavLink link to="#" active={this.state.items["default"] === "2"}  onClick={this.togglePills("default", "2")} className="notif-pills mx-1 text-center" >
                        Unread
                      </MDBNavLink>
                    </MDBNavItem> */}
                    <MDBNavItem>
                      <MDBNavLink link to="#" active={this.state.items["default"] === "3"}  onClick={this.togglePills("default", "3")} className="notif-pills mx-1 text-center" >
                        Matches
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNav>
                  <MDBTabContent activeItem={this.state.items["default"]}>
                    <MDBTabPane tabId="1">
                      <Notifications />
                    </MDBTabPane>
                    <MDBTabPane tabId="2">
                      <Notifications />
                    </MDBTabPane>
                    <MDBTabPane tabId="3">
                      <Notifications />
                    </MDBTabPane>
                  </MDBTabContent>
                  </div>
                </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </>
    );
  }
}

export default NotificationsList;
