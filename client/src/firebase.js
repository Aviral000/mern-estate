// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-e7a32.firebaseapp.com",
  projectId: "estate-e7a32",
  storageBucket: "estate-e7a32.appspot.com",
  messagingSenderId: "149785137383",
  appId: "1:149785137383:web:13e317738d855b4d751242",
  measurementId: "G-VE06MJVL3H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);