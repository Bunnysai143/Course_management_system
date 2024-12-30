// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNpMtt72dmVLgtDDEMbXwAoJOSdt_ivu0",
  authDomain: "cms-saikiran.firebaseapp.com",
  projectId: "cms-saikiran",
  storageBucket: "cms-saikiran.appspot.com",
  messagingSenderId: "255711360868",
  appId: "1:255711360868:web:edc8dea4fb0aab0d7fec71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;