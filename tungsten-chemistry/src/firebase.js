import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyDNB3bbv6u1T9eP6sDMw6791o-JMNRdYaY",
  authDomain: "tungsten-chemistry.firebaseapp.com",
  projectId: "tungsten-chemistry",
  storageBucket: "tungsten-chemistry.appspot.com",
  messagingSenderId: "850163562057",
  appId: "1:850163562057:web:c1d778afc59ddc695b7198",
  measurementId: "G-KP852R1BPP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = (navigate) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      localStorage.setItem("name", user.displayName);
      localStorage.setItem("email", user.email);
      localStorage.setItem("pfp", user.photoURL);
      navigate('/');
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signOutUser = () => {
  signOut(auth)
    .then(() => {
      localStorage.clear();
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const onAuthChange = (callback) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      callback(user);
    } else {
      callback(null);
    }
  });
};
