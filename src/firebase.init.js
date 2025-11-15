// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY3j8nMkdlqr7SD161jJlueI9zjRyLW6w",
  authDomain: "client-c6782.firebaseapp.com",
  projectId: "client-c6782",
  storageBucket: "client-c6782.firebasestorage.app",
  messagingSenderId: "994705954325",
  appId: "1:994705954325:web:b479a7602c660e16e8201c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);