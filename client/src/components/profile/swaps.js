import React from 'react';
import { Link }  from 'react-router-dom';
import { MDBCol, MDBRow, MDBView, MDBMask} from 'mdbreact';

function Swaps() {
  const [Swap] = [
    {
      profilePic:"https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg",
      name: "Sample Name",
      details: "Deal is completed",
      itemImg: "https://mdbootstrap.com/img/Others/documentation/img%20(151)-mini.jpg"
    },
    
  ];

  return (
        <MDBRow className="swaps-container mx-auto px-2 py-3">
            <MDBCol md="12">
                <Link to="./chatScreen">
                <div className="chat">
                    <img src={Swap.profilePic} className="rounded-circle chat-image mr-3" alt="KB" />
                    <div className="chat-details pt-3">
                      <div>{Swap.name}</div>
                      <p style={{color: "#00AF80"}}>{Swap.details}</p>
                    </div>
                    <img src={Swap.itemImg} className="swap-item-img mr-3" alt="SS" />
                </div>
                </Link>
            </MDBCol>
            <MDBCol md="12">
                <Link to="./chatScreen">
                <div className="chat">
                    <img src={Swap.profilePic} className="rounded-circle chat-image mr-3" alt="KB" />
                    <div className="chat-details pt-3">
                      <div>{Swap.name}</div>
                      <p style={{color: "#00AF80"}}>{Swap.details}</p>
                    </div>
                    <img src={Swap.itemImg} className="swap-item-img mr-3" alt="SS" />
                </div>
                </Link>
            </MDBCol>
            <MDBCol md="12">
                <Link to="./chatScreen">
                <div className="chat">
                    <img src={Swap.profilePic} className="rounded-circle chat-image mr-3" alt="KB" />
                    <div className="chat-details pt-3">
                      <div>{Swap.name}</div>
                      <p style={{color: "#00AF80"}}>{Swap.details}</p>
                    </div>
                    <img src={Swap.itemImg} className="swap-item-img mr-3" alt="SS" />
                </div>
                </Link>
            </MDBCol>
        </MDBRow>
        

  );
}

export default Swaps;