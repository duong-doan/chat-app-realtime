import { all } from "redux-saga/effects";
import authSaga from "../modules/auth/Login/store/saga";
import homeSaga from "../modules/home/store/saga";

function* rootSaga() {
  yield all([...authSaga, ...homeSaga]);
}

export default rootSaga;
