import React from 'react';
import { merge } from 'lodash';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.post;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImage = this.handleImage.bind(this);
  }

  componentWillReceiveProps(newProps){
    this.state = newProps.post;
  }

  handleChange(field){
    return (e) => {
      this.setState({ [field]: e.target.value, buttonClass: true });
    };
  }

  handleImage(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({photoUrl: reader.result, photoFile: file, buttonStatus: true});
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ photoUrl: "", photoFile: null, buttonStatus: false });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const copy = merge({}, this.state);
    const file = copy.photoFile;
    const formData = new FormData();
    formData.append("post[caption]", copy.caption);
    formData.append("post[author_id]", copy.author_id);
    if (file) {
      formData.append("post[photos]", file);
    }

    this.props.formAction(formData).then(this.props.closeModal()).then(this.props.history.push(`/users/${this.props.currentUserId}`));
  }

  imagePreview() {
  if (this.state.photoUrl !== "") {
    return (
      <div className='post-create-property'>
        <label className='post-create-label'>Image Preview</label>
        <div className='post-preview-container'>
            <img className='post-preview-photo' src={this.state.photoUrl}/>
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
    return (
      <div className="post-form-div">
        <h3 className="post-form-header">Add A Post</h3>
        <form className="post-form" onSubmit={this.handleSubmit}>
          {this.imagePreview()}
           <input className='post-create-input' type='file' onChange={this.handleImage} />
          <textarea
            placeholder="caption"
            value={this.state.caption}
            onChange={this.handleChange('caption')}
          />
          <input className={`post-create-button-${buttonClass}`} type="submit" value="Create Post"/>
        </form>
      </div>
    );
  }
}

export default PostForm;
