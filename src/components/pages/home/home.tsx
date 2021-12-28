import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Atoms, { Logo, MoveButton } from 'Atoms';
import Organisms, { BannerMain } from 'Organisms';

import './assets/css/style.scss';

const Home: React.FC<any> = () => {
	const store = useSelector((state: RootStateOrAny) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		AOS.init();
		return () => {
			0;
		};
	}, []);

	return (
		<>
			<BannerMain />
			<article className="scroll_page sc-1">
				<h1 
					className="title" 
					data-aos="zoom-in"
					data-aos-easing="ease-in-out"
					data-aos-duration="1000"
				>
					미래를 선도하는 기술
				</h1>
				<span data-aos="fade-right">
					
				</span>
			</article>
		</>
	);
};

export default Home;
