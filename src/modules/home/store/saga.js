import { fork, put, takeLatest } from "redux-saga/effects";
import * as types from "./constants";
import useFirebase from "../../../services/useFirebase";

function* getRoomFirebase() {
  const { roomListFirebase } = useFirebase();
  try {
    const result = yield roomListFirebase("roomLists")
      .where("isRoom", "==", "true")
      .get()
      .then();
    // onSnapshot(
    //   (snapshot) => {
    //     const documents = snapshot.docs.map((doc) => {
    //       return {
    //         ...doc.data(),
    //         id: doc.id,
    //       };
    //     });
    //     return documents;
    //     // if (documents) {
    //     //   // console.log("saga", documents);
    //     //   // put({ type: types.GET_ROOMS_SUCCESS, payload: documents });
    //     // }
    //   }
    // );
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
