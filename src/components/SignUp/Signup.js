import { getAuth } from "firebase/auth";

import React, { useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import UseFirebase from "../../hooks/UseFirebase";

const Signup = () => {
  const { signInWithGoogle, signup } = UseFirebase();

  const history = useHistory();
  const { currentUser } = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("https://i.ibb.co/qgbdqZ3/male.png");

  //   const location = JSON.parse(localStorage.getItem("location"));

  if (currentUser) {
    history.push("/cars");
  }
  const auth = getAuth();

  const signUpSubmit = (event) => {
    event.preventDefault();
    signup(email, password, avatar);
  };

  return (
    <>
      <div className="login-form container d-flex align-items-center justify-content-center py-5">
        <div
          className="text-center p-3 shadow rounded"
          style={{ width: "360px" }}
        >
          <h4 className="pb-3 text-secondary">Sign Up</h4>
          <form
            className="d-grid pb-3"
            onSubmit={(event) => signUpSubmit(event)}
          >
            <div className="text-start pb-2">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className="form-control"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="text-start py-2">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                className="form-control"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="text-start py-2">
              <label htmlFor="password">
                Avatar: <small>(Optional)</small>
              </label>
              <input
                type="url"
                id="password"
                className="form-control"
                onChange={(event) => setAvatar(event.target.value)}
              />
            </div>
            <button className="btn btn-darkblue mt-3">Sign Up</button>
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

export default Signup;
