import React, { useState } from "react";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import GetCarDatas from "../../../hooks/GetCarDatas";
import "../Cars.css";

const Cars = ({
  setCount,
  carCount,
  setFullCart,
  fullColumn,
  minPrice,
  maxPrice,
  optionSelect,
  selectedEngines,
}) => {
  const cars = GetCarDatas();
  const [allCars, setAllCars] = useState([]);

  const myCars = cars.slice(0, carCount);
  let emptyArray = [];

  useEffect(() => {
    if (myCars.length) {
      setAllCars(myCars);
    }
  }, [myCars.length]);

  useEffect(() => {
    setAllCars(emptyArray);
  }, [minPrice, maxPrice]);

  const filterCars = () => {
    myCars.map((car) => {
      if (car.price > minPrice && car.price < maxPrice) {
        emptyArray.push(car);
      }
    });
  };

  filterCars();

  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    cart = [];
  }
  let cartCount = 0;

  const addtocart = (carId) => {
    const car = {
      id: carId,
      quantity: 1,
    };
    const exist = cart.find((el) => el.id === carId);
    if (exist) {
      exist.quantity = exist.quantity + 1;
    } else {
      cart.push(car);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    cartCount = cartCount + 1;
    //Setting Count Data
    let myCartCount = cart.map((count) => count.quantity);
    const myCount = myCartCount.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    //Updating Count and Cart
    setCount(myCount);
    setFullCart(cart);
  };

  return (
    <>
      {allCars
        .sort((a, b) =>
          optionSelect === 2
            ? parseFloat(a.price) - parseFloat(b.price)
            : optionSelect === 3
            ? parseFloat(b.mileage) - parseFloat(a.mileage)
            : optionSelect === 4
            ? parseFloat(a.mileage) - parseFloat(b.mileage)
            : parseFloat(b.price) - parseFloat(a.price)
        )
        .map((car) =>
          !fullColumn ? (
            <div className="col" key={car?.id}>
              <div className="card text-center position-relative h-100 justify-content-between shadow rounded-3 overflow-hidden">
                <Link to={`/cars/${car?.id}`}>
                  <img
                    src={car?.images[0]}
                    alt={car?.name}
                    className="carImg"
                    onError={(event) => (event.target.src = car.images[0])}
                  />
                </Link>
                <div className="p-3 d-grid">
                  <Link
                    to={`/cars/${car?.id}`}
                    className="text-decoration-none"
                  >
                    <h5 className="pt-2 car-name text-primary">{car?.name}</h5>
                    <h4 className="text-danger">${car?.price}</h4>
                    <h6 className="text-dark">{car?.mpg}</h6>
                    <NavLink
                      to={`cars/${car?.id}`}
                      className="position-absolute top-0 end-0"
                    >
                      <button className="btn btn-lightblue rounded-0">
                        <i className="fas fa-info-circle h4 m-0"></i>
                      </button>
                    </NavLink>
                  </Link>
                  <button
                    className="btn btn-darkblue rounded-0 mt-2"
                    onClick={() => addtocart(car?.id)}
                  >
                    <i className="fas fa-shopping-cart"></i> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="col-12 shadow p-3" key={car.id}>
              <div className="d-flex flex-column flex-md-row p-3 p-md-0">
                <Link to={`/cars/${car?.id}`} className="text-decoration-none">
                  <div className="position-relative overflow-hidden">
                    <img
                      src={car?.images[0]}
                      alt="Car_Image"
                      onError={(event) =>
                        (event.target.src =
                          "https://www.motortrend.com/uploads/sites/10/2016/11/2017-maserati-granturismo-sport-convertible-angular-front.png")
                      }
                      className="car-image"
                    />
                    <div className="price">
                      <h6 className="m-0">${car?.price}</h6>
                    </div>
                  </div>
                </Link>
                <div className="ps-0 ps-md-3 pt-3 pt-md-0 d-flex flex-column justify-content-between w-100">
                  <Link
                    to={`/cars/${car.id}`}
                    className="text-decoration-none text-dark"
                  >
                    <h5>{car?.name}</h5>
                    <div className="d-flex row mt-4">
                      <div className="d-flex flex-column border-end px-2 col-6 col-md-3">
                        <small className="text-secondary">
                          <i className="fas fa-tachometer-alt m-0 me-1"></i>
                          Mileage:
                        </small>
                        <h6>{car?.mileage}</h6>
                      </div>
                      <div className="d-flex flex-column border-end px-2 col-6 border-end-0-xssm col-md-3">
                        <small className="text-secondary">
                          <i className="fas fa-gas-pump m-0 me-1"></i>MPG:
                        </small>
                        <h6>{car?.mpg}</h6>
                      </div>
                      <div className="d-flex flex-column border-end px-2 col-6 col-md-3">
                        <small className="text-secondary">
                          <i className="fas fa-code-branch m-0 me-1"></i>Engine:
                        </small>
                        <h6>{car?.engine}</h6>
                      </div>
                      <div className="d-flex flex-column px-2 col-6 col-md-3">
                        <small className="text-secondary">
                          <i className="fas fa-thermometer-full m-0 me-1"></i>
                          Fuel Type:
                        </small>
                        <h6>{car?.fuel_type}</h6>
                      </div>
                    </div>
                  </Link>
                  <div>
                    <button
                      className="btn btn-darkblue rounded-0 mt-2"
                      onClick={() => addtocart(car.id)}
                    >
                      <i className="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      {!allCars.length && (
        <>
          <div className="text-center">
            <img
              src="https://image.flaticon.com/icons/png/512/65/65786.png"
              alt="Not Found"
              style={{ width: "12rem" }}
            />
            <h1 className="text-secondary display-5 mb-0">OOPS!</h1>
            <h4 className="mt-0">
              No cars for minumum {minPrice} and maximum {maxPrice}!!
            </h4>
          </div>
        </>
      )}
    </>
  );
};

export default Cars;
