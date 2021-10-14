import { getAuth } from "@firebase/auth";
import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import CarDetails from "./components/CarDetails/CarDetails";
import Cars from "./components/Cars/Cars";
import Cart from "./components/Cart/Cart";
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
  const [cartChecked, setCartChecked] = useState(false);

  const previousCount = CartCount();
  const { currentUser } = getAuth();

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
      <BrowserRouter>
        <Navbar count={count}></Navbar>
        <Switch>
          <Route exact path="/">
            <Home setCount={setCount} setFullCart={setFullCart}></Home>
          </Route>
          <Route exact path="/cars">
            <div className="container mt-4 mt-md-5 py-5 text-center">
              <h2>Popular Cars</h2>
              <div className="underline"></div>
              <Cars
                setCount={setCount}
                carCount={1000}
                setFullCart={setFullCart}
              ></Cars>
              {/* Back To Home */}
              <Link to="/">
                <button className="btn btn-lightblue mx-auto mt-5 px-4 py-2">
                  <i className="fas fa-home"></i> Back To Home
                </button>
              </Link>
            </div>
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
            {cartChecked ? (
              () => {
                localStorage.removeItem("cart");
                setTimeout(() => {
                  setFullCart([]);
                  setCartChecked(false);
                }, 3000);
                return (
                  <div className="text-center">
                    <img
                      src="https://i.pinimg.com/originals/e8/06/52/e80652af2c77e3a73858e16b2ffe5f9a.gif"
                      alt="Right_Image"
                      onError={(event) =>
                        (event.target.src =
                          "https://i.pinimg.com/originals/e8/06/52/e80652af2c77e3a73858e16b2ffe5f9a.gif")
                      }
                      className="mt-5 pt-5 d-block mx-auto success-img"
                    />
                    <Link to="/">
                      <button className="btn btn-darkblue mt-5">
                        Back To Home
                      </button>
                    </Link>
                  </div>
                );
              }
            ) : selectedCars?.length ? (
              <div className="container py-4 py-md-5 mt-5 text-center">
                <h2>Checkout Your Cart</h2>
                <div className="underline mb-4"></div>
                <div className="row">
                  {selectedCars?.map((car) => {
                    return (
                      <Cart
                        car={car}
                        deleteCar={deleteCar}
                        key={car?.id}
                        setCount={setCount}
                        previousCount={count}
                        selectedCars={selectedCars}
                      ></Cart>
                    );
                  })}
                </div>
                <button
                  className="btn-lightblue btn mt-5"
                  onClick={setCartChecked}
                >
                  Place Order
                </button>
              </div>
            ) : (
              <div className="py-4 py-md-5 mt-5 text-center">
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
      </BrowserRouter>
    </>
  );
}

export default App;
