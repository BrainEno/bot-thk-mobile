import { takeLatest, all, put, call } from "redux-saga/effects";
import { authActionTypes } from "./auth.types";
import { loginStart, loginSuccess, loginFailure } from "./auth.actions";
import axios from "axios";
import { IUser } from ".";

const authenticate = async (formData: any) => {
  try {
    const res = await axios.post(
      "https://localhost:5001/Users/authenticate",
      formData,
      {
        withCredentials: true,
      }
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export function* loginWithUsername({ payload }: { payload: any }) {
  try {
    const user: IUser = yield authenticate(payload);
    yield put(loginSuccess(user));
  } catch (error) {
    yield put(loginFailure(error as any));
  }
}

export function* onLoginStart() {
  yield takeLatest(authActionTypes.LOGIN_START as any, loginWithUsername);
}

export function* authSagas() {
  yield all([call(onLoginStart)]);
}
