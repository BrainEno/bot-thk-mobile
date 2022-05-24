import { createSelector } from 'reselect';

import type { RootState } from '../rootReducer';

import type { AuthState } from '.';

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
