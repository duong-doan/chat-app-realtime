import { fork, put, takeEvery } from "redux-saga/effects";
import { getUserFirebase } from "../services/useFirebase";
import { db } from "../../../../firebase/configFirebase";
import * as types from "./constants";

function* getUser() {
  const result = yield getUserFirebase();
  try {
    const {
      additionalUserInfo: {
        profile: { email, name, id, picture },
        isNewUser
      },
    } = result;
    const getUserFb = {
      email,
      name,
      photoUrl: picture?.data?.url,
      uid: id
    };
    if(isNewUser) {
      db.collection("users").add(getUserFb)
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
