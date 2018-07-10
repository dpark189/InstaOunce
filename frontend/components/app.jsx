import React from "react";
import GreetingContainer from './greeting/greeting_container';
import { HashRouter, Link, Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => {
  return (
    <div>
      <section>
        <h1>InstaOunce</h1>
        <GreetingContainer />
      </section>
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
    </div>
  );
};

export default App;
