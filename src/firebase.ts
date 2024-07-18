// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjA3SDcqZWU--YwV59ESP0QriAYMmfXsk",
  authDomain: "mytodolist-9a404.firebaseapp.com",
  projectId: "mytodolist-9a404",
  storageBucket: "mytodolist-9a404.appspot.com",
  messagingSenderId: "544976506618",
  appId: "1:544976506618:web:df71e5b721bd63c04a8343",
  measurementId: "G-KHWJT84TEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);