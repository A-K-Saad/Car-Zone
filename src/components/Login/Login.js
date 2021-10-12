import React from "react";
import UseFirebase from "../../hooks/UseFirebase";
import "./Login.css";

const Login = () => {
  const { user, signInWithGoogle } = UseFirebase();
  console.log(user);
  return (
    <>
      <div className="login-form container d-flex align-items-center justify-content-center">
        <div className="text-center p-3 shadow rounded">
          <h4 className="pb-3 text-secondary">
            Sign In to confirm your identity
          </h4>
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
