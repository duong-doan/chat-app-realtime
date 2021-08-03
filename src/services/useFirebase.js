import firebase, { fbProvider, db, auth } from "../firebase/configFirebase";

export default function useFirebase() {
  const signInFbFirebase = () => auth.signInWithPopup(fbProvider);
  const addDocument = (collection, data) => {
    db.collection(collection).add({
      ...data,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };
  const roomListFirebase = (collection) => db.collection(collection);

  return {
    signInFbFirebase,
    addDocument,
    roomListFirebase,
  };
}
