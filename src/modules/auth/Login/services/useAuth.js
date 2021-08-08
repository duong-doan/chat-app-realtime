import { db } from '../../../../firebase/firestore';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export const addDocStore = async (data) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), data);
    console.log(docRef);
  } catch (error) {
    console.log(error);
  }
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
