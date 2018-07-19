import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { fetchPosts } from '../../actions/post_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Stories from './stories';

const mapStateToProps = (state) => {
  const dummyUser = {
    full_name: "",
    username: "",
    website: "",
    bio: "",
    email: "",
    phone_number: "",
    gender: "",
    profile_pictureUrl: "",
    postIds: "",
    commentIds: "",
    followeeIds: ""
  };
  const currentUser = state.entities.users[state.session.id] || dummyUser;
  let followees;
  if (currentUser === dummyUser) {
  } else {
    Object.keys(state.entities.users).map( user => {
      if (currentUser.followeeIds.includes(user.id)) {

        return user;
      }
    });
  }
  return {
    currentUser: currentUser,
    followeeIds: currentUser.followeeIds || {},
    followedUsers: followees || {},
    posts: state.entities.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Stories));
