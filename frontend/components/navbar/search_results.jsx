import React from 'react';
import UserProfilePic from '../user/user_profile_picture';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { clearSearchResult } from '../../actions/user_actions';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleClick(key) {
    const id = key;
    return (e) => {
      e.preventDefault();
      this.props.history.push(`/users/${id}`);
      this.props.inputRef.value = "";
    };
  }

  handleMouseOut(e) {
    this.props.clearSearchResult();
  }

  render () {
    const searchInput = this.props.inputRef;
    const that = this;
    const users = Object.keys(that.props.users).map( (key, id) => {
      return (
        <div key={id} className="result-user-item small-profile-img" >
          <a onClick={that.handleClick(key)}>
            <UserProfilePic user={that.props.users[key]} key={id}/>
          <span className="result-username">
            {that.props.users[key].username}
          </span>
        </a>
        </div>
      );
    });
    return (
      <section className="result-section" onMouseLeave={that.handleMouseOut}>
        <div className="result-div">
          {users}
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearSearchResult: () => dispatch(clearSearchResult())
  };
};

export default withRouter(connect(null, mapDispatchToProps)(SearchResult));
