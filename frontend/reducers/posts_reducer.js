import { merge } from 'lodash';
import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST, RECEIVE_POST_ERRORS } from '../actions/post_actions';

const defaultState = {};

export default( state = defaultState , action ) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return merge(newState, action.posts);
    case RECEIVE_POST:
      return merge(newState, {[action.post.id]: action.post});
    case REMOVE_POST:
      delete newState[action.postId];
      return newState;
    default:
      return state;
  }
};
