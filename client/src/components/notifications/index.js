import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { MDBContainer, MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBNavLink, MDBNavItem, MDBNav } from 'mdbreact';
import { ToastContainer, toast, Slide } from 'react-toastify';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Navbar from '../navbar';
import Notifications from './notifications';

const NotificationsList = ({ auth: { isAuthenticated, user } }) => {

    let userid
    if(isAuthenticated){
      userid = user._id
    }
    useEffect(() => {
    
      let socket = require('socket.io-client')('/', {
        secure: true,
        rejectUnauthorized: false,
        path: '/chat/socket.io'
      });

      socket.on(`messageFrom${userid}`, (data) => toast(`New message from ${data}`, {
        transition: Slide
      }));

      socket.on(`match${userid}`, (data) => toast.success(data, {
        transition: Slide
      }));

      socket.on(`accept${userid}`, (data) => toast.success(`Superwant accepted by ${data}!`, {
        transition: Slide
      }));

      return () => {
        socket.removeListener(`messageFrom${userid}`);
        socket.removeListener(`accept${userid}`);
        socket.removeListener(`match${userid}`);
      };
    }, []);

    return (
      <>
      <ToastContainer/>
      <Navbar />
        <div className="notifications-list">
          <MDBContainer className="notifications-container">
            <MDBRow>
              <MDBCol md="12" className="border-bottom pb-3">
                <div className="page-title">Notifications</div>
              </MDBCol>
                <MDBCol md="12" className="">
                  <div className="my-4">

                  {/* <MDBNav className="nav-pills flex-center mb-4">
                    <MDBNavItem>
                      <MDBNavLink link to="#" active={this.state.items["default"] === "1"}  onClick={this.togglePills("default", "1")} className="notif-pills mx-1 text-center" >
                        All
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink link to="#" active={this.state.items["default"] === "2"}  onClick={this.togglePills("default", "2")} className="notif-pills mx-1 text-center" >
                        Unread
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink link to="#" active={this.state.items["default"] === "3"}  onClick={this.togglePills("default", "3")} className="notif-pills mx-1 text-center" >
                        Matches
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNav> */}
                  {/* <MDBTabContent activeItem={this.state.items["default"]}>
                    <MDBTabPane tabId="1"> */}
                      <Notifications />
                    {/* </MDBTabPane>
                    <MDBTabPane tabId="2">
                      <Notifications />
                    </MDBTabPane>
                    <MDBTabPane tabId="3">
                      <Notifications />
                    </MDBTabPane>
                  </MDBTabContent> */}
                  </div>
                </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </>
    );
  }

  const mapStateToProps = state => ({
    auth: state.auth
  })

export default connect(mapStateToProps, null)(NotificationsList);
