import { getAuth } from "@firebase/auth";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import GetCarDatas from "../../hooks/GetCarDatas";
import "./Carts.css";
import SingleCart from "./SingleCart/SingleCart";

const Cart = ({
  car,
  deleteCar,
  setCount,
  previousCount,
  selectedCars,
  setFullCart,
}) => {
  const [quantity, setQuantity] = useState(0);

  let history = useHistory();
  const { currentUser } = getAuth();

  const cart = JSON.parse(localStorage.getItem("cart"));
  const currentCar = cart?.find((el) => el?.id === car?.id);
  let currentQuantity = currentCar?.quantity;

  const price = selectedCars.find((el) => el?.id === car?.id)?.price * quantity;

  useEffect(() => {
    setQuantity(currentQuantity);
  }, []);

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
        <button className="btn-lightblue btn mt-3" onClick={placedOrder}>
          Place Order
        </button>
      </div>
    </>
  );
};

export default Cart;
