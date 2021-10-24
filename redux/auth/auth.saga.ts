import { takeLatest, all, put, call } from "redux-saga/effects";
import { authActionTypes } from "./auth.types";
import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
} from "./auth.actions";
import {
  loginRequest,
  logouRequest,
  storeCookie,
} from "../../graphql/gql/user";
import { getCurrUser, getCookie, removeCookie } from "../../graphql/gql/user";

export function* checkUserAuthenticate() {
  try {
    const authenticated = yield getCookie();
    if (!authenticated) return;
    const { username, userRole, avatar } = yield getCurrUser(authenticated);
    yield put(loginSuccess({ username, userRole, avatar }));
  } catch (error) {
    console.log(error);
  }
}

export function* loginWithEmail({ payload }: { payload: any }) {
  try {
    const accessToken = yield loginRequest(payload);
    yield storeCookie(accessToken);
    const { username, userRole, avatar } = yield getCurrUser(accessToken);
    yield put(loginSuccess({ username, userRole, avatar }));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

export function* logout() {
  try {
    yield removeCookie();
    const isLogout: boolean = yield logouRequest();
    if (!isLogout) throw new Error("退出登录失败");
    yield put(logoutSuccess());
  } catch (error) {
    yield put(logoutFailure(error.message));
  }
}

export function* onLoginStart() {
  yield takeLatest(authActionTypes.LOGIN_START as any, loginWithEmail);
}

export function* onCheckUserAuth() {
  yield takeLatest(authActionTypes.CHECK_USER_AUTH, checkUserAuthenticate);
}

export function* onlogOutStart() {
  yield takeLatest(authActionTypes.LOGOUT_START, logout);
}

export function* authSagas() {
  yield all([call(onLoginStart), call(onCheckUserAuth), call(onlogOutStart)]);
}
