import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {
 return (
      <div>
        <div className="nav-bar-component">
          <nav className="nav-bar">
            <nav className="nav-left">
              <div className="nav-logo-div">
              <Link to="/">
                <i className="fa fa-instagram icon fa-w-14 fa-5"></i>
                <i className="line">|</i>
              </Link>

              <Link to="/">
                <img className="nav-bar-logoName" src={window.logoName}/>
              </Link>
            </div>

            </nav>

            <span className="nav-icon">

              <i className="fa fa-compass icon2"></i>
              <i className="fa fa-heart icon2"></i>

              <Link to={`/users/${props.sessionId}`}>
              <i className="fa fa-user icon2 "></i>
              </Link>
              <button onClick={() => props.logout()}>temp logout</button>
            </span>
          </nav>
        </div>
      </div>
    );
};
