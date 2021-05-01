import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyBezomRrmzdOQ887yrBk9CkVHyrhYWVBRQ",
    authDomain: "luyen-thi-vao-lop-10.firebaseapp.com",
    projectId: "luyen-thi-vao-lop-10",
    storageBucket: "luyen-thi-vao-lop-10.appspot.com",
    messagingSenderId: "378664163510",
    appId: "1:378664163510:web:69bd6ff171e591a5862e17"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  export default db;
  