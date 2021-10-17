import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GetCarDatas from "../../hooks/GetCarDatas";
import Car from "./Car/Car";
import "./Cars.css";
import Filters from "./Filters/Filters";

const Cars = ({ setFullCart, setCount }) => {
  const cars = GetCarDatas();
  const engines = [...new Set(cars.map((car) => car.engine))];

  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(76000);
  const [optionSelect, setOptionSelect] = useState(1);
  const [selectedEngines, setSelectedEngines] = useState([]);

  useEffect(() => {
    setSelectedEngines(engines);
  }, []);

  return (
    <>
      <div className="container pt-3 pb-5 text-center">
        <h2>Cars</h2>
        <div className="underline"></div>

        <div className="row">
          <div className="col-12 col-md-3">
            <Filters
              maxPrice={maxPrice}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
              setOptionSelect={setOptionSelect}
            ></Filters>
          </div>
          <div className="col-12 col-md-9">
            <div className="row row-cols-1 g-2 g-md-3 pt-3">
              <Car
                setCount={setCount}
                carCount={1000}
                setFullCart={setFullCart}
                fullColumn={true}
                minPrice={minPrice}
                maxPrice={maxPrice}
                optionSelect={optionSelect}
                selectedEngines={selectedEngines}
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
