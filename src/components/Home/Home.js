import React, { useState } from "react";
import { Link } from "react-router-dom";
import Car from "../Cars/Car/Car";
import Header from "./Header/Header";
import "./Home.css";

const Home = ({ setCount, setFullCart }) => {
  return (
    <>
      <section className="text-center">
        <Header></Header>
        <div className="container py-4">
          <h2 className="mt-3">Popular Cars</h2>
          <div className="underline"></div>
          <div className="row row-cols-1 row-cols-md-4 g-3 pt-3">
            <Car
              setCount={setCount}
              carCount={8}
              setFullCart={setFullCart}
            ></Car>
          </div>
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
