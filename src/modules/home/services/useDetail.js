import {
  makeGetUserProfile,
  makeGetUserLists,
  makeGetActiveRoomId,
} from '../store/selector';

export default function useDetail() {
  const userProfile = makeGetUserProfile();
  const userLists = makeGetUserLists();
  const roomId = makeGetActiveRoomId();
  return {
    userProfile,
    userLists,
    roomId,
  };
}
