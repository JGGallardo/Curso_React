import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDvptYdR5mXkejIGmjxzgffrY2IDJRuH5U",
    authDomain: "paginaweb-ivrea.firebaseapp.com",
    projectId: "paginaweb-ivrea",
    storageBucket: "paginaweb-ivrea.firebasestorage.app",
    messagingSenderId: "370842530588",
    appId: "1:370842530588:web:923d759d8890b5ac1940d9",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
