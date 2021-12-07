import React from "react";
import { hot } from "react-hot-loader";
import Contact from "./contact";
import { Link, Route, BrowserRouter } from "react-router-dom";

import "./assets/css/circleAnim.scss";
import "./assets/css/about.scss";

import Logo from './assets/img/project.png';
import Contact from "./contact";

import circle from './assets/img/circle.png'

const About = () => {
  return (
    <section className="home_about">

      <div className="about__main">

        <div className="circle-wrapper">
          <img src={circle} className="circle" />
          <img src={circle} className="circle" />
          <img src={circle} className="circle" />
          <img src={circle} className="circle" />
          <img src={circle} className="circle" />
        </div>

        <div className="about__main-logo">
          <span className="logo-name">TOV</span>
          <span className="logo-desc"></span>
        </div>

      </div>
      <span className="material-icons expend_more">expand_more</span>
    </section>
  );
};

export default hot(module)(About);
