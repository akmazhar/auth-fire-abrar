// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFSorILkb5WfsLjwL5tPA92Pu9dSLwqZQ",
  authDomain: "auth-fire-abrar.firebaseapp.com",
  projectId: "auth-fire-abrar",
  storageBucket: "auth-fire-abrar.appspot.com",
  messagingSenderId: "506095212164",
  appId: "1:506095212164:web:cd17df1483f7f3ad25d4d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;