import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import React, { useState } from "react";
import { useHistory } from "react-router";
import UseFirebase from "../../hooks/UseFirebase";
import "./Login.css";

const Login = () => {
  const { signInWithGoogle } = UseFirebase();

  const history = useHistory();
  const { currentUser } = getAuth();
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (currentUser) {
    history.push("/cars");
  }

  const signIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <>
      <div className="login-form container d-flex align-items-center justify-content-center py-5">
        <div
          className="text-center p-3 shadow rounded"
          style={{ width: "350px" }}
        >
          <h4 className="pb-3 text-secondary">Sign In</h4>
          <form className="d-grid pb-3" onSubmit={signIn}>
            <div className="text-start pb-2">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                className="form-control"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="text-start py-2">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                className="form-control"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button className="btn btn-darkblue mt-3">Sign In</button>
          </form>
          <button
            className="btn btn-primary rounded-0 d-flex align-items-center justify-content-center p-0 m-auto"
            onClick={signInWithGoogle}
          >
            <img
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
              alt="Google-Button"
              className="bg-light google-icon"
            />
            <span className="mx-3">Sign In With Google</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
