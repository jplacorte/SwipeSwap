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
                      <Notifications />
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
