import { db } from '../../../../firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';
import { auth } from '../../../../firebase/authStore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

export const signUpUserBasic = async (data) => {
  const { email, password } = data;
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    return error;
  }
};

export const signInUserBasic = async (data) => {
  const { email, password } = data;
  const result = await signInWithEmailAndPassword(auth, email, password);
  return result;
};

export const signOutUser = async () => {
  const result = await onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
    } else {
      console.log('sign out');
    }
  });
  console.log(result);
};

export const getRoomsStore = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'roomLists'));
    let rooms = [];
    querySnapshot.forEach((doc) => {
      rooms = [...rooms, { ...doc.data(), id: doc.id }];
    });
    return rooms;
  } catch (error) {
    console.log(error);
  }
};
