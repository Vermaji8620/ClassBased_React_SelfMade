import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress: 0,
  };

  numbers = [1, 2, 3, 4, 5, 6, 7];

  // apiKey = process.env.meraApiKey;
  apiKey = "fd73b74c6aea4ca39deac50f80cb2ffa";

  changeProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };
  render() {
    return (
      <div>
        <Router>
          <div>
            <LoadingBar color="#f11946" progress={this.state.progress} />
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <News
                    changeProgress={this.changeProgress}
                    category="general"
                    apiKey={this.apiKey}
                    key={this.numbers.slice(0, 1)}
                    country="us"
                  />
                }
              ></Route>
              <Route
                path="/entertainment"
                element={
                  <News
                    changeProgress={this.changeProgress}
                    category="entertainment"
                    apiKey={this.apiKey}
                    key={this.numbers.slice(1, 2)}
                  />
                }
              ></Route>
              <Route
                path="/business"
                element={
                  <News
                    changeProgress={this.changeProgress}
                    category="business"
                    apiKey={this.apiKey}
                    key={this.numbers.slice(2, 3)}
                  />
                }
              ></Route>
              <Route
                path="/health"
                element={
                  <News
                    changeProgress={this.changeProgress}
                    category="health"
                    key={this.numbers.slice(3, 4)}
                    apiKey={this.apiKey}
                  />
                }
              ></Route>
              <Route
                path="/science"
                element={
                  <News
                    changeProgress={this.changeProgress}
                    category="science"
                    apiKey={this.apiKey}
                    key={this.numbers.slice(4, 5)}
                  />
                }
              ></Route>
              <Route
                path="/sports"
                element={
                  <News
                    changeProgress={this.changeProgress}
                    category="sports"
                    apiKey={this.apiKey}
                    key={this.numbers.slice(5, 6)}
                  />
                }
              ></Route>
              <Route
                path="/technology"
                element={
                  <News
                    changeProgress={this.changeProgress}
                    category="technology"
                    apiKey={this.apiKey}
                    key={this.numbers.slice(6, 7)}
                  />
                }
              ></Route>
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}
