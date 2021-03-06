import * as types from "./constants";
export const initState = {
  rooms: [],
  isRequesting: false,
  selectedRoom: "",
};

const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_ROOMS_REQUEST: {
      return { ...state, isRequesting: true };
    }
    case types.GET_ROOMS_SUCCESS: {
      return {
        ...state,
        rooms: action.payload,
        isRequesting: false,
      };
    }
    case types.GET_ROOMS_FAIL: {
      return { ...state, isRequesting: false };
    }
    case types.GET_ACTIVE_ROOM_ID: {
      return { ...state, selectedRoom: action.payload };
    }
    default:
      return { ...state };
  }
};

export default homeReducer;
