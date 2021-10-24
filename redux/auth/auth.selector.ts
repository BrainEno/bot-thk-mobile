import { createSelector } from "reselect";

const selectUser = (state: any) => state.auth;

export const selectCurrentUser = createSelector(
  [selectUser],
  (auth) => auth.currentUser
);

export const selectAuthError = createSelector(
  [selectUser],
  (auth) => auth.error
);

export const selectAuthLoading = createSelector(
  [selectUser],
  (auth) => auth.loading
);
