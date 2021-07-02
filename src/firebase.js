import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0di39HedpIfwAsXPMU-S9m3bFp9BIKt8",
  authDomain: "clone-a836e.firebaseapp.com",
  projectId: "clone-a836e",
  storageBucket: "clone-a836e.appspot.com",
  messagingSenderId: "84165963514",
  appId: "1:84165963514:web:3fc3cc7a09400ceb8ce343",
  measurementId: "G-0J24VS0841",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
