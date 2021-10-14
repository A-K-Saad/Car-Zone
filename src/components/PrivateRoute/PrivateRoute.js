import { getAuth } from "@firebase/auth";
import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router";
import UseFirebase from "../../hooks/UseFirebase";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = UseFirebase();

  const { currentUser, loading } = getAuth();

  return (
    <>
      {loading && (
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
      <Route
        {...rest}
        render={({ location }) => {
          //   currentUser?.email ? children : <Redirect to="/login"></Redirect>;
          if (currentUser?.email) {
            return children;
          } else {
            localStorage.setItem("location", JSON.stringify(location.pathname));
            return <Redirect to="/login"></Redirect>;
          }
        }}
      ></Route>
    </>
  );
};

export default PrivateRoute;
