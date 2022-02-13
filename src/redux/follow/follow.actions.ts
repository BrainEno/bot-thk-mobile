/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Dispatch } from "redux";
import { listFollower, listFollowing } from "../../requests/user";
import { withMatcher } from "../auth/auth.types";
import {
  FETCH_FOLLOWER_REQUEST,
  FETCH_FOLLOWER_SUCCESS,
  FETCH_FOLLOWER_FAILURE,
  FETCH_FOLLOWING_FAILURE,
  FETCH_FOLLOWING_REQUEST,
  FETCH_FOLLOWING_SUCCESS,
} from "./follow.types";

export const fetchFollowerRequest = withMatcher(() => ({
  type: FETCH_FOLLOWER_REQUEST,
}));

export const fetchFollowerSuccess = withMatcher(
  (payload: { followerIds: string[]; followerNum: number }) => ({
    type: FETCH_FOLLOWER_SUCCESS,
    payload,
  })
);

export const fetchFollowerFailure = withMatcher((error: string) => ({
  type: FETCH_FOLLOWER_FAILURE,
  payload: error,
}));

export const fetchFollowingRequest = withMatcher(() => ({
  type: FETCH_FOLLOWING_REQUEST,
}));

export const fetchFollowingSuccess = withMatcher(
  (payload: { followingIds: string[]; followingNum: number }) => ({
    type: FETCH_FOLLOWING_SUCCESS,
    payload,
  })
);

export const fetchFollowingFailure = withMatcher((error: string) => ({
  type: FETCH_FOLLOWING_FAILURE,
  payload: error,
}));

export const fetchFollowerAsync = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchFollowerRequest());
    try {
      const data = await listFollower();
      if (data) {
        const followerIds = data !== "" ? data.split(",") : [];
        const followerNum = followerIds.length || 0;
        dispatch(fetchFollowerSuccess({ followerIds, followerNum }));
      }
    } catch (error: any) {
      const err: string = error.message || error.toString();
      dispatch(fetchFollowerFailure(err));
    }
  };
};

export const fetchFollowingAsync = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchFollowingRequest());
    try {
      const data = await listFollowing();
      if (data) {
        const followingIds = data !== "" ? data.split(",") : [];
        const followingNum = followingIds.length || 0;
        dispatch(fetchFollowingSuccess({ followingIds, followingNum }));
      }
    } catch (error: any) {
      const err: string = error.message || error.toString();
      dispatch(fetchFollowingFailure(err));
    }
  };
};
