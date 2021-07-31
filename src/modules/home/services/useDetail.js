import { makeGetUserProfile } from "../store/selector";
// import { db } from "../../../firebase/configFirebase";

export default function useDetail() {
  const userProfile = makeGetUserProfile();
  // const userStore = db.collection("user")

  return {
    userProfile,
  };
}
