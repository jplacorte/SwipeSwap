import React from 'react';
import ImageUploader from 'react-images-upload';
import Select from 'react-select';
import { MDBIcon, MDBRow, MDBCol, MDBModal, MDBModalHeader, MDBModalBody, MDBBtn, MDBAnimation } from 'mdbreact';
import { Link }  from 'react-router-dom';
import { Container, Button } from 'react-floating-action-button';
import "../../css/style.css";
import "../../css/mediaQuery.css";

const categories = [
  { value: '1', label: 'Health & Beauty' },
  { value: '2', label: 'Appliances' },
  { value: '3', label: 'Sports & Recreation' },
  { value: '4', label: 'Fashion & Accessories' },
  { value: '5', label: 'Children Prodcuts' },
  { value: '6', label: 'Computers & Games' },
  { value: '7', label: 'Electronics' }
];

const conditions = [
  { value: '1', label: 'Very Bad' },
  { value: '2', label: 'Poor' },
  { value: '3', label: 'Ok' },
  { value: '4', label: 'Good' },
  { value: '5', label: 'Excellent' }
];

const [Item] = [
    {
      img:
        "https://mdbootstrap.com/img/Others/documentation/img%20(151)-mini.jpg",
      title: 'image',
    },
    
  ];

class ItemGallery extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  state = {
    modal: false
  }
  
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  constructor(props) {
    super(props);
     this.state = { pictures: [] };
     this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
      this.setState({
          pictures: this.state.pictures.concat(picture),
      });
  }

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
      selectedConditions: null,
    };
    handleChange = selectedConditions => {
      this.setState(
        { selectedConditions },
        () => console.log(`Option selected:`, this.state.selectedConditions)
      );
    };

  render() {

    const { selectedOption } = this.state;

    return (
      <>
      {/* Modals */}

      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>Add Item</MDBModalHeader>
        <MDBModalBody className="px-4">
          <form>
          <ImageUploader
            className="item-imgs"
            withIcon={false}
            buttonText='Choose images (Max. 4)'
            onChange={this.onDrop}
            imgExtension={['.jpg', '.gif', '.png', '.gif', 'webp', 'jpeg']}
            maxFileSize={5242880}
            withPreview={true}
            />
            <input type="text" id="" className="form-control mt-3" placeholder="Item Name" />
            <textarea type="text" id="" className="form-control mt-3" placeholder="Description" />
            <Select
              className="mt-3"
              placeholder="Select Category"
              value={selectedOption}
              onChange={this.handleChange}
              options={categories}
              isMulti  
            />
            <Select
              className="mt-3"
              placeholder="Select Condition"
              value={selectedOption}
              onChange={this.handleChange}
              options={conditions}
            />
            </form>
        </MDBModalBody>
        <MDBBtn className="confirm-btn color1 mx-auto my-4 py-2 px-5" >Confirm</MDBBtn>
        
      </MDBModal>

      {/* //Modals */}

      <MDBRow className="mx-auto item-gallery-container" style={{ height: '650px' }}>
          <MDBCol size="4" className="p-0 item-gallery-image item-grid">
            <Link to="/itemDetails">
              <img src={Item.img} alt={Item.title}/>
            </Link>
          </MDBCol>
          <MDBCol size="4" className="p-0 item-gallery-image item-grid">
              <img onClick={() => alert('Purchase Slot to Add an Item!')} />
          </MDBCol>

          <MDBCol size="12" className="my-3 text-center">
              <div>Swapped Items</div>
          </MDBCol>
          

          {/* Swapped Items */}
          <MDBCol size="4" className="p-0 swapped-item item-grid">
              <img src={Item.img} alt={Item.title}/>
          </MDBCol>

          <MDBCol size="4" className="p-0 swapped-item item-grid">
              <img src={Item.img} alt={Item.title}/>
          </MDBCol>
          <MDBCol size="4" className="p-0 swapped-item item-grid">
              <img src={Item.img} alt={Item.title}/>
          </MDBCol>

          
          
          <Container className="add-item-container">
          <MDBAnimation type="zoomIn" className="fast">
          <MDBAnimation type="heartBeat" className="slower" delay="1s" infinite>
            <Button
                className="add-item-btn"
                tooltip="Add Item"
                icon="fas fa-plus"
                onClick={this.toggle}
               />
               </MDBAnimation>
               </MDBAnimation>
          </Container>
          

        </MDBRow>
      </> 
    );
  }
}

export default ItemGallery;
