// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnRkNa4aMDhEJi6_jjpKIjX5OCp0eHIoo",
  authDomain: "thunder-react.firebaseapp.com",
  projectId: "thunder-react",
  storageBucket: "thunder-react.appspot.com",
  messagingSenderId: "888914696676",
  appId: "1:888914696676:web:604470640046e33fb90ff1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);