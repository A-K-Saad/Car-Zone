import { getAuth } from "@firebase/auth";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import UseFirebase from "../../hooks/UseFirebase";
import "./Navbar.css";

const Navbar = ({ count }) => {
  const { signInWithGoogle, logOut } = UseFirebase();

  const { currentUser } = getAuth();
  console.log(currentUser);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light py-0 px-2 sticky-top px-md-0">
        <div className="container p-0">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src="https://i.ibb.co/vmGbbNH/images-removebg-preview.png"
              onError={(event) =>
                (event.target.src =
                  "https://cdn-icons-png.flaticon.com/512/215/215825.png")
              }
              alt=""
            />
            <h1 className="m-0 ps-2 main-title">Car Zone</h1>
          </a>
          <div className="cart-div d-md-none">
            <Link to="/cart">
              <button className="btn shadow-none position-relative py-1 px-1 my-2 my-md-0">
                <i className="fas fa-shopping-cart text-light h3 m-0"></i>
                <div className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger d-flex align-items-center justify-content-center">
                  <small>{count ? count : 0}</small>
                </div>
              </button>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav d-flex align-items-center">
              <div className="d-flex">
                <NavLink className="nav-link px-2 px-md-3" exact to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link px-2 px-md-3" exact to="/cars">
                  Cars
                </NavLink>
                <NavLink className="nav-link px-2 px-md-3" exact to="/cart">
                  Cart
                </NavLink>
                <NavLink className="nav-link px-2 px-md-3" exact to="/sell">
                  Sell Cars
                </NavLink>
                <div className="cart-div d-none d-md-block">
                  <Link to="/cart">
                    <button className="btn shadow-none position-relative py-1 px-1 my-2 my-md-0">
                      <i className="fas fa-shopping-cart text-light h3 m-0"></i>
                      <div className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger d-flex align-items-center justify-content-center">
                        <small>{count ? count : 0}</small>
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
              {currentUser?.email ? (
                <>
                  <button
                    className="btn btn-danger ms-0 ms-md-5 my-2 my-md-0"
                    onClick={logOut}
                  >
                    <i className="fas fa-sign-out-alt"></i> Sign Out
                  </button>
                  <img
                    src={
                      currentUser?.photoURL ||
                      "https://i.ibb.co/qgbdqZ3/male.png"
                    }
                    onError={(event) =>
                      (event.target.src = "https://i.ibb.co/qgbdqZ3/male.png")
                    }
                    alt="Avatar"
                    className="rounded-pill ms-3 avatar-img my-2 my-md-0"
                  />
                </>
              ) : (
                <>
                  <Link to="/signup">
                    <button className="btn btn-primary ms-0 ms-md-5 my-2 my-md-0">
                      <i className="fas fa-sign-in-alt"></i> Sign Up
                    </button>
                  </Link>
                  <Link to="/login">
                    <button className="btn btn-darkblue ms-0 ms-md-3 my-2 my-md-0">
                      <i className="fas fa-sign-in-alt"></i> Sign In
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
