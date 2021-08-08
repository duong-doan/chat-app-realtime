import { call, fork, put, takeLatest } from 'redux-saga/effects';
import * as types from './constants';
import { getRoomsStore } from '../../auth/Login/services/useAuth';
import {
  getRoomsFirebaseFail,
  getRoomsFirebaseSuccess,
  listMessageFailed,
  listMessageSuccess,
} from './actions';
import { getListMessage } from '../services/useChat';
import { forEach, groupBy, map } from 'lodash';

function* getRoomFirebase() {
  try {
    const rooms = yield call(getRoomsStore);
    if (rooms) {
      yield put(getRoomsFirebaseSuccess(rooms));
    }
  } catch (error) {
    yield put(getRoomsFirebaseFail(error));
  }
}

function* listMessageRequestMid(action) {
  const id = action.payload;
  try {
    const messages = yield call(getListMessage);
    if (messages) {
      let list = {};
      forEach(messages, (message) => {
        list = {
          ...list,
          [message.id]: {
            ...message,
          },
        };
      });
      let groupById = groupBy(messages, 'roomId');
      const dataRoomSelected = {
        ids: map(groupById[id], (message) => message.id),
      };
      yield put(
        listMessageSuccess({
          list,
          dataRoomSelected: dataRoomSelected,
        })
      );
    }
  } catch (error) {
    yield put(listMessageFailed(error));
  }
}

function* watchHome() {
  yield takeLatest(types.GET_ROOMS_REQUEST, getRoomFirebase);
  yield takeLatest(types.LIST_MESSAGE_REQUEST, listMessageRequestMid);
}

const homeSaga = [fork(watchHome)];

export default homeSaga;
