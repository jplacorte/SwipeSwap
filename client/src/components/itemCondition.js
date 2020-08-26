import React, { useState } from 'react';
import { MDBRating } from 'mdbreact';

const ItemCondition = () => {
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
      <MDBRating 
         data={basic}
         fillColors={[
            'red-text',
            'orange-text',
            'yellow-text',
            'lime-text',
            'light-green-text'
          ]} 
     />
  );
};

export default ItemCondition;