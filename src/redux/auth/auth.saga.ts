/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { takeLatest, all, put, call } from "typed-redux-saga";
import { CHECK_USER_AUTH, LOGIN_START, LOGOUT_START } from "./auth.types";
import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
} from "./auth.actions";
import { getCurrUser, loginRequest, logoutRequest } from "../../requests/auth";
import { MutationLoginArgs } from "../../graphql/types";
import { sendRefreshToken } from "../../requests/auth";
import { setToken } from "../../utils/storage";

export type RefreshTokenReturnType = { ok: boolean; accessToken: string };

export function* checkUserAuthenticate() {
  try {
    const { ok, accessToken }: RefreshTokenReturnType =
      yield sendRefreshToken();
    if (!ok) return;
    yield setToken(accessToken);
    const { username, userRole, avatar } = yield getCurrUser(accessToken);
    yield put(loginSuccess({ username, userRole, avatar }));
  } catch (error: any) {
    console.log("用户未认证,请登录");
  }
}

export function* loginWithEmail({ payload }: { payload: MutationLoginArgs }) {
  try {
    const accessToken: string = yield loginRequest(payload);
    yield setToken(accessToken);
    const { username, userRole, avatar } = yield getCurrUser(accessToken);
    yield put(loginSuccess({ username, userRole, avatar }));
  } catch (error: any) {
    yield put(loginFailure(error.message));
  }
}

export function* logout() {
  try {
    const isLogout: boolean = yield logoutRequest();
    if (!isLogout) return;
    yield put(logoutSuccess());
  } catch (error: any) {
    yield put(logoutFailure(error.message));
  }
}

export function* onLoginStart() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  yield takeLatest(LOGIN_START as any, loginWithEmail);
}

export function* onCheckUserAuth() {
  yield takeLatest(CHECK_USER_AUTH, checkUserAuthenticate);
}

export function* onlogOutStart() {
  yield takeLatest(LOGOUT_START, logout);
}

export function* authSagas() {
  yield all([call(onLoginStart), call(onCheckUserAuth), call(onlogOutStart)]);
}
