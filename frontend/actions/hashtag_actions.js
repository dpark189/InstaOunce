import * as HashtagApiUtil from '../util/hashtag_api_util';
export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";

export const receive_tags = (payload) => {
  return {
    type: RECEIVE_TAGS,
    hashtags: payload.hashtags,
    posts: payload.posts
  };
};

export const receiveTag = (hashtag) => {
  return {
    type: RECEIVE_TAG,
    hashtag
  };
};

export const fetchHashtag = (hashtagId) => {
  return dispatch => {
    return HashtagApiUtil.fetchHashtag(hashtagId).then(
      (hashtag) => dispatch(receiveTag(hashtag))
    );
  };
};

export const fetchHashtags = () => {
  return dispatch => {
    return HashtagApiUtil.fetchHashtags().then(
      (payload) => dispatch(receiveHashtags(payload))
    );
  };
};
