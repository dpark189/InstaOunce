import { RECEIVE_ONLY_USERS, RECEIVE_SEARCH_ERRORS, CLEAR_SEARCH_RESULT } from '../actions/user_actions';
import { merge } from 'lodash';

export default ( state = {}, action ) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ONLY_USERS:
      return action.users;
    case CLEAR_SEARCH_RESULT:
      return {};
    default:
      return state;
  }
};
