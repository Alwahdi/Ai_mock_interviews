// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyIziQlxAknFe_ql4dVBgUrUwB4pXO_kc",
  authDomain: "prewise-27279.firebaseapp.com",
  projectId: "prewise-27279",
  storageBucket: "prewise-27279.firebasestorage.app",
  messagingSenderId: "982803308279",
  appId: "1:982803308279:web:f4e763a69c5b647f307df2",
  measurementId: "G-KCV599563B"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);