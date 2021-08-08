import * as types from './constants';

const initStateAuth = {
  profile: {},
  isRequesting: true,
  isAuthentication: false,
  userLists: [],
};

const reducer = (state = initStateAuth, action) => {
  switch (action.type) {
    case types.GET_USER_PROFILE_REQUEST: {
      return { ...state };
    }

    case types.GET_USER_PROFILE_SUCCESS: {
      const data = [...state.userLists, action.payload];
      return {
        ...state,
        profile: action.payload,
        isRequesting: false,
        isAuthentication: true,
        userLists: data,
      };
    }

    case types.GET_USER_PROFILE_FAIL: {
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default reducer;
