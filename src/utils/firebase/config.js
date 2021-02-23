import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyBAXpEPyLgNb3lXeFDDZgUhuzzhlmLdZbI',
    authDomain: 'react-upload-file-2755a.firebaseapp.com',
    projectId: 'react-upload-file-2755a',
    storageBucket: 'react-upload-file-2755a.appspot.com',
    messagingSenderId: '99140113125',
    appId: '1:99140113125:web:6ce34a7ad8350319f6ba0c'
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
