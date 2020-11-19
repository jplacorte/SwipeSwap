import React, { useState, useEffect } from 'react';
import { MDBCol, MDBRow, MDBRating  } from 'mdbreact';
import { connect } from 'react-redux';
import ItemImg from '../../assets/images/item1.jpg';
import { getSwappedItems } from '../../actions/item';

const Reviews = ({ getSwappedItems, item: { swappedItems, loading } }) => {

    useEffect(() => {
      getSwappedItems()
    }, [getSwappedItems])
    const [basic] = useState([
      {
        tooltip: 'Poor'
      },
      {
        tooltip: 'Unsatisfactory'
      },
      {
        tooltip: 'Satisfactory',
      },
      {
        tooltip: 'Very Satisfactory'
      },
      {
        tooltip: 'Outstanding',
        choosed: true
      }
    ]);
  return (
        <MDBRow className="reviews-container mx-auto px-2 py-3">

          {
            swappedItems.map(items => (
              items.review[0].user ? (
                <MDBCol md="12">
              <div className="reviews">
                  <img src={items.photo[0].url ? items.photo[0].url : ItemImg} className="item-img rounded-circle mr-3" alt="KB" />
                  <div className="reviews-details pt-3">
                    <div className="grey-text">By:<span><a className="profile-link"> {items.review[0].name}</a></span><span className="float-right">03/08/2020</span></div>
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
                    <p>{items.review[0].reviewdetails ? items.review[0].reviewdetails : 'No reviews yet'}</p>
                  </div>    
              </div>
            </MDBCol>) : ("No Items")))
            
          }
            
        </MDBRow>
        

  );
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps, { getSwappedItems })(Reviews);