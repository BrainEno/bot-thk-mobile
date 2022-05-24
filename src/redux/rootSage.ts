import { all, call } from 'typed-redux-saga';

import { authSagas } from './auth/auth.saga';

export function* rootSaga() {
  yield all([call(authSagas)]);
}
