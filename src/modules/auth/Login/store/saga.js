import { call, fork, put, takeEvery } from "redux-saga/effects";
import { signUpUserBasic, signInUserBasic } from "../services/useAuth";
import {
  signInUserFirebaseFailed,
  signInUserFirebaseSuccess,
  signUpUserFirebaseFailed,
} from "./actions";
import * as types from "./constants";

function* signUpUserFirebaseRequestMid(action) {
  const { email, password } = action.payload;
  try {
    const result = yield call(signUpUserBasic, { email, password });
    console.log("saga", result);
  } catch (error) {
    yield put(signUpUserFirebaseFailed(error));
  }
}

function* signInUserFirebaseRequestMid(action) {
  const { email, password } = action.payload;
  try {
    const result = yield call(signInUserBasic, { email, password });
    console.log("saga", result);
    yield put(signInUserFirebaseSuccess(result?.user));
    yield;
  } catch (error) {
    yield put(signInUserFirebaseFailed(error.message));
  }
}

function* watchAuthSaga() {
  // yield takeEvery(types.GET_USER_PROFILE_REQUEST, getUser);
  yield takeEvery(
    types.SIGN_UP_USER_FIREBASE_REQUEST,
    signUpUserFirebaseRequestMid
  );
  yield takeEvery(
    types.SIGN_IN_USER_FIREBASE_REQUEST,
    signInUserFirebaseRequestMid
  );
}

const authSaga = [fork(watchAuthSaga)];

export default authSaga;
