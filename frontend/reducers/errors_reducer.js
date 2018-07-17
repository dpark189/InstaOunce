import { combineReducers } from 'redux';
import sessionErrors from './session_errors_reducer';
import userErrors from './user_errors_reducer';
import postErrors from './post_errors_reducer';
import commentErrors from './comment_errors_reducer';
import likeErrors from './like_errors_reducer';

export default combineReducers({
  session: sessionErrors,
  user: userErrors,
  post: postErrors,
  comment: commentErrors
});
