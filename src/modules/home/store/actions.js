import * as types from "./constants";

export const getRoomsFirebaseRequest = (data) => {
  return {
    type: types.GET_ROOMS_REQUEST,
    payload: data,
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
    type: types.GET_ROOMS_SUCCESS,
    payload: err,
  };
};
