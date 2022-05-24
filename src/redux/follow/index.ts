/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { AnyAction } from 'redux';

import {
  FETCH_FOLLOWINFO_REQUEST,
  FETCH_FOLLOWINFO_SUCCESS,
  FETCH_FOLLOWINFO_FAILURE,
} from './follow.types';

export interface FollowState {
  followingIds: string[];
  followingNum: number;
  followerIds: string[];
  followerNum: number;
  error: string | null;
  loading: boolean;
}

const initialState = {
  followingIds: [],
  followingNum: 0,
  followerIds: [],
  followerNum: 0,
  error: null,
  loading: false,
};

const followReducer = (
  state: FollowState = initialState,
  action: AnyAction
): FollowState => {
  switch (action.type) {
    case FETCH_FOLLOWINFO_REQUEST:
      return { ...state, loading: true };
    case FETCH_FOLLOWINFO_SUCCESS:
      return {
        ...state,
        followingIds: action.payload.followingIds,
        followingNum: action.payload.followingNum,
        followerIds: action.payload.followerIds,
        followerNum: action.payload.followerNum,
        loading: false,
      };
    case FETCH_FOLLOWINFO_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default followReducer;
