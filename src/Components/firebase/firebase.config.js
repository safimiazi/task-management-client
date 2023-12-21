// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_DIQuxuqd_T3Wa6i_taoF5kDlTGnbb1Y",
  authDomain: "task-management-e6b66.firebaseapp.com",
  projectId: "task-management-e6b66",
  storageBucket: "task-management-e6b66.appspot.com",
  messagingSenderId: "205986708265",
  appId: "1:205986708265:web:a114b3e1fe24c0459bd538"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
