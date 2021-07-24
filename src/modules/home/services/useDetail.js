import { makeGetUserProfile } from "../store/selector";

export default function useDetail() {
  const userProfile = makeGetUserProfile();
  return {
    userProfile,
  };
}
