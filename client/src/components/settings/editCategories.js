import React from 'react';
import { MDBRow, MDBCol, MDBContainer, MDBIcon, MDBBtn } from 'mdbreact';
import { Link }  from 'react-router-dom';
import Select from 'react-select';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Navbar from '../navbar';

const categories = [
  { value: '1', label: 'Category 1' },
  { value: '2', label: 'Category 2' },
  { value: '3', label: 'Category 3' },
  { value: '4', label: 'Category 4' },
  { value: '5', label: 'Category 5' }
];

class EditCategories extends React.Component {
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

  render() {

    const { selectedOption } = this.state;

    return (
      <>
      <Navbar />
        <div className="edit-categories">
          <MDBContainer className="edit-categories-container">
            <MDBRow className="mx-auto">
                <MDBCol md="12" className="border-bottom pb-3">
                <Link to="/settings" className="float-left" >
                    <MDBIcon icon="angle-left" className="ml-2" style={{fontSize: '32px', color: '#167D7F'}} />
                    </Link>
                    <div className="page-title">Edit Categories</div>
                </MDBCol>
                <MDBCol md="12" className="my-3">
                  <label>Select preferred categories</label>
                <Select
                  className="mt-3"
                  defaultValue={[categories[0], categories[1]]}
                  value={selectedOption}
                  onChange={this.handleChange}
                  options={categories}
                  isMulti  
                />
                </MDBCol>

                <MDBCol size="12" className="text-center">
                <MDBBtn className="confirm-btn color1 my-2 py-2 px-5" >Confirm</MDBBtn>
                </MDBCol>

            </MDBRow>    
          </MDBContainer>
        </div>
      </> 
    );
  }
}

export default EditCategories;
