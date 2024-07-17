// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSFgVAnhooCuAxpSiwZBvyPf1m5Rq7fVY",
  authDomain: "todolist-28186.firebaseapp.com",
  projectId: "todolist-28186",
  storageBucket: "todolist-28186.appspot.com",
  messagingSenderId: "510240389495",
  appId: "1:510240389495:web:721d59eb6b99b95ef6c972",
  measurementId: "G-46Q9E56ZZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//const analytics = getAnalytics(app)
export { app, db };
