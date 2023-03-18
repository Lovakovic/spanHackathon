import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "hackathon-span.firebaseapp.com",
  projectId: "hackathon-span",
  storageBucket: "hackathon-span.appspot.com",
  messagingSenderId: "164812991218",
  appId: "1:164812991218:web:21279e71d6030d515b3e6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)