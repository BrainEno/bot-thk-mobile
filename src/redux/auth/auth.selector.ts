import { createSelector } from "reselect";
import { AuthState } from ".";
import { RootState } from "../rootReducer";

const selectUser = (state: RootState) => state.auth;

export const selectCurrentUser = createSelector(
  [selectUser],
  (auth: AuthState) => auth.currentUser
);

export const selectAuthError = createSelector(
  [selectUser],
  (auth: AuthState) => auth.error
);

export const selectAuthLoading = createSelector(
  [selectUser],
  (auth: AuthState) => auth.loading
);
