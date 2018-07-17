import { merge } from 'lodash';
import { fetchFeedPosts } from '../../actions/post_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import PostIndex from './post_index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  const posts = Object.values(state.entities.posts);
  const users = state.entities.users;
  return {
    posts,
    users,
    currentUserId: state.session.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeedPosts: () => dispatch(fetchFeedPosts()),
    createLike: (likedType, likedId, currentUserId) => dispatch(createLike(likedType, likedId, currentUserId)),
    deleteLike: (likedType, likedId, currentUserId) => dispatch(deleteLike(likedType, likedId, currentUserId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex));
