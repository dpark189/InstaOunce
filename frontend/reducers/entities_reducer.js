import users from "./user_reducer";
import posts from "./posts_reducer";
import comments from "./comments_reducer";
import hashtags from "./hashtags_reducer";
import { combineReducers } from 'redux';

export default combineReducers({ users, posts, comments, hashtags });
// TODO: import posts here
