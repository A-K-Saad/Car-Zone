import React from "react";

const Filters = ({ maxPrice, setMaxPrice, setMinPrice, setOptionSelect }) => {
  return (
    <>
      <h2>
        <i className="fas fa-sort-amount-up m-0 me-2"></i>
        Filters:
      </h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Price:
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body px-2 py-3">
              <div className="d-flex align-items-center">
                <div className="input-group">
                  <span
                    className="input-group-text py-1 px-2"
                    id="basic-addon1"
                  >
                    $
                  </span>
                  <input
                    type="number"
                    className="form-control p-0 shadow-none"
                    aria-label="Min"
                    aria-describedby="basic-addon1"
                    min="1"
                    max={maxPrice - 1}
                    defaultValue="1"
                    onChange={(event) => {
                      setMinPrice(parseInt(event.target.value));
                      if (event.target.value === "") {
                        setMinPrice(1);
                      }
                    }}
                    onBlur={(event) => {
                      if (!event.target.value) {
                        event.target.value = 1;
                      }
                    }}
                  />
                </div>
                <h6 className="m-0 px-2">to</h6>
                <div className="input-group">
                  <span
                    className="input-group-text py-1 px-2"
                    id="basic-addon1"
                  >
                    $
                  </span>
                  <input
                    type="number"
                    className="form-control p-0 shadow-none"
                    aria-label="Max"
                    aria-describedby="basic-addon1"
                    min="0"
                    defaultValue="80000"
                    onChange={(event) =>
                      setMaxPrice(parseInt(event.target.value) || 80000)
                    }
                    onBlur={(event) => {
                      if (!event.target.value) {
                        event.target.value = 80000;
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Sort:
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-3 px-2">
              <h6>Select By Price or Mileage</h6>
              <select
                className="form-select text-center mb-3"
                aria-label="Default select example"
                onChange={(event) =>
                  setOptionSelect(parseInt(event.target.value))
                }
              >
                <option defaultValue disabled>
                  ---Select An Option---
                </option>
                <option value="1">Big to Small Price</option>
                <option value="2">Small to Big Price</option>
                <option value="3">Big to Small Mileage</option>
                <option value="4">Small to Big Mileage</option>
              </select>
            </div>
          </div>
        </div>
        {/* <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Engine:
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {engines.map((engine, index) => {
                      return (
                        <>
                          <div className="text-start" key={index}>
                            <input
                              type="checkbox"
                              id={index}
                              className="shadow-none"
                              defaultChecked
                              value={engine}
                              onChange={(event) => {
                                if (event.target.checked) {
                                  if (engines.indexOf(engine) === -1) {
                                    engines.push(engine);
                                  }
                                } else {
                                  if (engines.indexOf(engine) !== -1) {
                                    engines.splice(engines.indexOf(engine), 1);
                                  }
                                }
                                setSelectedEngines(engines);
                                console.log(selectedEngines);
                                console.log(engines);
                              }}
                            />
                            <label htmlFor={index} className="ps-3">
                              {engine}
                            </label>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div> */}
      </div>
    </>
  );
};

export default Filters;
