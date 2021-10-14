import { IUser } from ".";
import { authActionTypes } from "./auth.types";

export const loginStart = (formData: FormData) => ({
  type: authActionTypes.LOGIN_START,
  payload: formData,
});

export const loginSuccess = (currentUser: IUser) => ({
  type: authActionTypes.LOGIN_SUCCESS,
  payload: currentUser,
});

export const loginFailure = (error: string) => ({
  type: authActionTypes.LOGIN_FAILURE,
  payload: error,
});
