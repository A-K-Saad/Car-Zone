import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Cars from "./components/Cars/Cars";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./hooks/Cart";
import GetCarDatas from "./hooks/GetCarDatas";

function App() {
  const cars = GetCarDatas();
  const [count, setCount] = useState(0);
  const previousCount = Cart();
  useEffect(() => {
    setCount(previousCount);
  }, []);
  console.log(count);

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
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
