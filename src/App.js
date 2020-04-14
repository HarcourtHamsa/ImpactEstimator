import React from "react";
import Nav from "./components/Nav";


export default function App() {
  return (
    <div>
      <Nav />
      <div className="container mt-5">
        <p className="mb-5 font-weight-bold">COVID19 IMPACT ESTIMATOR</p>

        <div className="row">
          <div className="col-xl-6">
            <dorm>
              <div className="form-control-group">
                <div className="form-row">
                  <div className="col-xl-6">
                    <label htmlFor="population">Population</label>
                    <input
                      type="text"
                      className="form-control mb-3"
                      id="population"
                      data-population
                    />
                  </div>
                  <div className="col-xl-6">
                    <label htmlFor="time-to-elapse">Time to elapse</label>
                    <input
                      type="text"
                      className="form-control mb-3"
                      data-time-to-elapse
                      id="time-to-rlapse"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-xl-6">
                    {" "}
                    <label htmlFor="reported-case">Reported cases</label>
                    <input
                      type="text"
                      className="form-control mb-3"
                      id="reported-case"
                      data-reported-case
                    />
                  </div>
                  <div className="col-xl-6">
                    {" "}
                    <label htmlFor="hospital-beds" className="">
                      Hostpital beds
                    </label>
                    <input
                      type="text"
                      className="form-control mb-3 "
                      id="hospital-beds"
                      data-total-hospital-beds
                    />
                  </div>
                </div>

                <label htmlFor="period-type" className="">
                  Period type
                </label>
                <select
                  className="browser-default custom-select mb-5"
                  id="period-type"
                  data-period-type
                >
                  <option value="2" selected>
                    Days
                  </option>
                  <option value="3">Weeks</option>
                  <option value="4">Months</option>
                </select>

                <button
                  type="submit"
                  className="btn p-3 pl-5 pr-5 rounded-0 btn-block"
                  data-go-estimate
                >
                  Get Estimate
                </button>
              </div>
            </dorm>
          </div>
        </div>
      </div>
    </div>
  );
}
