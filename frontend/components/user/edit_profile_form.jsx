import React from 'react';
import { merge } from 'lodash';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';

class EditProfileForm extends React.Component {
  constructor(props){
    super(props);
    this.state = props.user;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImage = this.handleImage.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.user);
  }

  handleChange(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleImage(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({profile_pictureUrl: reader.result, profile_pictureFile: file, buttonStatus: true});
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ profile_pictureUrl: "", profile_pictureUrlFile: null, buttonStatus: false });
    }
  }

  imagePreview() {
  if (this.state.profile_pictureUrl !== "") {
    return (
      <div className='post-create-property'>
        <label className='post-create-label'>Image Preview</label>
        <div className='post-preview-container'>
          <img className='post-preview-photo' src={this.state.profile_pictureUrl}/>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

  handleSubmit(e) {
    e.preventDefault();
    const copyUser = merge({}, this.state);
    const file = copyUser.profile_pictureFile;
    const userId = copyUser.id;
    const formData = new FormData();
    formData.append("user[id]", copyUser.id);
    formData.append("user[full_name]", copyUser.full_name);
    formData.append("user[username]", copyUser.username);
    formData.append("user[website]", copyUser.website);
    formData.append("user[bio]", copyUser.bio);
    formData.append("user[email]", copyUser.email);
    formData.append("user[phone_number]", copyUser.phone_number);
    formData.append("user[gender]", copyUser.gender);
    if (file) {
      formData.append("user[profile_picture]", file);
    }

    this.props.updateUser(userId, formData).then(this.props.history.push(`/users/${this.props.currentUserId}`));
  }

  render() {
    const genderSelect = ["Male", "Female", "Not Specified"];
    const selectOptions = genderSelect.map( (opt, i) => {
      return (
        <option className={`${opt}-option`} key={i} value={opt}>{opt}</option>)
      });

    const fileName = this.state.profile_pictureFile || "";

    return (
      <div className="top-edit-profile-div">
        <div className="edit-profile-container form-div">
          <form className="edit-profile-form" onSubmit={this.handleSubmit}>
              {this.imagePreview()}
             <input className='post-create-input' type='file' onChange={this.handleImage} value=""/>
            <label>Name
              <input type= "text" onChange={this.handleChange('full_name')} value={this.state.full_name || ""}/>
            </label>
            <label>Username
              <input type= "text" onChange={this.handleChange('username')} value={this.state.username || ""}/>
            </label>
            <label>website
              <input type= "text" onChange={this.handleChange('website')} value={this.state.website || ""}/>
            </label>
            <label>Bio
              <textarea onChange={this.handleChange('bio')} value={this.state.bio || ""}/>
            </label>
            <div className="edit-profile-form-indent">
              <span>Private Information</span>
            </div>
            <label>Email
              <input type= "text" onChange={this.handleChange('email')} value={this.state.email || ""}/>
            </label>
            <label>Phone Number
              <input type= "text" onChange={this.handleChange('phone_number')} value={this.state.phone_number || ""}/>
            </label>
            <label className="gender-label">Gender
              <div className="gender-select">
                <select onChange={this.handleChange('gender')} value={this.state.gender || ""}>
                  {selectOptions}
                </select>
              </div>
            </label>
            <div className="edit-profile-form-indent">
              <input type="submit" value="Submit"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToprops = (state, ownProps) => {

  const dummyUser = {
    full_name: "",
    username: "",
    website: "",
    bio: "",
    email: "",
    phone_number: "",
    gender: "",
    profile_pictureUrl: ""
  };

  const user = (state.entities.users[ownProps.match.params.userId]) || (dummyUser);

  return {
    user,
    currentUser: state.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (userId, formData) => dispatch(updateUser(userId, formData)),
    fetchUser: (user) => dispatch(fetchUser)
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(EditProfileForm);
