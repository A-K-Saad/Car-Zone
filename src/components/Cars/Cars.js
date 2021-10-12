import React from "react";
import GetCarDatas from "../../hooks/GetCarDatas";
import "./Cars.css";

const Cars = ({ addtocart }) => {
  const cars = GetCarDatas();

  return (
    <>
      <div className="row row-cols-1 row-cols-md-4 g-2">
        {cars
          .sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
          .map((car) => (
            <div className="col" key={car.id}>
              <div className="card text-center">
                <img
                  src={car.images[0]}
                  alt={car.name}
                  className="carImg"
                  onError={(event) => (event.target.src = car.images[0])}
                />
                <div className="p-3">
                  <h5 className="pt-2 car-name text-primary">{car.name}</h5>
                  <h4 className="text-danger">${car.price}</h4>
                  <h6>{car.mpg}</h6>
                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => addtocart(car.id)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Cars;
