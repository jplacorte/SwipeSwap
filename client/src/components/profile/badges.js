import React from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import BadgeIcon from '../../assets/icons/medal.png';

function Badges() {
  return (
        <MDBRow className="badges-container mx-auto px-2 py-3">
            <MDBCol md="12" className="text-center">
               <div className="badges-title my-2"><img src={BadgeIcon} className="badge-icon mr-1" />24/100</div>
            </MDBCol>
            <MDBCol md="12">
                <div className="badges">
                    <img src={BadgeIcon} className="badge-icon mr-3" alt="KB" />
                    <div className="badges-details pt-3">
                      <div>Swiper 1</div>
                      <p style={{color: "#00AF80"}}>Achieved 100 Swipes</p>
                    </div>
                    <div className="badges-count mr-3" alt="SS">2 Badges</div>
                </div>
            </MDBCol>
            <MDBCol md="12">
                <div className="badges">
                    <img src={BadgeIcon} className="badge-icon mr-3" alt="KB" />
                    <div className="badges-details pt-3">
                      <div>Swiper 2</div>
                      <p style={{color: "#00AF80"}}>Achieved 500 Swipes</p>
                    </div>
                    <div className="badges-count mr-3" alt="SS">5 Badges</div>
                </div>
            </MDBCol>
            <MDBCol md="12">
                <div className="badges">
                    <img src={BadgeIcon} className="badge-icon mr-3" alt="KB" />
                    <div className="badges-details pt-3">
                      <div>Swiper 3</div>
                      <p style={{color: "#00AF80"}}>Achieved 1000 Swipes</p>
                    </div>
                    <div className="badges-count mr-3" alt="SS">10 Badges</div>
                </div>
            </MDBCol>
        </MDBRow>
        

  );
}

export default Badges;