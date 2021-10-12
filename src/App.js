import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Cars from "./components/Cars/Cars";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import CartCount from "./hooks/Cart";
import GetCarDatas from "./hooks/GetCarDatas";

function App() {
  const cars = GetCarDatas();
  const [count, setCount] = useState(0);
  const previousCount = CartCount();
  useEffect(() => {
    setCount(previousCount);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar count={count}></Navbar>
        <Switch>
          <Route exact path="/">
            <Home setCount={setCount}></Home>
          </Route>
          <Route exact path="/cars">
            <div className="container">
              <Cars></Cars>
            </div>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/cart">
            <Cart></Cart>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
