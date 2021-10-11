import React, { useState } from "react";
import GetCarDatas from "../../hooks/GetCarDatas";
import Cars from "../Cars/Cars";
import "./Home.css";

const Home = ({ setCount }) => {
  const cars = GetCarDatas();

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
  };

  return (
    <>
      <section className="py-5 mt-5">
        <div className="container py-3">
          <Cars addtocart={addtocart}></Cars>
        </div>
      </section>
    </>
  );
};

export default Home;
