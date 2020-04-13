import React from "react";
import Nav from "./components/Nav";
import {Helmet} from "react-helmet";

export default function App() {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <title>BuildForSDG Challenge</title>
        <meta
          name="Description"
          content="Web site created using react. This app is for buildForSDG challenge 2020"
        />
      </Helmet>
      <Nav />
      <div className="container mt-5">
        <p className="mb-5 font-weight-bold">COVID19 IMPACT ESTIMATOR</p>

        <div className="row">
          <div className="col-xl-6">
            <dorm>
              <div className="form-control-group">
                <div className="form-row">
                  <div className="col-xl-6">
                    <label htmlFor="#population" className="">
                      Population
                    </label>
                    <input
                      type="text"
                      className="form-control mb-3"
                      id="population"
                      data-population
                    />
                  </div>
                  <div className="col-xl-6">
                    <label htmlFor="#population" className="">
                      Time to elapse
                    </label>
                    <input
                      type="text"
                      className="form-control mb-3"
                      data-time-to-elapse
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-xl-6">
                    {" "}
                    <label htmlFor="#population" className="">
                      Reported cases
                    </label>
                    <input
                      type="text"
                      className="form-control mb-3"
                      data-reported-case
                    />
                  </div>
                  <div className="col-xl-6">
                    {" "}
                    <label htmlFor="#population" className="">
                      Hostpital beds
                    </label>
                    <input
                      type="text"
                      className="form-control mb-3 "
                      data-total-hospital-beds
                    />
                  </div>
                </div>

                <label htmlFor="#population" className="">
                  Period type
                </label>
                <select
                  className="browser-default custom-select mb-5"
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
                  className="btn p-3  pl-5 pr-5 rounded-0 btn-block"
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
