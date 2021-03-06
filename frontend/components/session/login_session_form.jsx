import React from 'react';
import { merge } from 'lodash';
import { Link, Route } from 'react-router-dom';


class LoginSessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDemo= this.handleDemo.bind(this);
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

  handleDemo(e) {
    e.preventDefault();
    const user = {
      username: "demo_user",
      password: "password"
    };
    this.props.processForm(user);
  }

  render () {
    let topFormComponent;
    let bottomFormComponent;
    let bottomDisclaimer;
    let additionalSignup;

    bottomFormComponent = (
      <div className="session-container bottom-div">
        don't have an Account?<Link to='/'> Sign Up</Link>
      </div>
    );
    const stateErrors = this.props.errors;
    let errors = {
      login: ""
    };
    if (typeof this.props.errors.login === 'undefined') {} else {
      errors.login = (
        <span className="signup-errors">
          {this.props.errors.login}
        </span>
      );

    }

    return (
      <div className="top-session-div login-form-top">
        <div className="session-container-organize">
          <div className="top-session-div">
            <div className="session-container form-div" style={{height: 260}}>
              <img className="signup-logo"
                src={window.logoName}/>
              <form className="session-form" onSubmit={this.handleSubmit}>
                {errors.login}
                <input
                  placeholder="Username"
                  onChange={this.handleChange("username")}
                  value={this.state.username}>
                </input>

                <input
                  placeholder="Password"
                  onChange={this.handleChange("password")}
                  type="password" value={this.state.password}>
                </input>
                <input type="submit" value={this.props.formType}/>
              </form>
              <button className="demo-login" onClick={this.handleDemo}>Demo Login</button>
              <a href="#">Forgot password?</a>
            </div>
          </div>
          {bottomFormComponent}
        </div>
      </div>
    );
  }
}

export default LoginSessionForm;
/* <section className="session-container-section">

</section> */
