// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIGT9JnHPM8Av82AmSX5yUyItuahc7qqY",
  authDomain: "globus-c0bea.firebaseapp.com",
  projectId: "globus-c0bea",
  storageBucket: "globus-c0bea.appspot.com",
  messagingSenderId: "594579506380",
  appId: "1:594579506380:web:ba6a46ee59be4a563cae69",
  measurementId: "G-6Q2G5G04H8",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
