// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuMsaFwhrDLALpaKsq0k1hURatxHhlyKE",
  authDomain: "lzxky-19b8e.firebaseapp.com",
  projectId: "lzxky-19b8e",
  storageBucket: "lzxky-19b8e.appspot.com",
  messagingSenderId: "185804810115",
  appId: "1:185804810115:web:f1e2689a401d37f024b8b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { storage, app as default };