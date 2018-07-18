import React from 'react';
import {Link} from 'react-router-dom';

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
          <nav className="nav-right">
            <div className="nav-icon">
              <Link to="/explore">
                <i className="fa fa-compass icon2"></i>
              </Link>
              <i className="fa fa-heart icon2"></i>

              <Link to={`/users/${props.sessionId}`}>
              <i className="fa fa-user icon2 "></i>
              </Link>
              <button onClick={() => props.logout()}>temp logout</button>
            </div>
          </nav>
          </nav>
        </div>
      </div>
    );
};
