import { fork, put, takeEvery } from "redux-saga/effects";
import { getUserFirebase } from "../services/useFirebase";
import * as types from "./constants";

function* getUser() {
  const result = yield getUserFirebase();
  try {
    const {
      additionalUserInfo: {
        profile: { email, name, id, picture },
      },
    } = result;
    const getUserFb = {
      email,
      name,
      id,
      photoUrl: picture?.data?.url,
    };
    yield put({ type: types.GET_USER_PROFILE_SUCCESS, payload: getUserFb });
  } catch (err) {
    yield put({ type: types.GET_USER_PROFILE_FAIL, err });
  }
}

function* watchAuthSaga() {
  yield takeEvery(types.GET_USER_PROFILE_REQUEST, getUser);
}

const authSaga = [fork(watchAuthSaga)];

export default authSaga;
