import firebase from 'firebase';
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
export default firebase;

//add data
export const AddDataToCollection = async (data, reference) => {
    if (!data)
        return;
    const dataRef = firebase.firestore().doc(reference);
    const snapshot = await dataRef.get();
    if (!snapshot.exists) {
        try {
            dataRef.set(data);
        } catch (error) {
            console.log('Error in set data', error);
        }
    }
}

//get data
export const GetAllDataInCollection = async (reference) => {
    const dataRef = firebase.firestore().collection(reference);
    const snapshot = await dataRef.get();
    if (!snapshot.exists) {
        try {
            return snapshot;
        } catch (error) {
            console.log('Error in get data', error);
        }
    }
}

//delete data
export const DeleteDataFromCollection = async (reference) => {
    const dataRef = firebase.firestore().doc(reference);
    const snapshot = await dataRef.get();
    if (snapshot.exists) {
        try {
            dataRef.delete();
            
        } catch (error) {
            console.log('Error in delele data', error);
        }
    }
}

//update data
