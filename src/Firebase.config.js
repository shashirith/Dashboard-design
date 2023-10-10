import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCpITqP_bkoMcY4XzIM3Ratop9a1h_qIa4",
  authDomain: "openinapp-a7f76.firebaseapp.com",
  projectId: "openinapp-a7f76",
  storageBucket: "openinapp-a7f76.appspot.com",
  messagingSenderId: "947037521817",
  appId: "1:947037521817:web:e16dfabee04fe496e03508"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export {auth , provider};