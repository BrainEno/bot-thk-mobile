import { authActionTypes } from "./auth.types";
import { UserInfo } from "./index";

export const checkUserAuth = () => ({
  type: authActionTypes.CHECK_USER_AUTH,
});

export const loginStart = (variables: { email: string; password: string }) => ({
  type: authActionTypes.LOGIN_START,
  payload: variables,
});

export const loginSuccess = (currUser: UserInfo) => ({
  type: authActionTypes.LOGIN_SUCCESS,
  payload: currUser,
});

export const loginFailure = (error: string) => ({
  type: authActionTypes.LOGIN_FAILURE,
  payload: error,
});

export const logoutStart = () => ({
  type: authActionTypes.LOGOUT_START,
});

export const logoutSuccess = () => ({
  type: authActionTypes.LOGOUT_SUCCESS,
});

export const logoutFailure = (error: string) => ({
  type: authActionTypes.LOGOUT_FAILURE,
  payload: error,
});
