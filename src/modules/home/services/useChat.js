import { db } from '../../../firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';

export const getListMessage = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'messages'));
    let messages = [];
    querySnapshot.forEach((doc) => {
      messages = [...messages, { ...doc.data(), id: doc.id }];
    });
    return messages;
  } catch (error) {
    console.log(error);
  }
};
