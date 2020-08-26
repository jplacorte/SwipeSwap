import React from 'react';
import { MDBCol, MDBRow, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import UploadItem from '../../assets/images/upload2.png';

function ItemGallery() {
  const [Item] = [
    {
      img:
        "https://mdbootstrap.com/img/Others/documentation/img%20(151)-mini.jpg",
      title: 'image',
    },
    
  ];

  return (

        // <div className="d-flex bd-highlight example-parent align-content-stretch" style={{ height: '500px' }}>
        //   <div className="bd-highlight col-example item-gallery-image item-grid">
        //       <img src={Item.img}/>
        //   </div>
        //   <div className="bd-highlight col-example item-gallery-image item-grid">
        //       <img src={Item.img}/>
        //   </div>
        //   <div className="bd-highlight col-example item-gallery-image item-grid">
        //       <img src={Item.img}/>
        //   </div>
        // </div>

        <MDBRow className="mx-auto item-gallery-grid-container" style={{ height: '650px' }}>
          <MDBCol size="4" className="p-0 item-gallery-image item-grid">
              <img src={Item.img} alt={Item.title}/>
          </MDBCol>
          <MDBCol size="4" className="p-0 item-gallery-image item-grid">
              <img src={Item.img} alt={Item.title}/>
          </MDBCol>
          <MDBCol size="4" className="p-0 item-gallery-image item-grid">
              <img src={Item.img} alt={Item.title}/>
          </MDBCol>
          <MDBCol size="4" className="p-0 item-gallery-image item-grid">
              <img/>
          </MDBCol>
          <MDBCol size="4" className="p-0 item-gallery-image item-grid">
              <img/>
          </MDBCol>
          <MDBCol size="4" className="p-0 item-gallery-image item-grid">
              <img/>
          </MDBCol>
        </MDBRow>
    

  );
}

export default ItemGallery;