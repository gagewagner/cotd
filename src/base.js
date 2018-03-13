import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBFqkcc56WA4-_qacQPYdoyb_WTq7LSUms",
  authDomain: "catch-of-the-day-2c7d1.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-2c7d1.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
