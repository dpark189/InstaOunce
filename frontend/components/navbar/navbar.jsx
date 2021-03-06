import React from 'react';
import {Link} from 'react-router-dom';
import SearchContainer from './search_container';

export default (props) => {
 return (
      <div>
        <div className="nav-bar-component">
          <nav className="nav-bar">
            <nav className="nav-left">
              <div className="nav-logo-div">
              <Link className="home-link" to="/">
                <img className="nav-bar-logoName" src={window.logoName}/>
              </Link>
            </div>
          </nav>
          <nav className="search-bar-nav">
            <SearchContainer />
          </nav>
          <nav className="nav-right">
            <div className="nav-icon">
              <Link to="/explore">
                <i className="fa fa-compass icon2"></i>
              </Link>
              <i className="fa fa-heart icon2"></i>
              <Link to={`/users/${props.sessionId}`}>
              <i className="fa fa-user icon2 "></i>
              </Link>
              <i onClick={() => props.logout()} className="fas fa-power-off icon2"></i>
            </div>
          </nav>
          </nav>
        </div>
      </div>
    );
};
