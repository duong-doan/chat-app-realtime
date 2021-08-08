import { createSelector } from "reselect";
import { useSelector } from "react-redux";

const makeGetUserProfile = () => {
  const selectUserProfile = createSelector(
    (state) => state.auth,
    (auth) => auth.profile
  );

  return useSelector(selectUserProfile);
};

const makeGetRooms = () => {
  const selectRooms = createSelector(
    (state) => state.home,
    (home) => home.rooms
  );

  return useSelector(selectRooms);
};

const makeGetUserLists = () => {
  const selectUserLists = createSelector(
    (state) => state.auth,
    (auth) => auth.userLists
  );

  return useSelector(selectUserLists);
};

const makeGetActiveRoomId = () => {
  const selectActiveRoomId = createSelector(
    (state) => state.home,
    (home) => home.selectedRoom
  );

  return useSelector(selectActiveRoomId);
};

export {
  makeGetUserProfile,
  makeGetRooms,
  makeGetUserLists,
  makeGetActiveRoomId,
};
