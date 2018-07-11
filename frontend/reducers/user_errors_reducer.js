import { RECEIVE_USER_ERRORS, RECEIVE_USER } from '../actions/user_actions';
import { merge } from 'lodash';

export default ( state = [], action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return merge([], state, action.errors);
    case RECEIVE_USER:
      return [];
    default:
      return state;
  }
}

// TODO: debug unprocessible entity when signing up a user with invalid credentials
