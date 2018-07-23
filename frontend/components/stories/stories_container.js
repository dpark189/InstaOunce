import { fetchUser, fetchUsers, fetchStories } from '../../actions/user_actions';
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
    followeeIds: []
  };
  const currentUser = state.entities.users[state.session.id] || dummyUser;
  let followeeIds = currentUser.followeeIds;
  let users;
  if (typeof state.entities.users !== "undefined") {
    users = Object.values(state.entities.users);
  }else { users = undefined;}
  return {
    currentUser: currentUser,
    users: users,
    posts: state.entities.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchStories: (userId) => dispatch(fetchStories(userId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Stories));
