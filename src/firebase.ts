// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo8GwWyZkig-QMkpQUCmdQ8ymjOzrsgc4",
  authDomain: "fir-exeer.firebaseapp.com",
  projectId: "fir-exeer",
  storageBucket: "fir-exeer.appspot.com",
  messagingSenderId: "885928676474",
  appId: "1:885928676474:web:1c34b474332a731a667fc3",
  measurementId: "G-VTRPERYVYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);