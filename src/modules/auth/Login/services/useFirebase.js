import { auth, fbProvider } from "../../../../firebase/configFirebase";

export const getUserFirebase = () => {
  return auth.signInWithPopup(fbProvider)
}