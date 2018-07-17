import { merge } from 'lodash';
import { fetchPosts } from '../../actions/post_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import PostIndex from './post_index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const allPosts = Object.values(state.entities.posts) || {};
  let posts;
  if (ownProps.match.path === "/") {
    posts = allPosts.filter( (post) => {
      if (state.entities.users[state.session.id].followee_ids.includes(post.author_id)) {
        return post;
      }
    });
  } else { posts = allPosts; }
  // const posts = Object.values(state.entities.posts) || {};
  const users = state.entities.users;
  return {
    posts,
    users,
    currentUserId: state.session.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    createLike: (likedType, likedId, currentUserId) => dispatch(createLike(likedType, likedId, currentUserId)),
    deleteLike: (likedType, likedId, currentUserId) => dispatch(deleteLike(likedType, likedId, currentUserId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex));
