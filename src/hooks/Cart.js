import { useState, useEffect } from "react";
const CartDetails = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  let myCartCount = cart?.map((count) => count.quantity);
  const myCount = myCartCount?.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  const [count, setCount] = useState(myCount);
  useEffect(() => {
    setCount(myCount);
  }, []);
  return count;
};
export default CartDetails;
