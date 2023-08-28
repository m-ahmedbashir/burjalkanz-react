// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRzvKuP_ca619wio2j8Mbp_putEVXnVtM",
  authDomain: "burjalkanztahir.firebaseapp.com",
  projectId: "burjalkanztahir",
  storageBucket: "burjalkanztahir.appspot.com",
  messagingSenderId: "295460364315",
  appId: "1:295460364315:web:4e0d78f50a0e1bae6818be",
  measurementId: "G-NPRDCJHVEV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
