// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import { GoogleAuthProvider, getAuth ,signInWithPopup} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNB3bbv6u1T9eP6sDMw6791o-JMNRdYaY",
  authDomain: "tungsten-chemistry.firebaseapp.com",
  projectId: "tungsten-chemistry",
  storageBucket: "tungsten-chemistry.appspot.com",
  messagingSenderId: "850163562057",
  appId: "1:850163562057:web:c1d778afc59ddc695b7198",
  measurementId: "G-KP852R1BPP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db =  getFirestore(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
  signInWithPopup(auth,provider)
  .then((result) => {
    const name = result.user.displayName;
    const email = result.user.email;
    const pfp = result.user.photoURL;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("pfp", pfp);
  }).catch((error) => {
    console.log(error);
  })
};