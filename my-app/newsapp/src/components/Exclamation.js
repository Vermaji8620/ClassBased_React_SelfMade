import React, { Component } from "react";
import Exclamation from "./Exclamation.jpg";

export class Exclamation extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={Exclamation} alt="exclamation" />
      </div>
    );
  }
}

export default Exclamation;
