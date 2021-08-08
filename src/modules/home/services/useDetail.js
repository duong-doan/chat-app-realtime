import {
  makeGetUserProfile,
  makeGetRooms,
  makeGetUserLists,
  makeGetActiveRoomId,
} from "../store/selector";

export default function useDetail() {
  const userProfile = makeGetUserProfile();
  const roomsProfile = makeGetRooms();
  const userLists = makeGetUserLists();
  const roomId = makeGetActiveRoomId();
  return {
    userProfile,
    roomsProfile,
    userLists,
    roomId,
  };
}
