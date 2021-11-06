// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3NJ68s3vQGrn3o3653oBtKkpP_cmwQbw",
  authDomain: "instagram-clone-6e084.firebaseapp.com",
  projectId: "instagram-clone-6e084",
  storageBucket: "instagram-clone-6e084.appspot.com",
  messagingSenderId: "1053033535394",
  appId: "1:1053033535394:web:8f82afe8527ee56ce604fb"
};

// Initialize Firebase and check if it exists
const app =!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {
    app,db,storage
}