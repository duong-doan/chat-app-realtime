import * as types from './constants';

const initStateAuth = {
  profile: {},
  isRequesting: true,
  isAuthentication: false,
  userLists: [],
};

const reducer = (state = initStateAuth, action) => {
  switch (action.type) {
    case types.SIGN_IN_USER_FIREBASE_SUCCESS: {
      console.log('reducer', action.payload);
      return {
        ...state,
      };
    }

    default:
      return { ...state };
  }
};

export default reducer;
