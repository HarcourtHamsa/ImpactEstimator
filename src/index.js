import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <html lang="en" />
      meta=
      {[
        {
          name: "Description",
          content:
            "Web site created using react. This app is for buildForSDG challenge 2020",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#000000" },
        { charset: "utf-8" },
      ]}
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <title>BuildForSDG Challenge</title>
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
