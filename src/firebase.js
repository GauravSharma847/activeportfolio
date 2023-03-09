import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBTkuKOUTdqD26o4kqulNzPFnMt_gjyo0U",
  authDomain: "gaurav-react-portfolio.firebaseapp.com",
  projectId: "gaurav-react-portfolio",
  storageBucket: "gaurav-react-portfolio.appspot.com",
  messagingSenderId: "1088611453303",
  appId: "1:1088611453303:web:b18581c5e9a2975a267972"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();