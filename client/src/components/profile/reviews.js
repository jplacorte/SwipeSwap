import React, { useState } from 'react';
import { Link }  from 'react-router-dom';
import { MDBCol, MDBRow, MDBRating  } from 'mdbreact';
import ItemImg from '../../assets/images/item1.jpg';

function Reviews() {
    const [basic] = useState([
        {
          tooltip: 'Very Bad'
        },
        {
          tooltip: 'Poor'
        },
        {
          tooltip: 'Ok',
          choosed: true
        },
        {
          tooltip: 'Good'
        },
        {
          tooltip: 'Excellent'
        }
      ]);

  return (
        <MDBRow className="reviews-container mx-auto px-2 py-3">
            <MDBCol md="12">
              <div className="reviews">
                  <img src={ItemImg} className="item-img rounded-circle mr-3" alt="KB" />
                  <div className="reviews-details pt-3">
                    <div className="grey-text">By:<span><a className="profile-link"> SampleName</a></span><span className="float-right">03/08/2020</span></div>
                    <MDBRating 
                    data={basic} 
                    iconFaces 
                    fillColors={[
                      'red-text',
                      'orange-text',
                      'yellow-text',
                      'lime-text',
                      'light-green-text'
                    ]}  
                    iconRegular 
                    />
                    <p>Excellent Item, product is as good as new, trader is responsive.</p>
                  </div>    
              </div>
            </MDBCol>
        </MDBRow>
        

  );
}

export default Reviews;