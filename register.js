import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz6hqXfxjHwF4S_aJcZEQ5VW02Tdzw1AE",
  authDomain: "school-50a6e.firebaseapp.com",
  projectId: "school-50a6e",
  storageBucket: "school-50a6e.appspot.com", // ✅ Corrected
  messagingSenderId: "402052749478",
  appId: "1:402052749478:web:9e9dc45f8c462471143c67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export auth methods
export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
};
