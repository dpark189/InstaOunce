import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { updateUser, fetchUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter, Route, Link } from 'react-router-dom';
import EditProfileForm from './edit_profile_form';
import UserProfilePicture from './user_profile_picture';
import PostIndexItem from '../post/post_index_item';
import { compact } from 'lodash';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.user.username
    };
  }

  componentDidMount(){
    debugger
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
        <div className="user-info-sub-1-links">
          <div className="profile-buttons">
              <Link to={`${this.props.currentUser.id}/edit`}>
              <button className="edit-profile button">Edit Profile</button>
              </Link>
              <button
              className="edit-profile button"
              onClick={() => this.props.openModal('createPost')}
              >
                Create Post
              </button>
          </div>
          <i className="fas fa-cog icon4"></i>
        </div>
      );
    } else {
      userEdit = (
        <div className="user-info-sub-1-links">
          <div className="profile-buttons">
              <button className="edit-profile button">Follow</button>
          </div>
          <i className="fas fa-ellipsis-h icon4"></i>
        </div>
      );
    }

    const postItems = Object.keys(this.props.userPosts).reverse().map( (key) => {

      return (
        <PostIndexItem
          post={this.props.userPosts[key]}
          author={this.props.user}
          key={key}
        />
      );
    });
    return(
      <div className="profile-page">
        <div className="profile-header">
          <UserProfilePicture fetchUser={this.props.fetchUser} user={this.props.user} />
          <div className="user-content">
            <div className="user-info-sub1">
              <h3 className="profile-username">{this.props.user.username}</h3>
              {userEdit}
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
        {postItems}
      </div>
    );
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
  const statePosts = Object.values(state.entities.posts) || [];
  let userPosts = [];
  if ((statePosts.length === 0)) {}
  else {
    userPosts = statePosts.map( post => {
      if (post.author_id === Number(ownProps.match.params.userId)) {
        return post;
      }
    });
  }
  userPosts= _.compact(userPosts);

  const usertype = "i dont know why this is here";
  return {
    user,
    userPosts,
    currentUser: state.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(UserProfile);
