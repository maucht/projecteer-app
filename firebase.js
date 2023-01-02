// Import the functions you need from the SDKs you need
import * as firebase from 'firebase'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3-0ltc16yOZjx5Jn_fCXMDHMkjM_6LnY",
  authDomain: "projecteer-app.firebaseapp.com",
  projectId: "projecteer-app",
  storageBucket: "projecteer-app.appspot.com",
  messagingSenderId: "358873331362",
  appId: "1:358873331362:web:442eaadf6cdae7e2b789fb",
  measurementId: "G-5BXW0K7H87"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;