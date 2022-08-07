// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:  process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId:  process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: "tripplesee-contacts.appspot.com",
  messagingSenderId: "76024404452",
  appId: "1:76024404452:web:ee5e225c6b7d81fd388ff1",
  measurementId: "G-2Q6TRECNV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
let db = getFirestore()

export { db }