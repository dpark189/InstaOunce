import { RECEIVE_LIKE_ERRORS, RECEIVE_LIKE } from '../actions/like_actions';
import { merge } from 'lodash';

export default ( state = {}, action ) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_LIKE_ERRORS:
      return merge({}, state, action.errors);
    case RECEIVE_LIKE:
      return {};
    default:
      return state;
  }
};
