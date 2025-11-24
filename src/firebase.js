import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXzMtyfDMu8fkxPImp-mPijpKQK-LAWcc",
  authDomain: "auth-f0e76.firebaseapp.com",
  projectId: "auth-f0e76",
  storageBucket: "auth-f0e76.firebasestorage.app",
  messagingSenderId: "880767402626",
  appId: "1:880767402626:web:5058b810e36bdab6da6a9b",
  measurementId: "G-PKLMJL5923"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const loginGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);
