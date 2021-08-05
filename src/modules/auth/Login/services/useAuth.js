import firebase, {
  auth,
  db,
  fbProvider,
} from "../../../../firebase/configFirebase";
import {
  makeGetAuthProfile,
  makeGetIsRequesting,
  makeGetIsAuthen,
} from "../store/selectors";

export default function useAuth() {
  const userProfile = makeGetAuthProfile();
  const isRequesting = makeGetIsRequesting();
  const isAuthen = makeGetIsAuthen();
  return {
    userProfile,
    isRequesting,
    isAuthen,
  };
}

export const signInFbFirebase = () => auth.signInWithPopup(fbProvider);

export const addDocument = (collection, data) => {
  db.collection(collection).add({
    ...data,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};
