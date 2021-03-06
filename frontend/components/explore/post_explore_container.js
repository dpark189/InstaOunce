import { merge } from 'lodash';
import { fetchPosts } from '../../actions/post_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import PostExplore from './post_explore';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const allPosts = Object.values(state.entities.posts) || {};
  let posts;
  if (ownProps.match.path === "/hashtag/:hashtag"){
    posts = allPosts.filter( (post) => {
      if (post.hashtags.includes(`#${ownProps.match.params.hashtag}`)) {
        return post;
      }
    });
  } else { posts = allPosts; }

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostExplore));
