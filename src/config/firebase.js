import { initializeApp } from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_gkDAgxlTbgFSwDhnH85WBY-5M18RdWY",
  authDomain: "foroweb-df8be.firebaseapp.com",
  databaseURL: "https://foroweb-df8be-default-rtdb.firebaseio.com/",
  projectId: "foroweb-df8be",
  storageBucket: "foroweb-df8be.appspot.com",
  messagingSenderId: "661721816658",
  appId: "1:661721816658:web:6e2692aaf6e811599e898b",
  measurementId: "G-R646T17P5E",
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
