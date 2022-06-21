import React, { Component } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark"
          style={{ height: "3rem", fontSize: "1.2rem", color: "white" }}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
              Navbar
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    ENTERTAINMENT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    BUSINESS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    HEALTH
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    SCIENCE
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    SPORTS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    TECHNOLOGY
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
