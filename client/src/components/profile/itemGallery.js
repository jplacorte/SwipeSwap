import React from 'react';
import { MDBCol, MDBRow, MDBView, MDBMask} from 'mdbreact';

function ItemGallery() {
  const [Item] = [
    {
      img:
        "https://mdbootstrap.com/img/Others/documentation/img%20(151)-mini.jpg",
      title: 'image',
    },
    
  ];

  return (

        <MDBRow className="mx-auto item-gallery-container" style={{ height: '650px' }}>
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

          <MDBCol size="12" className="my-3 text-center">
              <div>Swapped Items</div>
          </MDBCol>
          

          {/* Swapped Items */}
          <MDBCol size="4" className="p-0 swapped-item item-grid">
              <img src={Item.img} alt={Item.title}/>
          </MDBCol>

          <MDBCol size="4" className="p-0 swapped-item item-grid">
              <img src={Item.img} alt={Item.title}/>
          </MDBCol>
          <MDBCol size="4" className="p-0 swapped-item item-grid">
              <img src={Item.img} alt={Item.title}/>
          </MDBCol>
        </MDBRow>
        

  );
}

export default ItemGallery;