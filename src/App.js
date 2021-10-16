import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import CarDetails from "./components/CarDetails/CarDetails";
import Cars from "./components/Cars/Cars";
import Cart from "./components/Carts/Cart";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Sell from "./components/Sell/Sell";
import CartCount from "./hooks/Cart";
import GetCarDatas from "./hooks/GetCarDatas";

function App() {
  const cars = GetCarDatas();

  const [count, setCount] = useState(0);
  const [fullCart, setFullCart] = useState([]);

  const previousCount = CartCount();

  const selectedCars = fullCart?.map((el) =>
    cars?.find((item) => item.id === el.id)
  );

  useEffect(() => {
    setCount(previousCount);
    setFullCart(cart);
  }, []);

  const cart = JSON.parse(localStorage.getItem("cart"));

  const deleteCar = (car) => {
    cart.splice(car, 1);

    setFullCart(cart);
    setCount(cart.length);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <>
      <div className="h-m-screen d-flex flex-column justify-content-between">
        <BrowserRouter>
          <Navbar count={count}></Navbar>
          <Switch>
            <Route exact path="/">
              <Home setCount={setCount} setFullCart={setFullCart}></Home>
            </Route>
            <Route exact path="/cars">
              <Cars setCount={setCount} setFullCart={setFullCart}></Cars>
            </Route>
            <Route path="/cars/:carId">
              <div className="container">
                <CarDetails
                  setCount={setCount}
                  carCount={1000}
                  setFullCart={setFullCart}
                ></CarDetails>
              </div>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/cart">
              {selectedCars?.length ? (
                <Cart
                  deleteCar={deleteCar}
                  setCount={setCount}
                  previousCount={count}
                  selectedCars={selectedCars}
                  count={count}
                  setFullCart={setFullCart}
                ></Cart>
              ) : (
                <div className="py-4 py-md-5 text-center">
                  <h1 className="mt-4">No cart To show</h1>
                  <h4>Add cars to your cart to checkout them</h4>
                  <Link to="/cars">
                    <button className="btn btn-darkblue mt-5">Back</button>
                  </Link>
                </div>
              )}
            </Route>
            <PrivateRoute exact path="/sell">
              <Sell></Sell>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
