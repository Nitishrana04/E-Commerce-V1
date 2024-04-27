import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCYvzf8ZqWWA8H076ktTSJ-YfOqdfr7JsQ",
    authDomain: "onlinestore-42d1c.firebaseapp.com",
    projectId: "onlinestore-42d1c",
    storageBucket: "onlinestore-42d1c.appspot.com",
    messagingSenderId: "1023319999861",
    appId: "1:1023319999861:web:92bdfa78b7bb69d19f3f3c",
    measurementId: "G-RLH7J23QY2"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };