import { fork, put, takeEvery } from "redux-saga/effects";
import { addDocument, signInFbFirebase } from "../services/useAuth";
import * as types from "./constants";

function* getUser() {
  const result = yield signInFbFirebase();
  try {
    const {
      additionalUserInfo: {
        profile: { email, name, id, picture },
        isNewUser,
      },
    } = result;
    const getUserFb = {
      email,
      name,
      photoUrl: picture?.data?.url,
      uid: id,
    };
    if (isNewUser) {
      addDocument("users", getUserFb);
    }
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
