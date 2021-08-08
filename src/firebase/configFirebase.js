import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDhQfQMGqN2X23W_zv5Ury_KiBKR6DtlQQ',
  authDomain: 'realtime-chat-app-241a0.firebaseapp.com',
  databaseURL:
    'https://realtime-chat-app-241a0-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'realtime-chat-app-241a0',
  storageBucket: 'realtime-chat-app-241a0.appspot.com',
  messagingSenderId: '362334700678',
  appId: '1:362334700678:web:1ce9277017d652f5ef7d07',
  measurementId: 'G-63MJKW8L79',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
