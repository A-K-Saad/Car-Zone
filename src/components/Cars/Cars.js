import React from "react";
import { Link } from "react-router-dom";
import Car from "./Car/Car";
import "./Cars.css";

const Cars = ({ setFullCart, setCount }) => {
  return (
    <>
      <div className="container pt-3 pb-5 text-center">
        <h2>Popular Cars</h2>
        <div className="underline"></div>

        <div className="row">
          <div className="col-12 col-md-3">
            <h1>3column</h1>
          </div>
          <div className="col-12 col-md-9">
            <div className="row row-cols-1 g-3 pt-3">
              <Car
                setCount={setCount}
                carCount={1000}
                setFullCart={setFullCart}
                fullColumn={true}
              ></Car>
            </div>
          </div>
        </div>
        {/* Back To Home */}
        <Link to="/">
          <button className="btn btn-lightblue mx-auto mt-5 px-4 py-2">
            <i className="fas fa-home"></i> Back To Home
          </button>
        </Link>
      </div>
    </>
  );
};

export default Cars;
