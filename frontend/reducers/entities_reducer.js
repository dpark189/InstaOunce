import users from "./user_reducer";
import posts from "./posts_reducer";
import { combineReducers } from 'redux';

export default combineReducers({ users, posts });
// TODO: import posts here
