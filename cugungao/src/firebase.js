// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// import module
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    updateDoc,
    Timestamp
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7RZ2RDdjOcBpFOfuusXtMra7XnBR2VtQ",
  authDomain: "cugungao-e96ae.firebaseapp.com",
  projectId: "cugungao-e96ae",
  storageBucket: "cugungao-e96ae.appspot.com",
  messagingSenderId: "653059809908",
  appId: "1:653059809908:web:02b2c9ca4a795ef2cbe721",
  measurementId: "G-75NJ13S0PQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// starting initilaize list collections

const db = getFirestore(app);
// get Items from Each collections
/*
async function getUsers(db){
    const users = collection(db,"Users");
    const userSnapshot = await getDocs(users);
    return userSnapshot;
}
*/
async function getTopics(db){
    const topics = collection(db,"Topics");
    const topicSnapshot = await getDocs(topics);
    return topicSnapshot;
}

export {db,getTopics};






