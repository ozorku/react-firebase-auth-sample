import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0p78On7ObevpUtNbDLXVbeFFSBgQkSsU",
  authDomain: "react-firebase-auth-ef83c.firebaseapp.com",
  databaseURL: "https://react-firebase-auth-ef83c.firebaseio.com",
  projectId: "react-firebase-auth-ef83c",
  storageBucket: "react-firebase-auth-ef83c.appspot.com",
  messagingSenderId: "565629539262",
  appId: "1:565629539262:web:b7c5e67c61e97bd6099fef",
  measurementId: "G-1S6K6B6W11",
};

// Initialize
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
