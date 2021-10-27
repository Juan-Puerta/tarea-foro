//import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import 'firebase/auth';
import 'firebase/firestore'

//import firebase from "firebase/app";
//require("firebase/firestore"); 


const firebaseConfig = {
  apiKey: "AIzaSyA_gkDAgxlTbgFSwDhnH85WBY-5M18RdWY",
  authDomain: "foroweb-df8be.firebaseapp.com",
  projectId: "foroweb-df8be",
  storageBucket: "foroweb-df8be.appspot.com",
  messagingSenderId: "661721816658",
  appId: "1:661721816658:web:6e2692aaf6e811599e898b",
  measurementId: "G-R646T17P5E"
};


// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
//const auth = firebase.auth();
//firebase.initializeApp(firebaseConfig); 
//var db = firebase.firestore

 //export const auth = firebase.auth()
//export const firestore = firebase.firestore 
export default firebase
