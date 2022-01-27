import { UserInfo } from "./index";
import {
  CHECK_USER_AUTH,
  LOGIN_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_START,
  LOGOUT_SUCCESS,
} from "./auth.types";
import { MutationLoginArgs } from "../../graphql/types";
import { withMatcher } from "./auth.types";

export const checkUserAuth = withMatcher(() => ({
  type: CHECK_USER_AUTH,
}));

export const loginStart = withMatcher((variables: MutationLoginArgs) => ({
  type: LOGIN_START,
  payload: variables,
}));

export const loginSuccess = withMatcher((currUser: UserInfo) => ({
  type: LOGIN_SUCCESS,
  payload: currUser,
}));

export const loginFailure = withMatcher((error: string) => ({
  type: LOGIN_FAILURE,
  payload: error,
}));

export const logoutStart = withMatcher(() => ({
  type: LOGOUT_START,
}));

export const logoutSuccess = withMatcher(() => ({
  type: LOGOUT_SUCCESS,
}));

export const logoutFailure = withMatcher((error: string) => ({
  type: LOGOUT_FAILURE,
  payload: error,
}));
