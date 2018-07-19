import * as FollowApiUtil from '../util/follow_api_util';
import { receiveUsers } from './user_actions';

export const createFollow = (followerId, followeeId) => {
  return dispatch => {

    return FollowApiUtil.createFollow(followerId, followeeId).then(
      (users) => dispatch(receiveUsers(users))
    );
  };
};

export const deleteFollow = (followerId, followeeId) => {
  return dispatch => {
    return FollowApiUtil.deleteFollow(followerId, followeeId).then(
      (users) => dispatch(receiveUsers(users))
    );
  };
};
