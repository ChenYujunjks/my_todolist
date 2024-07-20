// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAo8GwWyZkig-QMkpQUCmdQ8ymjOzrsgc4",
  authDomain: "fir-exeer.firebaseapp.com",
  projectId: "fir-exeer",
  storageBucket: "fir-exeer.appspot.com",
  messagingSenderId: "885928676474",
  appId: "1:885928676474:web:69641a815115149b667fc3",
  measurementId: "G-CT7V9TC7KG",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
export { app, db, analytics };
