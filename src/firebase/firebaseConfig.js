import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCYvzf8ZqWWA8H076ktTSJ-YfOqdfr7JsQ",
  authDomain: "onlinestore-42d1c.firebaseapp.com",
  databaseURL: "https://onlinestore-42d1c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "onlinestore-42d1c",
  storageBucket: "onlinestore-42d1c.appspot.com",
  messagingSenderId: "1023319999861",
  appId: "1:1023319999861:web:92bdfa78b7bb69d19f3f3c",
  measurementId: "G-RLH7J23QY2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, db };
