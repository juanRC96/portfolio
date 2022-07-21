// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpIoJVYk2JmNb-u4NTUvj589xOgLMCwNE",
  authDomain: "portfolio-37be1.firebaseapp.com",
  projectId: "portfolio-37be1",
  storageBucket: "portfolio-37be1.appspot.com",
  messagingSenderId: "889365646734",
  appId: "1:889365646734:web:7a4ae3522215ae937ea8df",
  measurementId: "G-P8HBE3C8WC"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;