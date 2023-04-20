import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAZskytj61VwjD7UGHBtefLhfSMA0WmEEQ",
  authDomain: "fir-authentication-99fd1.firebaseapp.com",
  projectId: "fir-authentication-99fd1",
  storageBucket: "fir-authentication-99fd1.appspot.com",
  messagingSenderId: "495233330032",
  appId: "1:495233330032:web:4390fef178c7e0550e3db5",
  measurementId: "G-5Z2CTYL3KF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()

export {app,auth}

