import { authSagas } from "./auth/auth.saga";
import { all, call } from "redux-saga/effects";

export function* rootSaga() {
  yield all([call(authSagas)]);
}
