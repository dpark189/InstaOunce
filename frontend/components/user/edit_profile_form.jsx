import React from 'react';
import { merge } from 'lodash';

class EditProfileForm extends React.Component {
  constructor(props){
    super(props);
    this.state = props.user;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps){
    this.setState(newProps.user);
  }

  handleChange(field){
    return (e) => {
      this.setState({[field]: e.target.value};)
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const copyUser = merge({}, this.state);
    this.props.updateUser(copyUser);
  }

  render() {
    const genderSelectOptions = (
      if (this.state.gender === "Male") {
        return (
          (<option value="Male" selected="selected">Male</option>)
          (<option value="Female">Female</option>)
          (<option value="Not Specified">Not Specified</option>)
        )
      } else if (this.state.gender === "Female") {
          return (
            (<option value="Male">Male</option>)
            (<option value="Female" selected="selected">Female</option>)
            (<option value="Not Specified">Not Specified</option>)
          )
      } else {
        return(
          <option value="Male">Male</option>)
          (<option value="Female">Female</option>)
          (<option value="Not Specified" selected="selected">Not Specified</option>)
        )
      }
    )

    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name
          <input onChange={this.handleChange('full_name')} value={this.state.full_name}/>
        </label>
        <label>Username
          <input onChange={this.handleChange('username')} value={this.state.username}/>
        </label>
        <label>website
          <input onChange={this.handleChange('website')} value={this.state.website}/>
        </label>
        <label>Bio
          <textarea onChange={this.handleChange('bio')} value={this.state.bio}/>
        </label>
        <p>Private Information</p>
        <label>Email
          <textarea onChange={this.handleChange('email')} value={this.state.email}/>
        </label>
        <label>Phone Number
          <textarea onChange={this.handleChange('phone_number')} value={this.state.phone_number}/>
        </label>
        <label>Gender
          <select onChange={this.handleChange('gender')}>
            {genderSelectOptions}
          </select>
        </label>
        <input type="submit">Submit</input>
      </form>
    )
  }
}
