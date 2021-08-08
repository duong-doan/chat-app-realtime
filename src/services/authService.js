import firebase from '../firebase/configFirebase';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';

const auth = getAuth(firebase);
const fbProvider = new FacebookAuthProvider();
const ggProvider = new GoogleAuthProvider();
ggProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export const signUpUser = (email = 'abc@gmail.com', password = '12345678') => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('user signUp', user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('errorCode signUp', errorCode);
      console.log('errorMessage signUp', errorMessage);
    });
};

export const signInUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('user signUp', user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('errorCode signUp', errorCode);
      console.log('errorMessage signUp', errorMessage);
    });
};

export const sigInWithFacebook = () => {
  signInWithPopup(auth, fbProvider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      console.log('user fb', user);

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      console.log('accessToken fb', accessToken);

      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
      console.log('errorCode fb', errorCode);
      console.log('errorMessage fb', errorMessage);
      console.log('email fb', email);
      console.log('credential fb', credential);

      // ...
    });
  signInWithRedirect(auth, fbProvider);
  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log('token fb', token);

      const user = result.user;
      console.log('user fb', user);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
      console.log('errorCode fb', errorCode);
      console.log('errorMessage fb', errorMessage);
      console.log('email fb', email);
      console.log('credential fb', credential);
    });
};

export const sigInWithGoogle = (cb) => {
  signInWithPopup(auth, ggProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      //   const credential = GoogleAuthProvider.credentialFromResult(result);
      //   const token = credential.accessToken;
      //   // The signed-in user info.
      //   console.log('token', token);
      const user = result.user;
      cb(user);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      //   const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log('errorCode gg', errorCode);
      console.log('errorMessage gg', errorMessage);
      //   console.log('email gg', email);
      console.log('credential gg', credential);
      // ...
    });

  //   signInWithRedirect(auth, ggProvider);

  //   getRedirectResult(auth)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access Google APIs.
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       console.log('token', token);
  //       // The signed-in user info.
  //       const user = result.user;
  //       console.log('user', user);
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //       console.log('errorCode fb', errorCode);
  //       console.log('errorMessage fb', errorMessage);
  //       console.log('email fb', email);
  //       console.log('credential fb', credential);
  //       // ...
  //     });
};

export const logout = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log('logout success');
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
};
