import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Home from "./pages/home";
import FirstSem from "./pages/firstSem";
import Contents from "./pages/contents";
import Content from "./pages/content";
import NotFound from "./pages/notFound";

const axios = require("axios");

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="1st-sem" element={<FirstSem />} />
        <Route path="contents" element={<Contents />} />
        <Route path="contents/:id" element={<Content />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
  // document.getElementsByClassName("content")[0]
);

// ReactDOM.render(
//   <script
//     src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
//     integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
//     crossorigin="anonymous"
//   ></script>,
//   document.getElementById("scr")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
