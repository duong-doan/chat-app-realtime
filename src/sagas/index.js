import { all } from "redux-saga/effects";
import authSaga from "../modules/auth/Login/store/saga";

function* rootSaga() {
  yield all([...authSaga]);
}

export default rootSaga;
