import React from 'react';
import { merge } from 'lodash';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class EditProfileForm extends React.Component {
  constructor(props){
    super(props);
    this.state = props.user;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    debugger
    this.setState(newProps.user);
  }

  handleChange(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const copyUser = merge({}, this.state);
    this.props.updateUser(copyUser);
  }

  render() {
    const genderSelect = ["Male", "Female", "Not Specified"];
    const selectOptions = genderSelect.map( (opt, i) => {
      return (<option className={`${opt}-option`} key={i} value={opt}>{opt}</option>)
      });


    return (
      <div className="top-edit-profile-div">
        <div className="edit-profile-container form-div">
          <form className="edit-profile-form" onSubmit={this.handleSubmit}>
            <label>Name
              <input type= "text" onChange={this.handleChange('full_name')} value={this.state.full_name}/>
            </label>
            <label>Username
              <input type= "text" onChange={this.handleChange('username')} value={this.state.username}/>
            </label>
            <label>website
              <input type= "text" onChange={this.handleChange('website')} value={this.state.website}/>
            </label>
            <label>Bio
              <textarea onChange={this.handleChange('bio')} value={this.state.bio}/>
            </label>
            <div className="edit-profile-form-indent">
              <span>Private Information</span>
            </div>
            <label>Email
              <input type= "text" onChange={this.handleChange('email')} value={this.state.email}/>
            </label>
            <label>Phone Number
              <input type= "text" onChange={this.handleChange('phone_number')} value={this.state.phone_number}/>
            </label>
            <label className="gender-label">Gender
              <div className="gender-select">
                <select onChange={this.handleChange('gender')} value={this.state.gender}>
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
    )
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
    gender: ""
  };

  const user = (state.entities.users[ownProps.match.params.userId]) || (dummyUser);
  const usertype = "i dont know why this is here";
  return {
    user,
    currentUser: state.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
    fetchUser: (user) => dispatch(fetchUser)
  };
};

export default withRouter(connect(mapStateToprops, mapDispatchToProps)(EditProfileForm));
