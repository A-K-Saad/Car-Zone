import React from "react";
import { NavLink } from "react-router-dom";
import GetCarDatas from "../../hooks/GetCarDatas";
import "./Cars.css";

const Cars = ({ setCount, carCount, setFullCart }) => {
  const cars = GetCarDatas();

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
      <div className="row row-cols-1 row-cols-md-4 g-3 pt-3">
        {myCars
          .sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
          .map((car) => (
            <div className="col" key={car.id}>
              <div className="card text-center position-relative h-100 justify-content-between">
                <img
                  src={car.images[0]}
                  alt={car.name}
                  className="carImg"
                  onError={(event) => (event.target.src = car.images[0])}
                />
                <div className="p-3 d-grid">
                  <h5 className="pt-2 car-name text-primary">{car.name}</h5>
                  <h4 className="text-danger">${car.price}</h4>
                  <h6>{car.mpg}</h6>
                  <NavLink
                    to={`cars/${car.id}`}
                    className="position-absolute top-0 end-0"
                  >
                    <button className="btn btn-lightblue rounded-0">
                      <i className="fas fa-info-circle h4 m-0"></i>
                    </button>
                  </NavLink>
                  <button
                    className="btn btn-darkblue rounded-0 mt-2"
                    onClick={() => addtocart(car.id)}
                  >
                    <i className="fas fa-shopping-cart"></i> Add to Cart
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
