import React from "react";
import { hot } from "react-hot-loader";
import { Link, Route, BrowserRouter } from "react-router-dom";

import "./assets/css/style.scss";

import About from "./about";

const Home = () => {
  return (
    <div className="home">
      <About></About>
    </div>
  );
}

export default hot(module)(Home);
