import { getAuth } from "@firebase/auth";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import GetCarDatas from "../../hooks/GetCarDatas";
import Cars from "../Cars/Cars";
import "./Carts.css";
import SingleCart from "./SingleCart/SingleCart";

const Cart = ({
  deleteCar,
  setCount,
  previousCount,
  selectedCars,
  setFullCart,
}) => {
  const [quantity, setQuantity] = useState(0);

  let history = useHistory();
  const { currentUser } = getAuth();
  const cars = GetCarDatas();

  const cart = JSON.parse(localStorage.getItem("cart"));
  // const currentCar = cart?.find((el) => el?.id === car?.id);
  // let currentQuantity = currentCar?.quantity;

  // const price = selectedCars.find((el) => el?.id === car?.id)?.price * quantity;

  useEffect(() => {
    // setQuantity(currentQuantity);
  }, []);
  console.log(
    cart?.map(
      (singleCart) => cars?.find((car) => car?.id === singleCart?.id)?.price
    )
  );

  const placedOrder = () => {
    if (!currentUser) {
      history.push("/login");
      localStorage.setItem("location", JSON.stringify("/cart"));
    } else {
      setFullCart([]);
      setCount(0);
      Swal.fire({
        title: "Success!",
        text: "Placed Order SuccessFully!",
        icon: "success",
        confirmButtonText: "OK",
      });
      localStorage.removeItem("cart");
    }
  };

  return (
    <>
      <div className="container pb-5 pt-3 text-center">
        <h2>Checkout Your Cart</h2>
        <div className="underline mb-4"></div>
        <div className="row">
          <div className="col-12 col-md-4">
            <form className="shadow p-3" onSubmit={placedOrder}>
              <h4>Enter Delivery Address</h4>
              <div className="text-start">
                <label htmlFor="name">Name:</label>
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  required
                />
                <label htmlFor="country">Country:</label>
                <input id="country" type="text" className="form-control" />
                <label htmlFor="district">District:</label>
                <input id="district" type="text" className="form-control" />
                <label htmlFor="address">Full Address:</label>
                <input
                  id="address"
                  type="text"
                  className="form-control"
                  required
                />
              </div>
              <button className="btn-lightblue btn mt-3" type="submit">
                Place Order
              </button>
            </form>
          </div>
          <div className="col-12 col-md-8 d-flex flex-column justify-content-center">
            {selectedCars?.map((car) => {
              return (
                <SingleCart
                  car={car}
                  deleteCar={deleteCar}
                  key={car?.id}
                  setCount={setCount}
                  previousCount={previousCount}
                  selectedCars={selectedCars}
                ></SingleCart>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
