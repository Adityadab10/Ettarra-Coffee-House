// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5yWnkvDzI7inmiEs2vK3kIuxas2kddS8",
  authDomain: "bnb24-b0778.firebaseapp.com",
  projectId: "bnb24-b0778",
  storageBucket: "bnb24-b0778.appspot.com",
  messagingSenderId: "250384744526",
  appId: "1:250384744526:web:a533c4da4dca42e766431f",
  measurementId: "G-S8QJSREVEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);