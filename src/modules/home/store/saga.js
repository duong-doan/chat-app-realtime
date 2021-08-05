import { fork, put, takeLatest } from "redux-saga/effects";
import * as types from "./constants";
import useFirebase from "../../../services/useFirebase";

function* getRoomFirebase(action) {
  const uid = action.payload;
  try {
    const result = yield useFirebase("roomLists", {
      fieldCompare: "members",
      operator: "array-contains",
      valueCompare: uid,
    });
    console.log(result);
    yield put({ type: types.GET_ROOMS_SUCCESS, payload: { name: "doan" } });
  } catch (err) {
    console.log(err);
  }
}

function* watchHome() {
  yield takeLatest(types.GET_ROOMS_REQUEST, getRoomFirebase);
}

const homeSaga = [fork(watchHome)];

export default homeSaga;
