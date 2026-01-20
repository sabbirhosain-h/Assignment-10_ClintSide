// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId
   apiKey: "AIzaSyDciYR9XFEjfZJiAQOY9OC5_qkSk-vtFX4",
   authDomain: "thebookheaven-95206.firebaseapp.com",
   projectId: "thebookheaven-95206",
   storageBucket: "thebookheaven-95206.firebasestorage.app",
   messagingSenderId: "28591965268",
   appId: "1:28591965268:web:f570c6ff3ed85b52acd9c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);