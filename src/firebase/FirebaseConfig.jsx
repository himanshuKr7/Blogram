// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZQ_GzTsXJGzjQD65BW_lZRgeJwklnCuw",
  authDomain: "myblog-653f0.firebaseapp.com",
  projectId: "myblog-653f0",
  storageBucket: "myblog-653f0.appspot.com",
  messagingSenderId: "110255774527",
  appId: "1:110255774527:web:5eaa1280efe967a078d18a",
  measurementId: "G-HRHKV0X04P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const fireDb = getFirestore(app);

const auth = getAuth(app);
const storage = getStorage(app);

export {fireDb,auth,storage}