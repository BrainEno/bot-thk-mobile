import { RootState } from "../rootReducer";
import { createSelector } from "reselect";
import { FollowState } from ".";

export const selectFollow = (state: RootState) => state.follow;

export const selectFollowingNum = createSelector(
  [selectFollow],
  (follow: FollowState) => follow.followingNum
);

export const selectFollowerNum = createSelector(
  [selectFollow],
  (follow: FollowState) => follow.followerNum
);

export const selectFollowingIds = createSelector(
  [selectFollow],
  (follow: FollowState) => follow.followingIds
);

export const selectFollowerIds = createSelector(
  [selectFollow],
  (follow: FollowState) => follow.followerIds
);
