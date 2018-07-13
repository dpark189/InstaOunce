import React from 'react';
import { merge } from 'lodash';
import { Link, Route } from 'react-router-dom';
import SignupImage from './signup_image';


class SignupSessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      email: "",
      full_name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  renderSessionErrors(){

  return (
    <ul className='session-errors'>
      {Object.values(this.props.errors).map((error, idx) => {
        return (
          <li key={`error-${idx}`}>
            {`${error}!`}
          </li>
        );
      })}
    </ul>
  );
}

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);

    this.setState({
      username: "",
      password: "",
      email: "",
      full_name: ""
    });
    this.props.processForm(user);
  }

  placeholderErrorCheck(field) {
    if (this.props.errors.session[field.toLowerCase()]) {
      return `${field} error`;
    } else {
      return `${field}`;
    }
  }

  render () {

    const topFormComponent = (
      <p className="sign-up-greeting">Sign Up to see photos and videos from your friends</p>
    );
    const bottomDisclaimer = (
      <p className="sign-up-disclaimer">
        By signing up, you agree to our
        <strong> Terms</strong>, <strong> Data Policy</strong> and <strong> Cookies Policy</strong>.
      </p>
    );
    const bottomFormComponent = (
      <div className="session-container bottom-div">
        Have an Account?<Link to='/login'> Log in</Link>
      </div>
    );
    const stateErrors = this.props.errors;
    let errors = {
            email: "",
            full_name: "",
            username: "",
            password: ""
          };
    if (Object.values(this.props.errors).length === 0) {} else {
      Object.keys(stateErrors).forEach((key) => {

        errors[`${key}`] = stateErrors[key].map((err, i) => {
          return (
            <span key={`${key}${i}`} className="signup-errors">{err}</span>
          );
        });
      });
    }

    // <span className="sign-up-errors">{stateErrors[`${key}`]}</span>

    return (
      <div className="top-session-div signup-form-top">
        <div className="signup-image"
          style={{backgroundImage: "url(" + window.signup_phone_pic + ")"}}>
          <SignupImage />
        </div>
        <div className="session-container-organize">
          <div className="session-container form-div">
            <img className="signup-logo"
              src={window.logoName}/>
              <span>{topFormComponent}</span>
              <form className="session-form" onSubmit={this.handleSubmit}>
                <input
                  placeholder="Email"
                  onChange={this.handleChange("email")}
                  value={this.state.email}>
                </input>

                {errors["email"]}

                <input
                  placeholder="Full_Name"
                  onChange={this.handleChange("full_name")}
                  value={this.state.fullName}>
                </input>

                {errors["full_name"]}

                <input
                  placeholder="Username"
                  onChange={this.handleChange("username")}
                  value={this.state.username}>
                </input>

                {errors["username"]}

                <input
                  placeholder="Password"
                  onChange={this.handleChange("password")}
                  type="password" value={this.state.password}>
                </input>

                {errors["password"]}

                <input type="submit" value={this.props.formType}/>
              </form>
              {bottomDisclaimer}
            </div>
            {bottomFormComponent}
        </div>
      </div>
    );
  }
}

export default SignupSessionForm;
/* <section className="session-container-section">

</section> */
