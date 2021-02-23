import firebase from 'firebase/app';
import 'firebase/storage';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBFVivNh3Rn8x5rX7sPeJRqHBQwI4tpmlY",
    authDomain: "marterialize.firebaseapp.com",
    projectId: "marterialize",
    storageBucket: "marterialize.appspot.com",
    messagingSenderId: "245537760975",
    appId: "1:245537760975:web:ded05166b029eb2ac0b9ba"
  };
  // Initialize Firebase
export const firebaseConf = firebase.initializeApp(firebaseConfig);

// const storage = firebase.storage();

// export { storage, firebase as default };
