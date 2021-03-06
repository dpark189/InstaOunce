import { merge } from 'lodash';
import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST, RECEIVE_POST_ERRORS } from '../actions/post_actions';
import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_TAGS } from '../actions/hashtag_actions';

const defaultState = {};

export default( state = defaultState, action ) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_POSTS:
    case RECEIVE_USERS:
    case RECEIVE_USER:
    case RECEIVE_TAGS:
      return merge(newState, action.posts);
    case RECEIVE_POST:
      delete newState[action.post.id];
      return merge(newState, {[action.post.id]: action.post});
    case RECEIVE_LIKE:
      delete newState[action.post.id];
      return merge(newState, {[action.post.id]: action.post});
    case REMOVE_LIKE:
      delete newState[action.post.id];
      return merge(newState, {[action.post.id]: action.post});
    case REMOVE_POST:
      delete newState[action.postId];
      return newState;
    default:
      return state;
  }
};
