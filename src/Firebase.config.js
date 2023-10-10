import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCxpqOX8vnAD6nXNdpuxgonXKHElyregvQ",
  authDomain: "dashboard-75c22.firebaseapp.com",
  projectId: "dashboard-75c22",
  storageBucket: "dashboard-75c22.appspot.com",
  messagingSenderId: "1044940754620",
  appId: "1:1044940754620:web:7fb1a6a9f5437dd0050ab9"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export {auth , provider};