import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBBadge, MDBIcon } from "mdbreact";
import "../../css/style.css";
import "../../css/mediaQuery.css";




function LoginClaim() {

    const claimBtnStyle = {
        color: 'white',
        cursor: 'pointer',
        borderRadius: '10px',
        fontSize: '16px',
        texttTransform: 'capitalize',
        width: '100px',
        backgroundColor: "grey",

       active: { 
        color: 'white',
        cursor: 'pointer',
        borderRadius: '10px',
        fontSize: '16px',
        texttTransform: 'capitalize',
        width: '100px',
        backgroundColor: "#167D7F",
        }
      };

      const hLineStyle = {
        border: '1px solid grey',
        backgroundColor: 'grey',
        width: '100%',

       active: { 
        border: '1px solid #167D7F',
        backgroundColor: '#167D7F',
        width: '100%'
        }
      };

      const loginClaimStyle = {
       active: { 
        color: '#167D7F'
        }
      };

      
    return (
     <div className="login-claim">
      
        <div className="text-center my-2">Login everyday to get free coins!</div>

        <MDBListGroup className="login-claim-list">

            <MDBListGroupItem className="d-flex justify-content-between align-items-center" style={loginClaimStyle.active}>Day 1<span className="w-75" style={hLineStyle.active}></span>
                <div className="ml-2 py-2 flex-center" style={claimBtnStyle.active} >Claimed</div>
            </MDBListGroupItem>

            <MDBListGroupItem className="d-flex justify-content-between align-items-center" style={loginClaimStyle.active}>Day 2<span className="w-75" style={hLineStyle.active}></span>
                <div className="ml-2 py-2 flex-center" style={claimBtnStyle.active}><MDBIcon icon="coins" className="mr-2" style={{color: 'gold'}} />0.5</div>
            </MDBListGroupItem>

            <MDBListGroupItem className="d-flex justify-content-between align-items-center" style={loginClaimStyle}>Day 3<span className="w-75" style={hLineStyle}></span>
                <div className="ml-2 py-2 flex-center" style={claimBtnStyle}><MDBIcon icon="coins" className="mr-2" style={{color: 'gold'}} />0.5</div>
            </MDBListGroupItem>

            <MDBListGroupItem className="d-flex justify-content-between align-items-center" style={loginClaimStyle}>Day 4<span className="w-75" style={hLineStyle}></span>
                <div className="ml-2 py-2 flex-center" style={claimBtnStyle}><MDBIcon icon="coins" className="mr-2" style={{color: 'gold'}} />1.00</div>
            </MDBListGroupItem>
            
            <MDBListGroupItem className="d-flex justify-content-between align-items-center" style={loginClaimStyle}>Day 5<span className="w-75" style={hLineStyle}></span>
                <div className="ml-2 py-2 flex-center" style={claimBtnStyle}><MDBIcon icon="coins" className="mr-2" style={{color: 'gold'}} />2.00</div>
            </MDBListGroupItem>

            <MDBListGroupItem className="d-flex justify-content-between align-items-center" style={loginClaimStyle}>Day 6<span className="w-75" style={hLineStyle}></span>
                <div className="ml-2 py-2 flex-center" style={claimBtnStyle}><MDBIcon icon="coins" className="mr-2" style={{color: 'gold'}} />3.00</div>
            </MDBListGroupItem>

            <MDBListGroupItem className="d-flex justify-content-between align-items-center"style={loginClaimStyle}>Day 7<span className="w-75" style={hLineStyle}></span>
                <div className="ml-2 py-2 flex-center" style={claimBtnStyle}><MDBIcon icon="coins" className="mr-2" style={{color: 'gold'}} />4.00</div>
            </MDBListGroupItem>

        </MDBListGroup>    
    </div>
    );
}

export default LoginClaim;