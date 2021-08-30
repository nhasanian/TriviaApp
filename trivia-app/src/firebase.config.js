import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite';
//import firebase from 'firebase/app'

var firebaseConfig = {
    apiKey: "AIzaSyAsD1Ub2Zvqe0hj72jTF_vVPjGB3Vg0Tbg",
    authDomain: "trivia-app-40048.firebaseapp.com",
    projectId: "trivia-app-40048",
    storageBucket: "trivia-app-40048.appspot.com",
    messagingSenderId: "601695194892",
    appId: "1:601695194892:web:5b73908a0223a484a1c329"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getFirestore(app);

export default db;