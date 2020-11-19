import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBCarouselCaption, MDBRow, MDBCol, MDBAnimation  } from
"mdbreact";
import Slide1 from "../../assets/images/bg1.jpg";
import Slide2 from "../../assets/videos/demo1.mp4";
import SSGadgets from "../../assets/images/tablets1.png";

const LandingCarousel = () => {
  return (
      <MDBCarousel
        activeItem={1}
        length={2}
        showControls={true}
        showIndicators={false}
        interval={false}
        className="z-depth-1 landing-carousel sticky-top"
        fade
      >
        <MDBCarouselInner className="landing-carousel-inner">

          {/* Slide 1 */}
          <MDBCarouselItem itemId="1"className="flex-center">
          <MDBAnimation type="slideInDown">
            <MDBView>
              <img
                className=""
                src={Slide1}
                alt="First slide"
              />
            <MDBMask overlay="black-strong"/>
            </MDBView>
            </MDBAnimation>
            <MDBCarouselCaption className="landing-carousel-caption flex-center">

              <MDBRow className="w-100 mt-5">

                <MDBCol className="p-0 caption-content" size="5">
                  <MDBAnimation className="fast" type="fadeInLeft" delay="1.5s">
                    <div className="black pl-1 caption-content-title">WELCOME TO</div>
                    </MDBAnimation>
                    <MDBAnimation className="fast" type="rollIn" delay="2s">
                    <div className="black pl-1 caption-content-title">SWIPESWAP!</div>
                  </MDBAnimation>
                  
                  <div className="float-left" style={{marginTop: "14px"}}>
                    <MDBAnimation className="faster" type="rotateInDownLeft" delay="4.0s">
                      <div className="black px-1 caption-content-desc">SNAP . SWIPE . SWAP</div>
                    </MDBAnimation>
                    <MDBAnimation className="fast" type="bounceInLeft" delay="4.5s">
                    <div className="white px-1 caption-content-desc black-text">Sample Text Here Sample Text Here</div>
                    </MDBAnimation>
                    <MDBAnimation className="faster" type="fadeInUpBig" delay="5s">
                    <div className="white px-1 caption-content-desc black-text">Sample Text Here</div>
                    </MDBAnimation>
                  </div>  
                </MDBCol>          
          
                <MDBCol size="7" className="p-0 caption-content-img">
                  <MDBAnimation className="faster" type="fadeInRight" delay="3s">
                    <img className="" src={SSGadgets} />
                  </MDBAnimation>
                </MDBCol>

              </MDBRow>

            </MDBCarouselCaption>
          </MDBCarouselItem>

          {/* Slide 2 */}
          <MDBCarouselItem itemId="2">
            <MDBView className="black">
            <div className="landing-carousel-video flex-center mt-2" style={{objectFit: 'contain'}}>
              <video className="mt-4 py-4" src={Slide2} autoPlay>    
              </video>
              </div>
            </MDBView>
          </MDBCarouselItem>

        </MDBCarouselInner>
      </MDBCarousel>
  );
}

export default LandingCarousel;