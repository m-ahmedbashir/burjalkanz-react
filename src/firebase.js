// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzj7v-wKhzsBZb7f3vxEkjCty1V5SqYbo",
  authDomain: "testing-react-burj.firebaseapp.com",
  projectId: "testing-react-burj",
  storageBucket: "testing-react-burj.appspot.com",
  messagingSenderId: "612146355244",
  appId: "1:612146355244:web:8fb2697e52bc7c0a030589",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
