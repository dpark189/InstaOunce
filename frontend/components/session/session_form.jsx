import React from 'react';
import { merge } from 'lodash';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    this.setState({
      username: "",
      password: ""
    });
    this.props.processForm(user);
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Username
          <input onChange={this.handleChange("username")} value={this.state.username}></input>
        </label>
        <label>Password
          <input onChange={this.handleChange("password")} type="password" value={this.state.password}></input>
        </label>
        <input type="submit" value={this.props.formType}/>
      </form>
    );
  }
}

export default SessionForm;
