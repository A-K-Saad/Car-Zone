import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cars from "../Cars/Cars";
import Header from "./Header/Header";
import "./Home.css";

const Home = ({ setCount, setFullCart }) => {
  return (
    <>
      <section className="mt-3 mt-md-4 py-5 text-center">
        <Header></Header>
        <div className="container">
          <h2 className="mt-3">Popular Cars</h2>
          <div className="underline"></div>
          <Cars
            setCount={setCount}
            carCount={8}
            setFullCart={setFullCart}
          ></Cars>
          <Link to="/cars">
            <button className="btn btn-lightblue mx-auto mt-4 px-4 py-2">
              <i className="fas fa-car"></i> See All Cars
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
