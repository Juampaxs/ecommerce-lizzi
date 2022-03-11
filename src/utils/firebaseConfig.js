// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVBFA8rpe8RKqACcsPjfeWQ4wYQLmVGwg",
  authDomain: "ecommercelizzi.firebaseapp.com",
  projectId: "ecommercelizzi",
  storageBucket: "ecommercelizzi.appspot.com",
  messagingSenderId: "265744713709",
  appId: "1:265744713709:web:22cad6731d50c93ab349e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;