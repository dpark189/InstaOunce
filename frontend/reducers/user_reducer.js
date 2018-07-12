import { RECEIVE_CURRENT_USER, RECEIVE_USERS } from '../actions/session_actions';
import { RECEIVE_POST, RECEIVE_POSTS } from '../actions/post_actions';
import { merge } from 'lodash';

const defaultState = {};

export default (state = defaultState, action ) => {
  Object.freeze(state);

  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_USERS:
    case RECEIVE_POSTS:
      return merge(newState, action.users);
    case RECEIVE_CURRENT_USER:
    case RECEIVE_POST:
      return merge(newState, {[action.user.id]: action.user});
    default:
      return state;
  }
};
