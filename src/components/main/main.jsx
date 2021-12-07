import React from "react";
import { hot } from "react-hot-loader";
import { Link, Route, Routes } from "react-router-dom";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import "./assets/css/style.scss";

import Home from "../pages/home/home";

import Login from "../pages/auth/login/login";
import Register from "../pages/auth/register/Register";
import Profile from "../pages/auth/profile/Profile";

import Test from "../pages/test/test";


const Main = () => {
  const token = localStorage?.getItem('access_token');
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Home/>}></Route>

        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        
        <Route path="/test" element={<Test/>} />

      </Routes>
    </main>             
  )
}
export default hot(module)(Main);