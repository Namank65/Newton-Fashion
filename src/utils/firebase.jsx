// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnS4jzYaGXWjIOrlzcYTN_0PaFra0vOfA",
  authDomain: "nubifashion.firebaseapp.com",
  projectId: "nubifashion",
  storageBucket: "nubifashion.appspot.com",
  messagingSenderId: "449182667347",
  appId: "1:449182667347:web:437244395e999ca5ffeca6",
  measurementId: "G-M08649TBN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);