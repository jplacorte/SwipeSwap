import React from 'react';
import ReactDOM from 'react-dom';
import Stepper from 'react-js-stepper';
import { MDBRow, MDBCol, MDBMask, MDBView } from 'mdbreact';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Category2 from "../../assets/images/item6.jpg";
import MapContainer  from './setLocation';
import UploadItem from './uploadItem';

const steps = [{title: 'Stage - 1'}, {title: 'Stage - 2'}, {title: 'Stage - 3'},]

class IntroFormPage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);
  
  constructor(props) {
    super(props);

    this.state = {
        activeStep: 1,
    }
  }

  handleOnClickStepper = (step) => {
    this.setState({activeStep: step});
  }
  
  handleOnClickNext = () => {
    let nextStep = this.state.activeStep + 1;
    this.setState({activeStep: nextStep})
  }
  
  handleOnClickBack = () => {
    let prevStep = this.state.activeStep - 1;
    this.setState({activeStep:prevStep})
  }
  render() {
    return (
      <>
        <div className="intro-form-page">
            <MDBRow>
              <MDBCol md="12">
                <div className="ss-logo-text">SWIPE<span style={{color: "#167D7F"}}>SWAP</span></div>
              </MDBCol>
              <MDBCol className="mx-auto" md="12">
              <Stepper 
                    className="intro-form-stepper"
                    steps={steps} 
                    activeStep={this.state.activeStep}
                    onSelect={this.handleOnClickStepper}
                    showNumber={false}
                />

                <div style={{marginTop: '40px'}}>
                {this.state.activeStep === 1 ? 
                  <div className="intro-form-container text-center px-4">
                    <div className="intro-form-title">Select Categories</div>
                    <div className="inro-form-desc">Select atleast 3 Categories.</div>

                    <MDBRow className="flex-center mx-auto mt-4">
                      <MDBCol className="flex-center category-box" md="3">
                        <input type="checkbox" id="myCheckbox1" />
                        <label for="myCheckbox1">
                          <MDBView className="category-view"><img src={Category2} />
                            <MDBMask className="flex-center" overlay="black-light">
                              <p className="category-name">Category 1</p>
                            </MDBMask>
                          </MDBView>
                        </label>
                      
                      </MDBCol>
                      <MDBCol className="flex-center category-box" md="3">
                        <input type="checkbox" id="myCheckbox2" />
                        <label for="myCheckbox2">
                          <MDBView className="category-view"><img src={Category2} />
                            <MDBMask className="flex-center" overlay="black-light">
                              <p className="category-name">Category 2</p>
                            </MDBMask>
                          </MDBView>
                        </label>
                      
                      </MDBCol>
                      <MDBCol className="flex-center category-box" md="3">
                        <input type="checkbox" id="myCheckbox3" />
                        <label for="myCheckbox3">
                          <MDBView className="category-view"><img src={Category2} />
                            <MDBMask className="flex-center" overlay="black-light">
                              <p className="category-name">Category 3</p>
                            </MDBMask>
                          </MDBView>
                        </label>
                      
                      </MDBCol>
                      <MDBCol className="flex-center category-box" md="3">
                        <input type="checkbox" id="myCheckbox4" />
                        <label for="myCheckbox4">
                          <MDBView className="category-view"><img src={Category2} />
                            <MDBMask className="flex-center" overlay="black-light">
                              <p className="category-name">Category 4</p>
                            </MDBMask>
                          </MDBView>
                        </label>
                      
                      </MDBCol>
                      <MDBCol className="flex-center category-box" md="3">
                        <input type="checkbox" id="myCheckbox5" />
                        <label for="myCheckbox5">
                          <MDBView className="category-view"><img src={Category2} />
                            <MDBMask className="flex-center" overlay="black-light">
                              <p className="category-name">Category 5</p>
                            </MDBMask>
                          </MDBView>
                        </label>
                      
                      </MDBCol>
                      <MDBCol className="flex-center category-box" md="3">
                        <input type="checkbox" id="myCheckbox6" />
                        <label for="myCheckbox6">
                          <MDBView className="category-view"><img src={Category2} />
                            <MDBMask className="flex-center" overlay="black-light">
                              <p className="category-name">Category 6</p>
                            </MDBMask>
                          </MDBView>
                        </label>
                      
                      </MDBCol>
                      <MDBCol className="flex-center category-box" md="3">
                        <input type="checkbox" id="myCheckbox7" />
                        <label for="myCheckbox7">
                          <MDBView className="category-view"><img src={Category2} />
                            <MDBMask className="flex-center" overlay="black-light">
                              <p className="category-name">Category 7</p>
                            </MDBMask>
                          </MDBView>
                        </label>
                      
                      </MDBCol>
                      <MDBCol className="flex-center category-box" md="3">
                        <input type="checkbox" id="myCheckbox8" />
                        <label for="myCheckbox8">
                          <MDBView className="category-view"><img src={Category2} />
                            <MDBMask className="flex-center" overlay="black-light">
                              <p className="category-name">Category 8</p>
                            </MDBMask>
                          </MDBView>
                        </label>
                      
                      </MDBCol>
                    </MDBRow>
                  </div> : 

                 this.state.activeStep === 2 ? 
                  <div className="intro-form-container text-center px-4">
                    <div className="intro-form-title">Set Location</div>
                    <div className="inro-form-desc">Locate your address</div>
                      <MDBRow className="flex-center mx-auto mt-4">
                        <MDBCol md="12">
                          <MapContainer />
                        </MDBCol>
                      </MDBRow>
                  </div> :
                  
                 <div className="intro-form-container text-center px-4">
                   <div className="intro-form-title">Upload Item</div>
                   <div className="inro-form-desc">Upload an Item you want to swap.</div>
                   <MDBRow className="flex-center mx-auto mt-4">
                     <MDBCol md="12">
                       <UploadItem />
                     </MDBCol>
                   </MDBRow>
                 </div>
                }
                </div>
                
                <div className="my-5 text-center px-4">
                    <input className="next-back-btn" type="button" value={this.state.activeStep === steps.length ? 'Finish' : 'Next'} 
                    onClick={this.state.activeStep === steps.length ? null : this.handleOnClickNext}/>
                    {this.state.activeStep ===1 ? '' : <input className="next-back-btn" type="button" value="Back" onClick={this.handleOnClickBack} /> }
                </div>
              </MDBCol>
            </MDBRow>
        </div>
      </>
    );
  }
}

export default IntroFormPage;
