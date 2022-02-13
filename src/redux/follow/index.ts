/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { AnyAction } from "redux";
import {
  FETCH_FOLLOWER_FAILURE,
  FETCH_FOLLOWER_REQUEST,
  FETCH_FOLLOWER_SUCCESS,
  FETCH_FOLLOWING_FAILURE,
  FETCH_FOLLOWING_REQUEST,
  FETCH_FOLLOWING_SUCCESS,
} from "./follow.types";

export interface FollowState {
  followingNum: number;
  followerNum: number;
  followingIds: string[];
  followerIds: string[];
  error: string | null;
  loading: boolean;
}

const initialState = {
  followingNum: 0,
  followerNum: 0,
  followingIds: [],
  followerIds: [],
  error: null,
  loading: false,
};

const followReducer = (
  state: FollowState = initialState,
  action: AnyAction
): FollowState => {
  switch (action.type) {
    case FETCH_FOLLOWER_REQUEST:
      return { ...state, loading: true };
    case FETCH_FOLLOWER_SUCCESS:
      return {
        ...state,
        followerIds: action.payload.followerIds,
        followerNum: action.payload.followerNum,
        loading: false,
      };
    case FETCH_FOLLOWER_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case FETCH_FOLLOWING_REQUEST:
      return { ...state, loading: true };
    case FETCH_FOLLOWING_SUCCESS:
      return {
        ...state,
        followingIds: action.payload.followingIds,
        followingNum: action.payload.followingNum,
        loading: false,
      };
    case FETCH_FOLLOWING_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default followReducer;
