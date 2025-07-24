// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRWfqoNWd3RMQFXuJDiW3GfI85WpaVMCo",
  authDomain: "bharat-fe7d6.firebaseapp.com",
  projectId: "bharat-fe7d6",
  storageBucket: "bharat-fe7d6.firebasestorage.app",
  messagingSenderId: "351393183585",
  appId: "1:351393183585:web:520b556f6cdbc1f7da3720",
  measurementId: "G-VD2L4QBZES"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider, signInWithPopup, signOut };
