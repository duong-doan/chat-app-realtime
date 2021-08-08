import * as types from './constants';

export const getUserProfileRequest = () => {
  return {
    type: types.GET_USER_PROFILE_REQUEST,
  };
};

export const getUserProfileSuccess = (data) => {
  return {
    type: types.GET_USER_PROFILE_SUCCESS,
    payload: data,
  };
};

export const getUserProfileFail = (err) => {
  return {
    type: types.GET_USER_PROFILE_FAIL,
    payload: err,
  };
};
