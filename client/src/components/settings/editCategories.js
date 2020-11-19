import React, {  useState } from 'react';
import { MDBRow, MDBCol, MDBContainer, MDBIcon, MDBBtn } from 'mdbreact';
import MultiSelect from  'react-multiple-select-dropdown-lite';
import { Link }  from 'react-router-dom';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Navbar from '../navbar';

function EditCategories() {
  
  const [value, setvalue] = useState('')

  const  handleOnchange = val => {
  setvalue(val)
  }

  const categories = [
      { value: '1', label: 'Category 1' },
      { value: '2', label: 'Category 2' },
      { value: '3', label: 'Category 3' },
      { value: '4', label: 'Category 4' },
      { value: '5', label: 'Category 5' }
  ];

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
                  <MultiSelect
                    className="w-100 mt-3"
                    onChange={handleOnchange}
                    options={categories}
                    placeholder="Categories"
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


export default EditCategories;
