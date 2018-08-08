import React from 'react';
import UserProfilePic from '../user/user_profile_picture';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { clearSearchResult } from '../../actions/user_actions';

class SearchResult extends React.Component {
  render () {
    const searchInput = this.props.inputRef;
    const users = Object.keys(this.props.users).map( (key, id) => {
      return (
        <div key={id} className="result-user-item small-profile-img">
          <a onClick={(e) => {
            e.preventDefault();
            searchInput.value = "";
            this.props.clearSearchResult();
            this.props.history.push(`/users/${this.props.users[key].id}`);
          }}>
            <UserProfilePic user={this.props.users[key]} key={id}/>
          <span className="result-username">
            {this.props.users[key].username}
          </span>
        </a>
        </div>
      );
    });
    return (
      <section className="result-section">
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
