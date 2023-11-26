// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1VqymR0xaNHFWV4eA0jzUjrP9YUdClFY",
  authDomain: "tech-product-f57cc.firebaseapp.com",
  projectId: "tech-product-f57cc",
  storageBucket: "tech-product-f57cc.appspot.com",
  messagingSenderId: "77951035522",
  appId: "1:77951035522:web:cd565f6364b055c31d2c9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app