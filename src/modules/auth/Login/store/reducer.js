import * as types from "./constants";

export const initStateAuth = {
  profile: {},
  isRequesting: true,
  isAuthentication: false,
};

const reducer = (state = initStateAuth, action) => {
  switch (action.type) {
    case types.GET_USER_PROFILE_REQUEST:
      return { ...state };

    case types.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        isRequesting: false,
        isAuthentication: true,
      };

    case types.GET_USER_PROFILE_FAIL:
      return { ...state };

    default:
      return state;
  }
};

export default reducer;
