import { getFirestore } from 'firebase/firestore';
import app from './configFirebase';
export const db = getFirestore(app);
