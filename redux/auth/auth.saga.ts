import { takeLatest, all, put, call } from "redux-saga/effects";
import { authActionTypes } from "./auth.types";
import { loginSuccess, loginFailure } from "./auth.actions";
import { loginRequest } from "../../graphql/mutations/login";
import { getCurrUser } from "../../graphql/mutations/login";

export function* checkUserAuthenticate() {
  yield console.log("auth");
}

export function* loginWithEmail({ payload }: { payload: any }) {
  try {
    const accessToken = yield loginRequest(payload);
    const { username, userRole, avatar } = yield getCurrUser(accessToken);
    yield put(loginSuccess({ username, userRole, avatar }));
  } catch (error) {
    yield put(loginFailure(error as any));
  }
}

export function* onLoginStart() {
  yield takeLatest(authActionTypes.LOGIN_START as any, loginWithEmail);
}

export function* onCheckUserAuth() {
  yield takeLatest(authActionTypes.CHECK_USER_AUTH, checkUserAuthenticate);
}

export function* authSagas() {
  yield all([call(onLoginStart), call(onCheckUserAuth)]);
}
