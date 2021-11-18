// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBseNCiOqeT2VOqLviV3Wp9_lZE2uOH9jY",
  authDomain: "pinterest-firebase-auth.firebaseapp.com",
  projectId: "pinterest-firebase-auth",
  storageBucket: "pinterest-firebase-auth.appspot.com",
  messagingSenderId: "640633931150",
  appId: "1:640633931150:web:3b216025a50319dc4190df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)