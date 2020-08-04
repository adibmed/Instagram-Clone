import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBBmyWySed0yuK9egu9GCgI7sT11jQDbds",
    authDomain: "instagram-clone-11e81.firebaseapp.com",
    databaseURL: "https://instagram-clone-11e81.firebaseio.com",
    projectId: "instagram-clone-11e81",
    storageBucket: "instagram-clone-11e81.appspot.com",
    messagingSenderId: "887777099227",
    appId: "1:887777099227:web:648af43d471945e92f7bfe",
    measurementId: "G-2MQMD71J7Q"
});

//   access database
const db = firebaseApp.firestore();
//   access authentication
const auth = firebase.auth();
//   access storage (no s3)
const storage = firebase.storage();

export {db, auth, storage };

//   export default db;