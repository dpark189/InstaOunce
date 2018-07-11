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
    let topFormComponent;
    let bottomFormComponent;
    let bottomDisclaimer;
    let additionalSignup;
    if (this.props.formType === "Signup") {
      topFormComponent = (
        <p className="sign-up-greeting">Sign Up to see photos and videos from your friends</p>
      )
      bottomDisclaimer = (
        <p className="sign-up-disclaimer">
          By signing up, you agree to our
          <strong> Terms</strong>, <strong> Data Policy</strong> and <strong> Cookies Policy</strong>.
        </p>
      )
      bottomFormComponent = (
        <div className="session-container bottom-div">
          Have an Account?<Link to='/login'> Log in</Link>
        </div>
      )
    }
    //  else {
    //   bottomFormComponent = (
    //     <div className="session-container bottom-div">
    //       don't have an Account?<Link to='/'> Sign Up</Link>
    //     </div>
    //   );
    // }
    return (
      <div className="top-session-div">
        <div className="session-container form-div">
          <span>{topFormComponent}</span>
          <form className="session-form" onSubmit={this.handleSubmit}>
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
          {bottomDisclaimer}
        </div>
        {bottomFormComponent}
      </div>
    );
  }
}

export default LoginSessionForm;
/* <section className="session-container-section">

</section> */
