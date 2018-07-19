import React from "react";
import GreetingContainer from './greeting/greeting_container';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import UserProfileContainer from './user/user_profile_container';
import NavBarContainer from './navbar/navbar_container';
import EditProfileForm from './user/edit_profile_form';
import PostIndexContainer from './post/post_index_container';
import ModalContainer from './modal/modal_container';
import PostExploreContainer from './explore/post_explore_container';

const App = () => {
  return (
    <div>
      <ProtectedRoute path="/" component={NavBarContainer}/>
      <ModalContainer />
      <section className="app-section">
        <section className="session-order">
          <Switch>
            <AuthRoute exact path="/" component={SignupFormContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
          </Switch>
        </section>
        <ProtectedRoute exact path="/" component={PostIndexContainer}/>
        <ProtectedRoute exact path="/explore" component={PostExploreContainer}/>
        <ProtectedRoute exact path="/explore/:hashtag" component={PostExploreContainer}/>
        <Switch>
          <ProtectedRoute exact path="/users/:userId"
          component={UserProfileContainer}/>
          <ProtectedRoute exact path="/users/:userId/edit"
          component={EditProfileForm}/>
        </Switch>
      </section>
    </div>
  );
};

export default App;
