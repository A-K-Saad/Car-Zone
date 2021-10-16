import React, { useEffect, useState } from "react";

const SingleCart = ({
  car,
  deleteCar,
  selectedCars,
  setCount,
  previousCount,
}) => {
  const [quantity, setQuantity] = useState(0);

  const cart = JSON.parse(localStorage.getItem("cart"));
  const currentCar = cart?.find((el) => el?.id === car?.id);
  let currentQuantity = currentCar?.quantity;

  const price = selectedCars.find((el) => el?.id === car?.id)?.price * quantity;

  useEffect(() => {
    setQuantity(currentQuantity);
  }, []);

  const handlePlusMinus = (isIncreasing) => {
    if (isIncreasing) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);

      currentCar.quantity = newQuantity;
      setCount(previousCount + 1);
    } else if (quantity !== 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);

      currentCar.quantity = newQuantity;
      setCount(previousCount - 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  return (
    <>
      <div className="col-12 py-2 d-flex justify-content-between align-items-center my-2 single-cart">
        <div className="d-flex align-items-center">
          <img src={car?.images[0]} alt="Car_Cart_Image" className="car-img" />
          <h6 className="ps-3 m-0 text-ellipsis">{car?.name}</h6>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center justify-content-between cart-btns h5 m-0 px-2 py-1 px-md-3 py-md-2 rounded-pill me-2 me-md-4 border">
            <button
              className="btn shadow-none plus-minus-btn bg-red rounded-circle"
              onClick={() => handlePlusMinus(false)}
            >
              <i className="fas fa-minus"></i>
            </button>
            <h4 className="m-0 w-2rem">{quantity}</h4>
            <button
              className="btn shadow-none plus-minus-btn bg-red rounded-circle"
              onClick={() => handlePlusMinus(true)}
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <button
            className="btn btn-delete justify-content-center d-flex align-items-center pt-1 pt-md-0"
            onClick={() => deleteCar(car)}
          >
            <i className="fas fa-times-circle m-0 h4"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleCart;
