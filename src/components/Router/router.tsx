import React from "react";
import { hot } from "react-hot-loader";
import { Link, Route, Routes } from "react-router-dom";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import Home from "../pages/home/home";

import "./assets/css/style.scss";

import Templates, {Frame} from "Templates";

const MainRouter: React.FC<any> = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Templates.Frame />} />
      </Routes>
    </>
  );
};
export default MainRouter;
