// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP3l858V9p9ycdhQXhCSmvxKU47JjzZy0",
  authDomain: "responet-d0993.firebaseapp.com",
  projectId: "responet-d0993",
  storageBucket: "responet-d0993.appspot.com",
  messagingSenderId: "517829083999",
  appId: "1:517829083999:web:05323fab9d9a9de9baecea",
  measurementId: "G-0MK9CK8PCC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const firestore = getFirestore(app);
const storage=getStorage(app);
//const analytics = getAnalytics(app);
export {app,auth,firestore,storage};