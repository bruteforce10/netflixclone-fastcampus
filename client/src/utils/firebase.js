// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7ziY0KXRyw-VRIISwIk7PvDTH0s9CXPg",
  authDomain: "netflix-clone-firdi.firebaseapp.com",
  projectId: "netflix-clone-firdi",
  storageBucket: "netflix-clone-firdi.firebasestorage.app",
  messagingSenderId: "358233680339",
  appId: "1:358233680339:web:070d3c310fbd5fd1506726",
  measurementId: "G-XKLG2L0NME",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
