import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from
"mdbreact";
import SwipeImage from '../../assets/images/item1.jpg';
import SwipeImage2 from '../../assets/images/item7.jpg';

const ImgSlider = () => {
  return (
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1 item-img-slider"
        interval={false}
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={SwipeImage}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={SwipeImage2}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={SwipeImage}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
  );
}

export default ImgSlider;