import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './route_util';

class ScrollToTopRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routeType: props.routeType,
      component: props.component,
      path: props.path,
      loggedIn: props.loggedIn,
      exact: props.exact
    };
    this.state.component = props.component;
  }

  componentDidUpdate(prevProps) {
    if (this.props.path === this.props.location.pathname && this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const path = this.state.path;
    const exact = this.state.exact;
    const loggedIn = this.state.loggedIn;
    const component = this.state.component;
    if (this.props.routeType === ProtectedRoute) {
      return (
        <ProtectedRoute path={path} exact={exact} loggedIn={loggedIn} component={component}/>);
    } else if (this.props.routeType === AuthRoute) {
      return (<AuthRoute path={path} exact={exact} loggedIn={loggedIn} component={component}/>);
    }
  }
}

export default withRouter(ScrollToTopRoute);
