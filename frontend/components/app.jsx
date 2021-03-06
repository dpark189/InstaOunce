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
import StoriesContainer from './stories/stories_container';
import NoMatch from './no_match';
import ScrollToTopRoute from '../util/scroll_to_top.jsx';

const App = () => {
  return (
    <div className="top-app-div">
      <ProtectedRoute path="/" component={NavBarContainer}/>
      <ModalContainer />
      <div className="main-app">
        <section className="app-section">
          <section className="session-order">
            <Switch>
              <AuthRoute exact path="/" component={SignupFormContainer} />
              <AuthRoute exact path="/login" component={LoginFormContainer} />
            </Switch>
          </section>
          <div className="app-level-index-div">
            <ScrollToTopRoute routeType={ProtectedRoute} exact path="/" component={PostIndexContainer}/>
            <ProtectedRoute exact path="/" component={StoriesContainer}/>
          </div>

          <ScrollToTopRoute routeType={ProtectedRoute} path="/explore" component={PostExploreContainer}/>
          <ScrollToTopRoute routeType={ProtectedRoute} exact path="/hashtag/:hashtag" component={PostExploreContainer}/>
          <Switch>
            <ProtectedRoute exact path="/users/:userId"
            component={UserProfileContainer}/>
            <ProtectedRoute exact path="/users/:userId/edit"
            component={EditProfileForm}/>
          </Switch>
        </section>
      </div>
    </div>
  );
};

export default App;
