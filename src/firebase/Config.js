// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDu_Dkwqaem8zzSXDkVe_U2TpFqkhehy6A",
  authDomain: "techlabz-6f3bc.firebaseapp.com",
  projectId: "techlabz-6f3bc",
  storageBucket: "techlabz-6f3bc.appspot.com",
  messagingSenderId: "685440429264",
  appId: "1:685440429264:web:d6aa9b88eeafd8659202d5",
  measurementId: "G-LWMH3QV0Q3",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
