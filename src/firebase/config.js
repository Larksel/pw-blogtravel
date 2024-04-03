import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCPbY3MekkvjUMOMGzgoBxo6p1GMX2EcTI",
  authDomain: "miniblog-e35d8.firebaseapp.com",
  projectId: "miniblog-e35d8",
  storageBucket: "miniblog-e35d8.appspot.com",
  messagingSenderId: "501424470281",
  appId: "1:501424470281:web:859b35d9f51f0112383bd8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };