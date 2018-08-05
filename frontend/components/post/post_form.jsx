import { withRouter } from 'react-router-dom';
import React from 'react';
import { merge } from 'lodash';
import ImageSlide from './image_slide';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.post;
    this.errors = "";
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImage = this.handleImage.bind(this);
  }

  // componentWillReceiveProps(newProps){
  //   this.state = newProps.post;
  // }

  handleChange(field){
    return (e) => {
      this.setState({ [field]: e.target.value, buttonClass: true });
    };
  }

  handleImage(e) {
    const files = Array.from(e.currentTarget.files);
    let valid = true;

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.onload = () => {
        this.setState( prevState => {

          return {
            photoFile: files,
            buttonStatus: true,
            photoUrl: [reader.result, ...prevState.photoUrl]

          };
        });
      };

      if (files[i] && files[i].type.match("image") && files.length <= 10) {
        reader.readAsDataURL(files[i]);
      } else { valid = false; }
    }
    if (!valid) {
      this.setState({ photoUrl: [], photoFile: [], buttonStatus: false });

    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const copy = merge({}, this.state);
    const files = copy.photoFile;
    const formData = new FormData();
    let count = files.length;
    formData.append("post[caption]", copy.caption);
    formData.append("post[author_id]", copy.author_id);
    formData.append("file_count", count);
    if (files) {
      files.map( file =>
      file[0]);
      files.forEach((file, i) => {
        formData.append(`post[photos][${i}]`, file);
      });
      // files.forEach( (file, i) =>
      //   formData.append(`post[photos][${i}]`, file)
      // );
          // formData.append("post[photos]", [files]);
    }

    this.props.formAction(formData).then(
      () => this.props.closeModal(),
      (errors) => {}
    ).then(
      () => this.props.history.push(`/users/${this.props.currentUserId}`)
    );
  }

  imagePreview() {

    if (this.state.photoUrl !== "") {

        return (
          <div className='post-create-property'>
            <label className='post-create-label'>Image Preview</label>
            <div className="preview-images">
              <ImageSlide images={this.state.photoUrl}/>
            </div>
          </div>
        );
    } else {
      return null;
    }
  }

  render () {
    let buttonClass;
    if (this.state.buttonClass) {
      buttonClass = 'enabled';
    } else {
      buttonClass = 'disabled';
    }

    // -------- post errors-------
    const stateErrors = this.props.errors;
    let errors = {
      caption: ""
    };
    if ((Object.keys(this.props.errors) === "undefined") || Object.values(this.props.errors).length === 0) {} else {
      Object.keys(stateErrors).forEach((key) => {
        errors[`${key}`] = stateErrors[key].map((err, i) => {
          let label = key.charAt(0).toUpperCase() + key.slice(1);
          return (
            <span key={key} className="post-errors">
              {`${label} ${err}`}
            </span>
          );
        });
      });
    }
    return (
      <div className="post-form-div">
        <h3 className="post-form-header">Add A Post</h3>
        <form className="post-form" onSubmit={this.handleSubmit}>
          {this.imagePreview()}
           <input className='post-create-input' type='file' onChange={this.handleImage} multiple="multiple"/>
          <textarea
            placeholder="caption"
            value={this.state.caption}
            onChange={this.handleChange('caption')}
          />
          {errors.caption}
          <input className={`post-create-button-${buttonClass}`} type="submit" value="Create Post"/>
        </form>
      </div>
    );
  }
}

export default withRouter(PostForm);
