import { initializeApp } from "firebase/app";
import * as firebaseAuth from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCx2PF7sWMrot6vesvn9fwMztphCrdF5P8",
  authDomain: "test-project-b69c1.firebaseapp.com",
  projectId: "test-project-b69c1",
  storageBucket: "test-project-b69c1.appspot.com",
  messagingSenderId: "532791940469",
  appId: "1:532791940469:web:d68fc6d58eae40c00a2f3c",
};

const app = initializeApp(firebaseConfig);

export const auth = firebaseAuth.getAuth(app);

export const signOut = () => firebaseAuth.signOut(auth);

export const signIn = (email: string, password: string) =>
  firebaseAuth.signInWithEmailAndPassword(auth, email, password);

export const register = (email: string, password: string) =>
  firebaseAuth.createUserWithEmailAndPassword(auth, email, password);
