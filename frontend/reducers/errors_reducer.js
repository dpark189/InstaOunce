import { combineReducers } from 'redux';
import sessionErrors from './session_errors_reducer';
import userErrors from './user_errors_reducer';

export default combineReducers({
  session: sessionErrors,
  user: userErrors
});
// TODO: create post error reducer and import here
