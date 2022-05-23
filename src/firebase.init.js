import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5ajh91ZG665lkRypCrweSV3FcrPxbA8g",
  authDomain: "auto-parts-cf8c5.firebaseapp.com",
  projectId: "auto-parts-cf8c5",
  storageBucket: "auto-parts-cf8c5.appspot.com",
  messagingSenderId: "343593721976",
  appId: "1:343593721976:web:90c43d9ccff57f098d0d8d",
  measurementId: "G-3FTR0N9XB1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
