import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
  const sessionLinks = () => (
    <nav className="sign-up-nav">
      Have an Account? <span> </span><Link to='/login'>Log in</Link>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Greetings {props.currentUser.username}!</h2>
      <button className="header-button" onClick={props.logout}>Log Out</button>
    </hgroup>
  );
  if (props.currentUser) {
    return personalGreeting()
  } else {
    return ""
  }
};


export default Greeting;
