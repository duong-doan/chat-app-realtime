import firebase from 'firebase/app'

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDhQfQMGqN2X23W_zv5Ury_KiBKR6DtlQQ",
    authDomain: "realtime-chat-app-241a0.firebaseapp.com",
    databaseURL: "https://realtime-chat-app-241a0-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "realtime-chat-app-241a0",
    storageBucket: "realtime-chat-app-241a0.appspot.com",
    messagingSenderId: "362334700678",
    appId: "1:362334700678:web:1ce9277017d652f5ef7d07",
    measurementId: "G-63MJKW8L79"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth()

const fbProvider = new firebase.auth.FacebookAuthProvider();

export {auth, fbProvider}
export default firebase