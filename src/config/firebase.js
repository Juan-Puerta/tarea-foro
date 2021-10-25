// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore'
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_gkDAgxlTbgFSwDhnH85WBY-5M18RdWY",
  authDomain: "foroweb-df8be.firebaseapp.com",
  projectId: "foroweb-df8be",
  storageBucket: "foroweb-df8be.appspot.com",
  messagingSenderId: "661721816658",
  appId: "1:661721816658:web:5a5787be2ea834e99e898b",
  measurementId: "G-HX3HNS6BT9"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
//const analytics = getAnalytics(app);