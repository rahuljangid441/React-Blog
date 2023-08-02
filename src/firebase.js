import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDEBj7lqBUFFQ7sB08Xs7K3o6z5udH2YaQ",
  authDomain: "react-hooks-blog-b46df.firebaseapp.com",
  projectId: "react-hooks-blog-b46df",
  storageBucket: "react-hooks-blog-b46df.appspot.com",
  messagingSenderId: "898926426366",
  appId: "1:898926426366:web:c55395f51e0e7d7ebc8daf"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();