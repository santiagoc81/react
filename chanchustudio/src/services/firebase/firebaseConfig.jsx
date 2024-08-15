import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2EzzeIo50Wk1DJGMMByDj8O307ujrZfg",
  authDomain: "chanchustudio-4d93f.firebaseapp.com",
  projectId: "chanchustudio-4d93f",
  storageBucket: "chanchustudio-4d93f.appspot.com",
  messagingSenderId: "1038822906134",
  appId: "1:1038822906134:web:71f76e53223b1c3801d837"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)