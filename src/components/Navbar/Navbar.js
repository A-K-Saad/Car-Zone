import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ count }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light py-0 px-2 fixed-top px-md-0">
        <div className="container p-0">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/215/215825.png"
              alt=""
            />
            <h1 className="m-0 ps-2 main-title">Car Zone</h1>
          </a>
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
                <NavLink className="nav-link px-3" exact to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link px-3" exact to="/cars">
                  Cars
                </NavLink>
                <NavLink className="nav-link px-3" exact to="/cart">
                  Cart
                </NavLink>
              </div>
              <button className="btn shadow-none position-relative py-1 px-1">
                <i className="fas fa-shopping-cart h3 m-0"></i>
                <div className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger d-flex align-items-center justify-content-center">
                  <small>{count ? count : 0}</small>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;