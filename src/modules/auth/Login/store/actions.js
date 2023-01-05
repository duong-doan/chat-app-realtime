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

export const signUpUserFirebaseRequest = (data) => {
  return {
    type: types.SIGN_UP_USER_FIREBASE_REQUEST,
    payload: data,
  };
};

export const signUpUserFirebaseSuccess = (data) => {
  return {
    type: types.SIGN_UP_USER_FIREBASE_SUCCESS,
    payload: data,
  };
};

export const signUpUserFirebaseFailed = (error) => {
  return {
    type: types.SIGN_UP_USER_FIREBASE_FAILED,
    payload: error,
  };
};

export const signInUserFirebaseRequest = (data) => {
  return {
    type: types.SIGN_IN_USER_FIREBASE_REQUEST,
    payload: data,
  };
};

export const signInUserFirebaseSuccess = (data) => {
  return {
    type: types.SIGN_IN_USER_FIREBASE_SUCCESS,
    payload: data,
  };
};

export const signInUserFirebaseFailed = (error) => {
  return {
    type: types.SIGN_IN_USER_FIREBASE_FAILED,
    payload: error,
  };
};
