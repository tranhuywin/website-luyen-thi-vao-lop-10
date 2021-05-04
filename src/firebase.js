import firebase from 'firebase'
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBezomRrmzdOQ887yrBk9CkVHyrhYWVBRQ",
  authDomain: "luyen-thi-vao-lop-10.firebaseapp.com",
  projectId: "luyen-thi-vao-lop-10",
  storageBucket: "luyen-thi-vao-lop-10.appspot.com",
  messagingSenderId: "378664163510",
  appId: "1:378664163510:web:69bd6ff171e591a5862e17"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//const db = firebaseApp.firestore();

export default firebase;
  // export default !firebase.apps.length
  // ? firebase.initializeApp(firebaseConfig)
  // : firebase.app();
