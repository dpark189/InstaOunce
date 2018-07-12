import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { updateUser, fetchUser } from '../../actions/user_actions';
import { withRouter, Route, Link } from 'react-router-dom';
import EditProfileForm from './edit_profile_form';

class UserProfile extends React.Component {

  componentDidMount(){
    const id = this.props.match.params.userId;
    this.props.fetchUser(id);
  }

  componentWillReceiveProps(nextProps) {
  if (this.props.user.id != nextProps.match.params.userId) {
    this.props.fetchUser(nextProps.match.params.userId);
    }
  }
  // TODO: logic for when to show user edit form or user's page
  render(){

    let userEdit;

    if (this.props.currentUser.id === this.props.user.id){
      userEdit = (
        <Link to={`${this.props.currentUser.id}/edit`}>Edit Profile</Link>
      )
    }
    return(
      <div className="profile-main">
        <div className="user-content">
          <div className="user-info-sub1">
            <h3 className="profile-username">{this.props.user.username}</h3>
            {userEdit}
            <i className="fa fa-cog icon4"></i>
          </div>
          <div className="user-info-sub2">
            <h4 className="user-info">posts</h4>
            <h4 className="user-info">followers</h4>
            <h4 className="user-info">following</h4>
          </div>
          <div className="user-info-sub3">
            <h4 className="user-name">{this.props.user.full_name}</h4>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToprops = (state, ownProps) => {

  const dummyUser = {
    full_name: "",
    username: "",
    website: "",
    bio: "",
    email: "",
    phone_number: "",
    gender: ""
  };

  const user = (state.entities.users[ownProps.match.params.userId]) || (dummyUser);
  const usertype = "i dont know why this is here";
  return {
    user,
    currentUser: state.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
    fetchUser: (user) => dispatch(fetchUser)
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(UserProfile);
