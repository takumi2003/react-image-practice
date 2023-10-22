// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVCfqQY1tCpHxhdj3m8TP_U15QYibgrb0",
  authDomain: "image-updoader.firebaseapp.com",
  projectId: "image-updoader",
  storageBucket: "image-updoader.appspot.com",
  messagingSenderId: "13963190726",
  appId: "1:13963190726:web:1eb3bbc3a6258b0fe4d2c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const strage = getStorage(app);

export default strage;
