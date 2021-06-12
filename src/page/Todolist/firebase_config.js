import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBn5-RSazNKtvdW3WjsQzB1ZRNPuaUjgyg",
    authDomain: "todoapp-18434.firebaseapp.com",
    projectId: "todoapp-18434",
    storageBucket: "todoapp-18434.appspot.com",
    messagingSenderId: "530553744641",
    appId: "1:530553744641:web:0175d2c496e3471e7a3f00"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };