import "./sidebar.css";
import React from "react";
import ReactDOM from "react-dom";
import { getSelectionRange } from "@testing-library/user-event/dist/utils";

import bootstrap from "bootstrap/dist/js/bootstrap.js";

import downloadJoke from "./../APIs/jokes";
import getLocation from "./../APIs/weather";

downloadJoke();
getLocation();

function Sidebar() {
  return (
    <div className="sidebar col-12 col-md-3">
      <div className="card">
        <div className="card-header">
          Weather &nbsp;&nbsp;&nbsp;
          <button onClick={getLocation} className="btn btn-light">
            <i className="fa-solid fa-repeat"></i>
          </button>
          &nbsp;&nbsp;&nbsp;
          {/* modal code */}
          <button
            type="button"
            className="btn btn-light"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            ?
          </button>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Weather - Any problem?
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  This function needs to access your location for further
                  processing.
                </div>
                {/* <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    X
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="card-body" id="weather">
          Allow location access to view weather report
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          Chuck Norris Jokes &nbsp;&nbsp;&nbsp;
          <button onClick={downloadJoke} className="btn btn-light">
            <i className="fa-solid fa-repeat"></i>
          </button>
        </div>
        <div className="card-body" id="joke"></div>
      </div>

      <div className="card">
        <div className="card-header">
          Covid-19 Updates of BD &nbsp;&nbsp;&nbsp;
        </div>
        <div className="card-body" id="covidGraph">
          <a href="https://corona.dnsforfamily.com/graph.png?c=bd">
            <img
              src="https://corona.dnsforfamily.com/graph.png?c=bd"
              className="img-fluid rounded"
              alt="[ Graph failed to load ]"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
