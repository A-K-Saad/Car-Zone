import React from "react";
import { useHistory } from "react-router";
import "./Sell.css";

const Sell = () => {
  const history = useHistory();
  return (
    <>
      <div className="bg-warning h-100vh">
        <div className="container pt-4 pt-md-5">
          <div className="row justify-content-between">
            <div className="col-12 col-md-4 h-77vh d-flex align-items-center justify-content-center">
              <form
                className="w-100 bg-white shadow p-4 d-grid"
                row="100"
                onSubmit={(event) => {
                  event.preventDefault();
                  history.push("/");
                }}
              >
                <label>VIN:</label>
                <div className="position-relative d-grid mb-1">
                  <input
                    type="text"
                    className="outline-none rounded-0 py-2 ps-5 input-shadow"
                    placeholder="Enter Your Car VIN"
                    required
                    maxLength="15"
                  />
                  <i className="fas fa-hashtag position-absolute top-0 bottom-0 start-0 m-auto d-flex align-items-center px-3 h5 bg-dark text-light"></i>
                </div>
                <label>Car Info:</label>
                <textarea
                  className="w-100 outline-none rounded-0 mt-2 p-1 input-shadow"
                  rows="7"
                  placeholder="Describe Yor Car Info"
                ></textarea>
                <button
                  type="submit"
                  className="bg-warning rounded-0 btn text-light mt-3 py-2"
                >
                  Continue
                </button>
              </form>
            </div>
            <div className="col-12 col-md-7 d-flex flex-column justify-content-center text-start mt-5 mt-md-0">
              <div className="w-100">
                <h2>Try Your Car OFF Rental</h2>
                <p className="m-0">
                  GET READY FOR THE TRIP <br /> WITH YOUR OLD CAR.
                </p>
              </div>
              <img
                src="https://pngimg.com/uploads/ferrari/ferrari_PNG10667.png"
                alt="Car_Image"
                onError={(event) =>
                  (event.target.src =
                    "https://pngimg.com/uploads/ferrari/ferrari_PNG10667.png")
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sell;
