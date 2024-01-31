import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhH7JJhOMt_NWUBo2nbgYfQSjZrSm0c5o",
  authDomain: "myapp-19322.firebaseapp.com",
  databaseURL: "https://myapp-19322-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "myapp-19322",
  storageBucket: "myapp-19322.appspot.com",
  messagingSenderId: "1019628089817",
  appId: "1:1019628089817:web:5d7a0ec2a5bcab8b4869c8",
  measurementId: "G-TTQ3NMWHCY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
