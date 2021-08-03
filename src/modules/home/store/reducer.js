import * as types from "./constants";
export const initState = {
  rooms: [],
  isRequesting: false,
};

const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_ROOMS_REQUEST:
      return { ...state, isRequesting: true };
    case types.GET_ROOMS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        rooms: action.payload,
        isRequesting: false,
      };
    case types.GET_ROOMS_FAIL:
      return { ...state, isRequesting: false };
    default:
      return { ...state };
  }
};

export default homeReducer;
