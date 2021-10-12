import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const UseFirebase = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(`OOPS! Error ${errorCode}! ${errorMessage}`);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(setUser(null))
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(`OOPS! Error ${errorCode}! ${errorMessage}`);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  return { user, signInWithGoogle, logOut };
};

export default UseFirebase;
