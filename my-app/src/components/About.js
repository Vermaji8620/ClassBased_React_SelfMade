import React from "react";

function About(props) {
  return (
    <div>
      <div className="form-floating">
        <textarea
          className="form-control"
          id="floatingTextarea2"
          style={props.aboutstyling}
          value={props.val}
          onChange={props.changing}
        ></textarea>
      </div>
    </div>
  );
}

export default About;
