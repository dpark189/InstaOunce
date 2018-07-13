import * as PostApiUtil from '../util/post_api_util.js';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";

export const receiveAllPosts = (payload) => {
  return {
    type: RECEIVE_POSTS,
    posts: payload.posts,
    users: payload.users
  };
};

export const receivePost = (payload) => {
  return {
    type: RECEIVE_POST,
    post: payload.post,
    user: payload.user,
  };
};

export const removePost = (postId) => {
  return {
    type: REMOVE_POST,
    postId
  };
};

export const receivePostErrors = (errors) => {
  return {
    type: RECEIVE_POST_ERRORS,
    errors
  };
};

export const fetchPosts = () => {
  return dispatch => {
    return PostApiUtil.fetchPosts().then(
      (posts) => dispatch(receiveAllPosts(posts))
    );
  };
};

export const fetchPost = (postId) => {
  return dispatch => {
    return PostApiUtil.fetchPost(postId).then(
      (post) => dispatch(receivePost(post))
    );
  };
};

export const createPost = (formData) => {
  return dispatch => {
    return PostApiUtil.createPost(formData).then(
      (post) => dispatch(receivePost(post)),
      (errors) => dispatch(receivePostErrors(errors.responseJSON))
    );
  };
};

export const updatePost = (post) => {
  return dispatch => {
    return PostApiUtil.updatePost(post).then(
      post => dispatch(receivePost(post))
    );
  };
};

export const deletePost = (postId) => {
  return dispatch => {
    return PostApiUtil.deletePost(postId).then(
      () => dispatch(removePost(postId))
    );
  };
};
