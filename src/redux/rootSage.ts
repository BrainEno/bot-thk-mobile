import { authSagas } from "./auth/auth.saga";
import { all, call } from "typed-redux-saga";

export function* rootSaga() {
  yield all([call(authSagas)]);
}
