import { RECEIVE_POST_ERRORS, RECEIVE_POST } from '../actions/post_actions';
import { merge } from 'lodash';

export default ( state = [], action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POST_ERRORS:
      return merge([], state, action.errors);
    case RECEIVE_POST:
      return [];
    default:
      return state;
  }
};
