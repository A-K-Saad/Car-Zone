import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import GetCarDatas from "../../hooks/GetCarDatas";
import "./CarDetails.css";

const CarDetails = ({ setCount, carCount, setFullCart }) => {
  const [activeImg, setActiveImg] = useState();
  const { carId } = useParams();
  const cars = GetCarDatas();

  const newCar = cars.find((car) => car.id === parseInt(carId));

  useEffect(() => {
    setActiveImg(newCar?.images[0]);
  }, []);

  //Adding to cart

  const myCars = cars.slice(0, carCount);

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
    setCount(myCount);
    setFullCart(cart);
  };

  return (
    <>
      <div className="text-center">
        <div className="row py-5 mt-3 mt-md-5">
          <div className="col-12 col-md-6 text-center">
            <img
              src={activeImg || newCar?.images[0]}
              alt="Big Pic"
              onError={(event) => (event.target.src = activeImg)}
              className="big-car-img my-3"
            />
            <div className="little-image">
              {newCar?.images.map((image) => {
                return (
                  <img
                    src={image}
                    alt="Little_Cars"
                    className={`mx-2 my-1 p-1 border pointer ${
                      activeImg === image && "active-img"
                    }`}
                    onError={(event) => (event.target.src = image)}
                    onClick={() => setActiveImg(image)}
                    key={image}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-12 col-md-6 pt-4 pt-md-0 ps-2 ps-md-5">
            <h2 className="text-darkblue">{newCar?.name}</h2>
            <div className="underline mb-3"></div>
            <h4 className="text-danger">${newCar?.price}</h4>
            <div className="text-start">
              <p>VIN: {newCar?.vin}</p>
              <i className="fas fa-map-marker-alt h5 me-2 text-dark"></i>
              {newCar?.carLocation}
              <div className="d-flex align-items-center py-2">
                <i className="fas fa-tachometer-alt text-dark h2 my-0 me-3"></i>
                <div className="d-flex flex-column justify-content-between">
                  <p className="m-0">Milage: </p>
                  <h6 className="m-0">{newCar?.mileage}</h6>
                </div>
              </div>
              <div className="d-flex align-items-center py-2">
                <i className="fas fa-gas-pump text-dark h2 my-0 me-3"></i>
                <div className="d-flex flex-column justify-content-between">
                  <p className="m-0">MPG: </p>
                  <h6 className="m-0">{newCar?.mpg}</h6>
                </div>
              </div>
              <div className="d-flex align-items-center py-2">
                <i className="fas fa-code-branch text-dark h2 my-0 me-3"></i>
                <div className="d-flex flex-column justify-content-between">
                  <p className="m-0">Engine: </p>
                  <h6 className="m-0">{newCar?.engine}</h6>
                </div>
              </div>
              <div className="d-flex align-items-center flex-column justify-content-center mt-4">
                <button
                  className="btn btn-darkblue"
                  onClick={() => addtocart(newCar.id)}
                >
                  <i className="fas fa-shopping-cart"></i> Add to Cart
                </button>
                <Link to="/cars">
                  <button className="btn btn-dark my-3">
                    <i className="fas fa-car"></i> Back to Cars
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
