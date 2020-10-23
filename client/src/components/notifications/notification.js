import React from 'react';
import { Link }  from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

function Notification({ name, message, profilePic, timestamp }) {
    return (
    <Link to="/chatScreen/id">
          <MDBRow>
            <MDBCol md="12">
           {/* read-notification if read */}
            <div className="d-flex bd-highlight example-parent unread-notification my-2"> 
              <div className="p-2 flex-shrink-1 bd-highlight col-example">
              <img src={profilePic} className="rounded-circle notif-image mx-1" alt="KB" />
              </div>
              <div className="py-2 w-100 bd-highlight col-example">
                  <div className="notif-name">{name}</div>
                  <div className="notif-message">{message}</div>
                  <div className="notif-timestamp">{timestamp}</div>
              </div>
            </div>
            </MDBCol>
          </MDBRow>
    </Link>
    );
}

export default Notification;
