import React, {useState} from 'react';
import { MDBCol, MDBRow, MDBView, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBBtn, MDBMask, MDBIcon, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBAnimation } from "mdbreact";
import { Link }  from 'react-router-dom';
import NavbarLanding from './navbar';
import LandingNavbar from './navbar';
import LandingCarousel from './carousel';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Slide1 from '../../assets/images/1.jpg';
import Slide2 from '../../assets/images/2.jpg';
import Slide3 from '../../assets/images/3.jpg';
import Slide4 from '../../assets/images/bg6.jpg';
import MSlide1 from '../../assets/images/slide1.png';
import MSlide2 from '../../assets/images/slide2.png';
import MSlide3 from '../../assets/images/slide3.png';
import Items1 from "../../assets/images/bg8.jpg";
import Items2 from "../../assets/images/bg7.jpg";
import Items3 from "../../assets/images/bg9.jpg";
import Items4 from "../../assets/images/bg10.jpg";
import Footer from "../../assets/images/bg1.jpg";
import Swipe from "../../assets/icons/1.png";
import Swap from "../../assets/icons/2.png";
import Facebook from '../Facebook';


function LandingPage() {

  const [showModal, setShowModal] = useState(true);
  const handleClose = () => setShowModal(false);

    return (
        <div>
          <MDBModal className="" isOpen={showModal} toggle={handleClose} backdrop={true} centered>
              <MDBModalHeader toggle={handleClose} className="cta-login-modal-header"></MDBModalHeader>
                <MDBModalBody className="cta-login-modal-body text-center">
                <MDBRow className="mx-auto">
                <MDBCol size="12" className="mx-auto text-center">
                 
                    <img src={Swipe} className="ss-logo-modal swipe" />
                    <img src={Swap} className="ss-logo-modal swap" />
            
                </MDBCol>
                <MDBCol size="12" className="my-5">
                  <Facebook/>
                </MDBCol>
               

                 </MDBRow>
                </MDBModalBody>    
          </MDBModal>
   
            <LandingNavbar/>
            <div className="mb-5" id="home"><LandingCarousel/></div>
            
            {/* SECTION 1 */}
            <div className="section-1 mb-5" id="about">
                <MDBRow className="mx-auto text-center">
                    <MDBCol className="p-0" size="12">
                        <div className="landing-title px-2">
                            We Make Bartering a Breeze!
                            <div className="landing-title-desc px-2">“Snap, Swipe, Swap (Send!) !</div>
                        </div>
                    </MDBCol>
                    <MDBCol size="12" className="landing-desc p-0 text-center mt-2 mb-3">
                      Swipe Swap is so simple and satisfying, a toddler could do a swap! Get to SwipeSwapping with our simple 4 step process.
                    </MDBCol>
                    <MDBCol className="p-0" size="12">
                    <MDBCarousel
                        activeItem={1}
                        length={3}
                        showControls={false}
                        showIndicators={true}
                        interval={5000}
                        className="z-depth-1 section-1-carousel mb-3"
                        slide
                    >
                    <MDBCarouselInner className="section-1-carousel-inner">
                        <MDBCarouselItem itemId="1">
                        <MDBView>
                           <img
                             className="w-100"
                             src={Slide1}
                             alt="First slide"
                           />
                         </MDBView>
                       </MDBCarouselItem>
                       <MDBCarouselItem itemId="2">
                        <MDBView>
                           <img
                             className="w-100"
                             src={Slide2}
                             alt="Second slide"
                           />
                         </MDBView>
                       </MDBCarouselItem>
                       <MDBCarouselItem itemId="3">
                        <MDBView>
                           <img
                             className="w-100"
                             src={Slide3}
                             alt="Third slide"
                           />
                         </MDBView>
                       </MDBCarouselItem>
                    </MDBCarouselInner>
                  </MDBCarousel>
              </MDBCol>
              <MDBCol className="px-0 pr-5 text-left my-2" md="6">
                <div className="section-1-title">Snap!</div>
                <div className="section-1-desc">Snap a photo of your item, make a short description, assign categories and a value,  and upload it to your inventory!</div>
              </MDBCol>
              <MDBCol className="px-0 text-left pr-5 my-2" md="6">
                <div className="section-1-title">Swipe!</div>
                <div className="section-1-desc">Swipe through a specially curated feed just like a dating app and find the perfect match to trade with ! Swipe left to pass, and swipe right to swap!</div>
              </MDBCol>
              <MDBCol className="px-0 text-left pr-5 my-2" md="6">
                <div className="section-1-title">Swap!</div>
                <div className="section-1-desc">Match with someone, start a chat, and agree to swap items! A combination of items can be offered or countered in a single swap to sweeten the deal, which enables a greater range of  flexibility on offers. The possibilities of securing trades are endless and super fun!</div>
              </MDBCol>
              <MDBCol className="px-0 text-left pr-5 my-2" md="6">
                <div className="section-1-title">Send!/Meet up!</div>
                <div className="section-1-desc">Agree to send your traded items with quick links to delivery apps, or decide to meet up in person!</div>
              </MDBCol>
              <MDBCol className="section-1-btn-container p-0 mt-4" size="12">
                <Link to="login">
                  <MDBBtn className="section-1-btn w-100 m-0">SNAP, SWIPE & SWAP NOW!</MDBBtn>
                </Link>
              </MDBCol>
            </MDBRow>
            </div>

            {/* SECTION 2 */}
            <div className="section-2 mb-5">
             <MDBRow className="mx-auto">
               <MDBCol className="p-0" size="12">
                <MDBView>
                  <img
                  src={Slide4}
                  className="img-fluid"
                  alt=""
                />
                <MDBMask className="flex-center" overlay="black-strong">
                <div className="device flex-center">
	                <div className="device-content">				
                    <MDBCarousel 
                        className="mobile-slider"
                        activeItem={1}
                        length={3}
                        showControls={false}
                        showIndicators={false}
                        interval={4000}
                        className="z-depth-0"
                        slide
                    >
                    <MDBCarouselInner className="section-2-carousel-inner">
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                           <img
                             className=""
                             src={MSlide1}
                             alt="First slide"
                           />
                         </MDBView>
                       </MDBCarouselItem>
                       <MDBCarouselItem itemId="2">
                        <MDBView>
                           <img
                             className=""
                             src={MSlide2}
                             alt="Third slide"
                           />
                         </MDBView>
                       </MDBCarouselItem>
                       <MDBCarouselItem itemId="3">
                        <MDBView>
                           <img
                             className=""
                             src={MSlide3}
                             alt="Fourth slide"
                           />
                         </MDBView>
                       </MDBCarouselItem> 
                    </MDBCarouselInner>
                    </MDBCarousel>
                </div>
               </div>
                </MDBMask>
                </MDBView>
               </MDBCol>
             </MDBRow>
            </div>

            {/* SECTION 3 */}
            <div className="section-3 mb-5" id="features">
              <MDBRow className="mx-auto text-center">
                <MDBCol className="p-0" size="12">
                  <div className="landing-title px-2">
                    WHAT MAKES US DIFFERENT
                      <div className="landing-title-desc px-2">Some text here</div>
                  </div>
                </MDBCol>
                <MDBCol size="12" className="landing-desc p-0 text-center mt-2 mb-4">                   
                  Although we may seem like a normal trading app, we stand out as the best and most trusted one out there, and here's why! 
                </MDBCol>
                <MDBCol className="section-3-item p-3 my-3" md="4">
                  <MDBIcon className="mb-3" icon="handshake" />
                  <div className="section-3-title mb-2">Swap items that interest both parties!</div>
                  <div className="section-3-desc">Select categories to filter your preferences, then find exactly what you want with our advanced 2-way filtering system that only makes you see items that interest you. All items that show up on your feed are also looking for the items you are offering, so both parties in the swipe zone will always be mutually interested.</div>
                </MDBCol>
                <MDBCol className="section-3-item p-3 my-3" md="4">
                  <MDBIcon className="mb-3" icon="search" />
                  <div className="section-3-title mb-2">Search for items in the Marketplace!</div>
                  <div className="section-3-desc">Aside from a personalized curated feed in the Swipe Zone, browse the Marketplace for a more open-ended trading experience! Filter your preferences by category, estimated value, or proximity/distance! Scour the world of SwipeSwap for that perfect steal!</div>
                </MDBCol>
                <MDBCol className="section-3-item p-3 my-3" md="4">
                  <MDBIcon className="mb-3" icon="forward" />
                  <div className="section-3-title mb-2">Fast and easy to set up!</div>
                  <div className="section-3-desc">Upload your items and assign categories and an estimated value in the blink of an eye! Fill up your inventory for the public to peruse, post more items to be featured!</div>
                </MDBCol>
                <MDBCol className="section-3-item p-3 my-3" md="4">
                  <MDBIcon className="mb-3" icon="times" />
                  <div className="section-3-title mb-2">Bye bye bogus barters!</div>
                  <div className="section-3-desc">Rate your Swap experience and establish trust through your SwipeSwap Profile Rating! Every Swap gives you an opportunity to rate and review the other person and give them stars according to your Swap experience! Bogus fake item? Give them a single star and write a detailed review that can be seen publicly on their profiles. Fast, friendly and authentic? Give them 5 stars to show the community how much they can be trusted! Earn badges and achievements to boast on your profile and establish yourself in the SwipeSwap community! Say goodbye to fakes and counterfeits with the SwipeSwap Rating System!</div>
                </MDBCol>
                <MDBCol className="section-3-item p-3 my-3" md="4">
                  <MDBIcon className="mb-3" icon="globe-americas" />
                  <div className="section-3-title mb-2">Save the Earth while you're at it!</div>
                  <div className="section-3-desc">Save the Earth through reducing your carbon footprint, all you have to do is trade! Every item traded is less waste towards our landfills and precious oceans. Swipe Swap advocates for a greener world, and by trading, two people can contribute and invest in mother earth. Start a community-centered, self-sustaining culture by doing your first trade today.</div>
                </MDBCol>
                <MDBCol className="section-3-item p-3 my-3" md="4">
                  <MDBIcon className="mb-3" icon="tools" />
                  <div className="section-3-title mb-2">Sample Text</div>
                  <div className="section-3-desc">Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here</div>
                </MDBCol>
              </MDBRow>
              </div>

              {/* SECTION 4 */}
              <div className="section-4 mb-5">
                <MDBCarousel
                  activeItem={1}
                  length={4}
                  showControls={false}
                  showIndicators={false}
                  interval={3000}
                  className="z-depth-1 section-4-carousel"
                >
                <MDBCarouselInner className="section-4-carousel-inner">
                  <MDBCarouselItem itemId="1">
                    <MDBView>
                      <img
                        className=""
                        src={Items1}
                        alt="First slide"
                      />
                    <MDBMask className="flex-center text-center" overlay="black-strong">
                      <p className="section-4-desc">Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here</p>
                    </MDBMask>
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView>
                      <img
                        className=""
                        src={Items2}
                        alt="Second slide"
                      />
                    <MDBMask className="flex-center text-center" overlay="black-strong">
                      <p className="section-4-desc">Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here</p>
                    </MDBMask>
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <MDBView>
                      <img
                        className=""
                        src={Items3}
                        alt="Third slide"
                      />
                    <MDBMask className="flex-center text-center" overlay="black-strong">
                      <p className="section-4-desc">Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here</p>
                    </MDBMask>
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="4">
                    <MDBView>
                      <img
                        className=""
                        src={Items4}
                        alt="Fourth slide"
                      />
                    <MDBMask className="flex-center text-center" overlay="black-strong">
                      <p className="section-4-desc">Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here Some text here</p>
                    </MDBMask>
                    </MDBView>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
              </div>

              {/* SECTION 5 */}
              <div className="section-5" id="reviews">
                <MDBRow className="mx-auto text-center">
                  <MDBCol className="p-0" size="12">
                    <div className="landing-title px-2">
                      Reviews
                        <div className="landing-title-desc px-2">By some cool people</div>
                    </div>
                  </MDBCol>
                  <MDBCol size="12" className="landing-desc p-0 text-center mt-2 mb-4">
                    The community has some good things to say about us, you too can take part in telling us what you think about SwipeSwap! Don't worry, we take criticism well and use it to build a better platform for all our users. Here’s what some of our satisfied users have to say:
                  </MDBCol>

                  <MDBCol className="mb-4" lg="3">
                  <MDBCard className="section-5-card">
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" waves />
                    <MDBCardBody className="text-center" style={{marginTop: "-2%"}}>
                      <MDBCardTitle>
                        <div className="section-5-card-title">Card title</div>
                        <div className="my-2" style={{fontSize: '14px', fontStyle: 'italic'}}>Sample Text</div>     
                      </MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                  </MDBCol>
                  <MDBCol className="mb-4" lg="3">
                  <MDBCard className="section-5-card">
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" waves />
                    <MDBCardBody className="text-center" style={{marginTop: "-2%"}}>
                      <MDBCardTitle>
                        <div className="section-5-card-title">Card title</div>
                        <div className="my-2" style={{fontSize: '14px', fontStyle: 'italic'}}>Sample Text</div>     
                      </MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                  </MDBCol>
                  <MDBCol className="mb-4" lg="3">
                  <MDBCard className="section-5-card">
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/men.jpg" waves />
                    <MDBCardBody className="text-center" style={{marginTop: "-2%"}}>
                      <MDBCardTitle>
                        <div className="section-5-card-title">Card title</div>
                        <div className="my-2" style={{fontSize: '14px', fontStyle: 'italic'}}>Sample Text</div>     
                      </MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                  </MDBCol>
                  <MDBCol className="mb-4" lg="3">
                  <MDBCard className="section-5-card">
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg" waves />
                    <MDBCardBody className="text-center" style={{marginTop: "-2%"}}>
                      <MDBCardTitle>
                        <div className="section-5-card-title">Card title</div>
                        <div className="my-2" style={{fontSize: '14px', fontStyle: 'italic'}}>Sample Text</div>     
                      </MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                  </MDBCol>
                </MDBRow>
              </div>

              {/* FOOTER */}
              <div className="ss-footer mx-auto" id="contact">
                  <MDBView className="mx-auto">
                    <img
                      className="w-100"
                      src={Footer}
                    />
                <MDBMask className="ss-footer-mask" overlay="black-strong">
                  <div className="ss-footer-title text-center p-2">STAY CONNECTED!</div>
                  <div className="ss-footer-desc flex-center">
                  <div className="d-flex bd-highlight example-parent mx-auto">

                  <div className="flex-fill bd-highlight col-example footer-icon-container mx-3">  
                    <div className="footer-icon">
                      <MDBIcon className="flex-center" fab icon="twitter" />
                    </div> 
                  </div>

                  <div className="flex-fill bd-highlight col-example footer-icon-container mx-3">  
                    <div className="footer-icon">
                      <MDBIcon className="flex-center" fab icon="instagram" />
                    </div> 
                  </div>

                  <div className="flex-fill bd-highlight col-example footer-icon-container mx-3">  
                    <div className="footer-icon">
                      <MDBIcon className="flex-center" fab icon="facebook-f" />
                    </div> 
                  </div>

                  <div className="flex-fill bd-highlight col-example footer-icon-container mx-3">  
                    <div className="footer-icon">
                      <MDBIcon className="flex-center" fab icon="google-plus-g" />
                    </div> 
                  </div>
                  </div>
                  </div>
              
                  </MDBMask>
              </MDBView>
                <div className="footer-copyright text-center py-3 black white-text">
                  <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com" style={{color: "#167D7F"}}> SwipeSwap.me </a>
                  </MDBContainer>
                </div>
              </div>

        </div>
    )
}

export default LandingPage;
