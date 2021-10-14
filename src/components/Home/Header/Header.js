import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item item-1 active ps-0 ps-md-2">
            <div className="d-flex pt-3 align-items-center justify-content-start h-md-28rem">
              <div className="col-12 col-md-5 ps-2 ps-md-5 text-light text-start">
                <h1 className="display-2">
                  FIND NEW <br /> ROAD
                </h1>
                <p className="d-none d-md-block">
                  IF YOU WANT TO GO AHEAD, DON'T WASTE YOUR TIME AND BOOK THE
                  LAMBORGINI NOW! <br />
                  <br /> WE'RE ALWAYS WITH YOU!
                </p>
                <small className="d-block d-md-none">
                  IF YOU WANT TO GO AHEAD, DON'T WASTE YOUR TIME AND BOOK THE
                  LAMBORGINI NOW! <br />
                  <br /> WE'RE ALWAYS WITH YOU!
                </small>
                <Link to="/cars">
                  <button className="btn btn-lightblue pe-auto mt-3">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item item-2 ps-0 ps-md-2">
            <div className="d-flex pt-3 align-items-center justify-content-start h-md-28rem">
              <div className="col-12 col-md-5 ps-2 ps-md-5 text-light text-start">
                <h1 className="display-4">
                  BUY PREMIUM LUXURY <br /> CARS
                </h1>
                <p className="d-none d-md-block">
                  BUY CARS TO GET PREMIUM COSTS IN A CHEAP COST. <br /> LET US
                  HELP YOU TO MAKE YOUR LIFE EASIER AND LUXURIOUS.
                </p>
                <small className="d-block d-md-none pe-3">
                  BUY CARS TO GET PREMIUM COSTS IN A CHEAP COST. LET US HELP YOU
                  TO MAKE YOUR LIFE EASIER AND LUXURIOUS.
                </small>
                <Link to="/cars">
                  <button className="btn btn-lightblue pe-auto mt-3">
                    Book Now
                  </button>
                </Link>
              </div>
              <div className="col-12 col-md-7 pt-5">
                <img
                  src="https://purepng.com/public/uploads/large/purepng.com-blue-honda-accord-hybrid-carcarvehicletransporthonda-961524653570veqwm.png"
                  alt="Car_Pic"
                />
              </div>
            </div>
          </div>
          <div className="carousel-item item-3 ps-0 ps-md-2">
            <div className="d-flex pt-3 align-items-center justify-content-end h-md-28rem">
              <div className="col-12 col-md-5 pe-2 pe-md-5 text-light text-end">
                <h1 className="display-5">
                  THE WIND IS EVEN <br /> NEVER CLOSE <br /> TO US
                </h1>
                <p className="d-none d-md-block">
                  GET THE BEST LOOKING FIRST EVER BEST MODEL. INTRODUCTION IN
                  BELIEVE.
                </p>
                <small className="d-block d-md-none ps-3">
                  GET THE BEST LOOKING FIRST EVER BEST MODEL. INTRODUCTION IN
                  BELIEVE.
                </small>
                <Link to="/cars">
                  <button className="btn btn-lightblue pe-auto mt-3">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
