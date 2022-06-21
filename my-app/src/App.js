import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Nabvar";
import About from "./components/About";
import { useState } from "react";

function App() {
  const [writing, setWriting] = useState("dark");
  let clicking = () => {
    if (writing === "light") {
      setWriting("dark");
      document.body.style.background = "#040114";
    } else {
      setWriting("light");
      document.body.style.background = "#a26bad33";
    }
  };

  let convert = () => {
    settexting(texting.toUpperCase());
  };

  let convertt = () => {
    settexting(texting.toLowerCase());
  };

  const [aboutstyling, setaboutstyling] = useState({
    border: "2px solid red",
    margin: "5rem",
    height: "10rem",
    padding: "5rem",
  });

  const [texting, settexting] = useState("this is by default");
  let changing = (e) => {
    settexting(e.target.value);
  };

  return (
    <>
      <Navbar title="VERMAJI" clicker={clicking} writing={writing} />
      <div className="container my-5">
        <About aboutstyling={aboutstyling} val={texting} changing={changing} />
        <button
          type="button"
          className="btn btn-primary"
          id="btnstyling1"
          onClick={convert}
        >
          CONVERT
        </button>
        <button
          type="button"
          className="btn btn-primary mx-3"
          id="btnstyling2"
          onClick={convertt}
        >
          CONVERT
        </button>
      </div>
    </>
  );
}

export default App;
