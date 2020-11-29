// database/firebaseDb.js
import * as  firebase from 'firebase';
import firestore from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBYcJZEroIUBLA_yOGPCzXS9-qEZWTNz28",
    authDomain: "empapp-56e97.firebaseapp.com",
    databaseURL: "https://empapp-56e97.firebaseio.com",
    projectId: "empapp-56e97",
    storageBucket: "empapp-56e97.appspot.com",
    messagingSenderId: "851926992524",
    appId: "1:851926992524:web:1062511eade3b6bd3a1da9",
    measurementId: "G-WLYQJWF53C"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;