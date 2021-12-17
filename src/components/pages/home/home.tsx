import React from "react";
import { hot } from "react-hot-loader";
import { Link, Route, BrowserRouter } from "react-router-dom";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import Actions from "Actions";

import Atoms, { Logo } from "Atoms";

import "./assets/css/style.scss";

const Home: React.FC<any> = () => {
  const store = useSelector((store: RootStateOrAny) => store);
  const dispatch = useDispatch();

  return (
    <>
    </>
  );
};

export default React.memo(Home);
