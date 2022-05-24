/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { Dispatch } from 'redux';

import { listFollower, listFollowing } from '../../requests/user';
import { withMatcher } from '../auth/auth.types';

import {
  FETCH_FOLLOWINFO_FAILURE,
  FETCH_FOLLOWINFO_REQUEST,
  FETCH_FOLLOWINFO_SUCCESS,
} from './follow.types';

export const fetchFollowInfoRequest = withMatcher(() => ({
  type: FETCH_FOLLOWINFO_REQUEST,
}));

export const fetchFollowInfoSuccess = withMatcher(
  (payload: {
    followingIds: string[];
    followingNum: number;
    followerIds: string[];
    followerNum: number;
  }) => ({
    type: FETCH_FOLLOWINFO_SUCCESS,
    payload,
  })
);

export const fetchFollowInfoFailure = withMatcher((error: string) => ({
  type: FETCH_FOLLOWINFO_FAILURE,
  payload: error,
}));

export const fetchFollowInfoAsync = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchFollowInfoRequest());
    try {
      const followerData = await listFollower();
      const followingData = await listFollowing();

      const followingIds = followingData !== '' ? followingData.split(',') : [];
      const followingNum = followingIds.length || 0;
      const followerIds = followerData !== '' ? followerData.split(',') : [];
      const followerNum = followerIds.length || 0;

      dispatch(
        fetchFollowInfoSuccess({
          followingIds,
          followingNum,
          followerIds,
          followerNum,
        })
      );
    } catch (error: any) {
      const err: string = error.message || error.toString();
      dispatch(fetchFollowInfoFailure(err));
    }
  };
};
