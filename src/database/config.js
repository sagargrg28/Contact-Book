// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiqZ_pHrF90tuiWc-GDt-LjqTIyMSNeHc",
  authDomain: "contact-book-14498.firebaseapp.com",
  projectId: "contact-book-14498",
  storageBucket: "contact-book-14498.appspot.com",
  messagingSenderId: "740931457547",
  appId: "1:740931457547:web:037e8b9c0c0ca9e0eead0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);