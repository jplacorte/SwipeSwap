import React from 'react';
import Select from 'react-select';
import "../../css/style.css";
import "../../css/mediaQuery.css";

const categories = [
  { value: '1', label: 'Category 1' },
  { value: '2', label: 'Category 2' },
  { value: '3', label: 'Category 3' },
  { value: '4', label: 'Category 4' },
  { value: '5', label: 'Category 5' }
];

const conditions = [
  { value: '1', label: 'Very Bad' },
  { value: '2', label: 'Poor' },
  { value: '3', label: 'Ok' },
  { value: '4', label: 'Good' },
  { value: '5', label: 'Excellent' }
];

class UploadItem extends React.Component {
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

  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {

    const { selectedOption } = this.state;

    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img className="image-preview" src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent flex-center">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          
        <div className="imgPreview">
          {$imagePreview}
        </div>
          <input className="upload-item-input mx-auto" 
            type="file" 
            onChange={(e)=>this._handleImageChange(e)} /><br/>
          <button className="submitButton" 
            type="submit" 
            onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
            <input type="text" id="" className="form-control mt-5" placeholder="Item Name" />
            <input type="text" id="" className="form-control mt-3" placeholder="Description" />
            <Select
              className="mt-3"
              defaultValue={[categories[0], categories[1]]}
              value={selectedOption}
              onChange={this.handleChange}
              options={categories}
              isMulti
            />
            <Select
              className="mt-3"
              defaultValue={[conditions[0]]}
              value={selectedOption}
              onChange={this.handleChange}
              options={conditions}
            />
            <input type="text" id="" className="form-control mt-3" placeholder="Perceived Value" />
        </form>
      </div>
    )
  }
}

export default UploadItem;
