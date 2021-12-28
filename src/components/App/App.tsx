import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link, Route, BrowserRouter, Router } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions';

import MainRouter from '../Router/router';
import Bases, { Header } from 'Bases';

import "./assets/css/style.scss";

const App: React.FC<any> = () => {
	useEffect(() => {
		return () => {
			0;
		};
	}, []);

	return (
		<>
			<Header />
			<MainRouter />
		</>
	);
};

export default App;
