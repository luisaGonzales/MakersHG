import firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB7k_1a5iSFRj-JjvKYO04jvPadLa2s31s",
    authDomain: "makers-hg.firebaseapp.com",
    databaseURL: "https://makers-hg.firebaseio.com",
    projectId: "makers-hg",
    storageBucket: "",
    messagingSenderId: "234381259318"
  };
  firebase.initializeApp(config);

  export default firebase;
  
  export const database = firebase.database();
  export const auth = firebase.auth();
  export const storage = firebase.storage();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  