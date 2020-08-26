import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon } from 'mdbreact';
import Select from 'react-select';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Swiper from './swiper';
import Navbar from '../navbar';
import SwipeImage from '../../assets/images/item1.jpg';
import SwipeImage2 from '../../assets/images/item7.jpg';


const items = [
  { value: '1', label: 'Item 1' },
  { value: '2', label: 'Item 2' },
  { value: '3', label: 'Item 3' },
  { value: '4', label: 'Item 4' },
  { value: '5', label: 'Item 5' }
];

const categories = [
  { value: '1', label: 'Category 1' },
  { value: '2', label: 'Category 2' },
  { value: '3', label: 'Category 3' },
  { value: '4', label: 'Category 4' },
  { value: '5', label: 'Category 5' }
];

class HomePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  state = {
    selectedCategories: null,
  };
  handleChange = selectedCategories => {
    this.setState(
      { selectedCategories },
      () => console.log(`Option selected:`, this.state.selectedCategories)
    );
  };

  state = {
    selectedItem: null,
  };
  handleChange = selectedItem => {
    this.setState(
      { selectedItem },
      () => console.log(`Option selected:`, this.state.selectedItem)
    );
  };


  state = {
    modal: false
  }
  
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  
  render() {

    const { selectedOption } = this.state;

    return (
      <>
      <Navbar />
        <div className="homepage">

          {/* Modals */}
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>Select Item</MDBModalHeader>
            <MDBModalBody className="px-4 text-center">
              <img src={SwipeImage} className="item-img-modal mx-auto mb-3" />
              <label className="">Item Name</label>
                <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={items}
              />
              <label className="mt-3">Description</label>
              <textarea type="text" id="" className="form-control" placeholder="Description" />
              <label className="mt-3">Item Categories to Swap</label>
                <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={categories}
                isMulti
              />
            </MDBModalBody>

              <MDBBtn className="confirm-btn color1 mx-auto my-4 py-2 px-5" >Confirm</MDBBtn>

          </MDBModal>

        {/* //Modals */}
          <MDBContainer className="homepage-container">
            <MDBRow>
            <MDBCol lg="6" className="px-4">
              <div className="d-flex bd-highlight example-parent">
                <div className="p-1 flex-fill bd-highlight col-example mb-5">
                  <img src={SwipeImage} className="item-img" />
                </div>
                <div className="px-1 flex-fill bd-highlight col-example my-2 select-item-name">
                  Sample Item Sample Item Sample Item
                </div>
                <div className="flex-fill bd-highlight col-example text-center my-3 select-item">
                  <a className="text-center" onClick={this.toggle} style={{color: "#167D7F", fontSize: '12px'}}>
                    <MDBIcon icon="sync" className="select-item-icon" style={{fontSize: '28px'}} />
                    <div>Select Item</div>
                  </a>
                </div>
              </div>
              <div className="ss-btns-dsk mt-4">
                <MDBBtn className="ss-btn-want p-2" color="success"><MDBIcon icon="heart" /> Want</MDBBtn><br/>
                <MDBBtn className="ss-btn-boring p-2" color="danger"><MDBIcon icon="times" /> Boring</MDBBtn><br/>
                <MDBBtn className="ss-btn-swant p-2" color="primary"><MDBIcon icon="star" /> Super Want</MDBBtn><br/>
                <MDBBtn className="ss-btn-rewind p-2" color="warning"><MDBIcon icon="backward" /> Rewind</MDBBtn><br/>
                <MDBBtn className="ss-btn-boost p-2" color="secondary" ><MDBIcon icon="rocket" /> Boost</MDBBtn><br/>
              </div>

              {/* <Select options={this.options} setValue={this.setValue}/> <br />
              You select "{this.state.value}" */}
            </MDBCol>
              <MDBCol lg="6">
                <div className="swiper mx-auto flex-center">
                  <Swiper />
                </div>
                <div className="ss-btns-m my-3 text-center">
                <MDBBtn className="ss-btn-rewind-m mx-2" color="warning"><MDBIcon icon="backward" size="lg" /></MDBBtn>
                <MDBBtn className="ss-btn-boring-m mx-2" color="danger"><MDBIcon icon="times" size="lg" /></MDBBtn>
                <MDBBtn className="ss-btn-swant-m mx-2" color="primary"><MDBIcon icon="star" size="lg" /></MDBBtn>
                <MDBBtn className="ss-btn-want-m mx-2" color="success"><MDBIcon icon="heart" size="lg" /></MDBBtn>
                  <MDBBtn className="ss-btn-boost-m mx-2" color="secondary"><MDBIcon icon="rocket" size="lg" /></MDBBtn>
                </div>
            </MDBCol>
          </MDBRow>
          </MDBContainer>
        </div>
      </>
    );
  }
}

export default HomePage;
