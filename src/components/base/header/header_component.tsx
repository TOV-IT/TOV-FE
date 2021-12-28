import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link, Route, BrowserRouter, Router } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions';
import Atoms, { Logo } from 'Atoms';

const StyledHeader = styled.header.attrs((props) => ({}))`
	${(props) => {
		const headerColor = props.color;
		const headerBgColor = props.color === `#000` ? `rgba(255, 255, 255, 0.9)` : `transparent`;
		const headerBorderColor = props.color === `#000` ? props.theme.palette.$line_black : `transparent`;

		const baseBlack = props.theme.palette.$base_black;
		const desktopHeight = props.theme.size.$header_desktop_line_height;
		const mobileHeight = props.theme.size.$header_mobile_line_height;
		return css`
			z-index: 100;
			position: fixed;
			top: 0%;
			left: 0%;
			/* left: 50%; */
			/* transform: translateX(-50%); */
			width: 100%;
			height: ${desktopHeight};
			padding: 0 5%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 0.5px solid ${headerBorderColor};
			background-color: ${headerBgColor};
			will-change: background-color;
			transition: 0.2s ease-in-out;

			.logo {
				img {
					width: 100px;
				}
			}

			nav {
				a {
					color: ${headerColor};
					margin: 0 5px;
					font-size: 18px;
					font-weight: 400;
					display: inline-block;

					&:last-child {
						margin-right: 0;
					}

					&:after {
						content: '';
						position: relative;
						display: block;
						transform: scaleX(0);
						height: 2px;
						background-color: ${headerColor};
						transition: 0.3s;
					}

					&:hover {
						&:after {
							transform: scaleX(100%);
						}
					}
				}
			}

			@media screen and (max-width: 1000px) {
				height: ${mobileHeight};
				.logo {
					img {
						width: 80px;
					}
				}
			}
		`;
	}}
`;

StyledHeader.defaultProps = {};

const HeaderComponent: React.FC<any> = () => {
	const [headerColor, setHeaderColor] = useState(`#fff`);
	const [logoColor, setLogoColor] = useState('white');

	const scrollAnim = (): any => {
		// console.log(window.scrollY);
		let timer;
		if (!timer) {
			timer = setTimeout(function () {
				if (window.scrollY > 0) {
					timer = null;
					setHeaderColor(`#000`);
					setLogoColor('black');
				} else if (window.scrollY <= 0) {
					setHeaderColor(`#fff`);
					setLogoColor('white');
				}
			}, 200);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', scrollAnim);
		return () => {
			window.removeEventListener('scroll', scrollAnim);
		};
	}, []);

	return (
		<>
			<StyledHeader color={headerColor}>
				<Link to="/" className="logo">
					<Logo src={`${logoColor}`} />
				</Link>
				<nav>
					<Link to="/">TEST1</Link>
					<Link to="/">TEST2</Link>
					<Link to="/">TEST3</Link>
				</nav>
			</StyledHeader>
		</>
	);
};

export default React.memo(HeaderComponent);
