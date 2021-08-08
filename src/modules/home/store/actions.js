import * as types from './constants';

export const getRoomsFirebaseRequest = () => {
  return {
    type: types.GET_ROOMS_REQUEST,
  };
};

export const getRoomsFirebaseSuccess = (data) => {
  return {
    type: types.GET_ROOMS_SUCCESS,
    payload: data,
  };
};

export const getRoomsFirebaseFail = (err) => {
  return {
    type: types.GET_ROOMS_FAILED,
    payload: err,
  };
};

export const selectActiveRoom = (id) => {
  return {
    type: types.SELECT_ACTIVE_ROOM,
    payload: id,
  };
};

export const listMessagerequest = (id) => {
  return {
    type: types.LIST_MESSAGE_REQUEST,
    payload: id,
  };
};

export const listMessageSuccess = (data) => {
  return {
    type: types.LIST_MESSAGE_SUCCESS,
    payload: data,
  };
};

export const listMessageFailed = (error) => {
  return {
    type: types.LIST_MESSAGE_FAILED,
    payload: error,
  };
};
