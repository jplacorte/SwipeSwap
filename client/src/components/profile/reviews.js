import React, { useState, useEffect } from 'react';
import { Link }  from 'react-router-dom';
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
        choosed: true
      },
      {
        tooltip: 'Very Satisfactory'
      },
      {
        tooltip: 'Outstanding'
      }
    ]);
  return (
        <MDBRow className="reviews-container mx-auto px-2 py-3">

          {
            swappedItems.length > 0 ? (swappedItems.map(items => (
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
                    <p>{items.review[0].reviewdetails}</p>
                  </div>    
              </div>
            </MDBCol>
            )))
            :(<h1>No items...</h1>)
          }
            
        </MDBRow>
        

  );
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps, { getSwappedItems })(Reviews);