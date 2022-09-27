// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5Qp5UxYg58FR_2s-2ce7at2L5vN0my50",
  authDomain: "productos-ecommerce-bf685.firebaseapp.com",
  projectId: "productos-ecommerce-bf685",
  storageBucket: "productos-ecommerce-bf685.appspot.com",
  messagingSenderId: "675791954352",
  appId: "1:675791954352:web:7169b28eadd0ed9346f675"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)