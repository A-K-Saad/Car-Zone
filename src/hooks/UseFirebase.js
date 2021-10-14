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
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const auth = getAuth();

  const signInWithGoogle = () => {
    setLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(`OOPS! Error ${errorCode}! ${errorMessage}`);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    signOut(auth)
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(`OOPS! Error ${errorCode}! ${errorMessage}`);
      })
      .finally(() => setLoading(false));
  };
  return { user, loading, signInWithGoogle, logOut };
};

export default UseFirebase;
