// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt-hwArZZY85wtQi-kGcgcIdjWhRWtNVo",
  authDomain: "invareader.firebaseapp.com",
  projectId: "invareader",
  storageBucket: "invareader.appspot.com",
  messagingSenderId: "176759362103",
  appId: "1:176759362103:web:09f28ae5667cb3195e65b2",
  measurementId: "G-MX8300H382"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export { auth }