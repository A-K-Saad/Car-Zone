import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
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
      .then(() => {
        Swal.fire({
          title: "Success",
          text: "Logged Out Successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        Swal.fire({
          title: "OOPS! Log Out Failed!",
          text: errorMessage,
          icon: "error",
          confirmButtonText: "OK",
        });
        console.log(`OOPS! Error ${errorCode}! ${errorMessage}`);
      })
      .finally(() => setLoading(false));
  };
  const signup = (email, password, avatar) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(auth.currentUser, {
          photoURL: avatar || "https://i.ibb.co/qgbdqZ3/male.png",
        });

        Swal.fire({
          title: "Success",
          text: "Signed Up Successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        Swal.fire({
          title: "OOPS! Sign Up Failed!",
          text: errorMessage,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return { user, loading, signInWithGoogle, logOut, signup };
};

export default UseFirebase;
