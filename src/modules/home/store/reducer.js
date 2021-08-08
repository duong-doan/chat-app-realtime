import * as types from './constants';
export const initState = {
  rooms: [],
  isRequesting: false,
  selectedRoom: '',
  dataRoomSelected: {},
  list: {},
};

const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_ROOMS_REQUEST: {
      return { ...state, isRequesting: true };
    }
    case types.GET_ROOMS_SUCCESS: {
      const rooms = action.payload;
      return {
        ...state,
        rooms,
        isRequesting: false,
      };
    }
    case types.GET_ROOMS_FAILED: {
      return { ...state, isRequesting: false };
    }
    case types.SELECT_ACTIVE_ROOM: {
      return { ...state, selectedRoom: action.payload };
    }

    case types.LIST_MESSAGE_SUCCESS: {
      const { dataRoomSelected, list } = action.payload;
      return {
        ...state,
        list,
        dataRoomSelected,
      };
    }
    default:
      return { ...state };
  }
};

export default homeReducer;
