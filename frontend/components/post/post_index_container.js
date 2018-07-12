import { merge } from 'lodash';
import { fetchPosts } from '../../actions/post_actions';
import PostIndex from './post_index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  const posts = Object.values(state.entities.posts);
  const users = state.entities.users
  return {
    posts,
    users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex));
