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

import banner1 from './assets/banner1.jpg';
import banner2 from './assets/banner2.jpg';

const StyledBannerMain = styled.section.attrs((props: any) => ({}))`
	${(props) => {
		const baseBlack = props.theme.palette.$base_black;
		return css`
			overflow: hidden;
			width: 100%;
			height: 100vh;

			.text-wrapper {
				position: absolute;
				z-index: 10;
				padding: 5%;
				top: 50%;
				transform: translateY(-50%);
				color: #fff;
				span {
					font-size: 37px;
					font-weight: 600;
				}
				h1 {
					line-height: 1;
					color: #fff;
					font-size: 100px;
				}
			}

			.img-wrapper {
				.darker {
					width: 100%;
					height: 100vh;
					position: absolute;
					top: 0;
					background: rgba(0, 0, 0, 0.1);
					box-shadow: inset 0px 4px 100px 10px rgba(0, 0, 0, 0.5);
				}
				.img {
					display: block;
					width: 100%;
					height: 100vh;
					will-change: background-image;
					background-attachment: fixed;
					background-image: url(${props.img});
					background-position: center;
					background-repeat: none;
					background-size: cover;
          transition: .3s ease-in-out;
				}
			}
		`;
	}}
`;

StyledBannerMain.defaultProps = {};

const BannerMainComponent: React.FC<any> = ({ imgList }) => {
	const [bannerImgList, setBannerImgList] = useState(imgList === undefined || null ? [banner1, banner2] : imgList);
	const [currImg, setCurrImg] = useState(bannerImgList[0]);

	useEffect(() => {
		let i: number = 0;
		const changeImg = setInterval(() => {
			if (i >= bannerImgList.length) {
				i = 0;
				setCurrImg(bannerImgList[i]);
				i += 1;
			} else {
				setCurrImg(bannerImgList[i]);
				i += 1;
			}
		}, 3000);

		return () => {
			clearInterval(changeImg);
		};
	}, []);

	return (
		<>
			<StyledBannerMain img={currImg}>
				<div className="text-wrapper">
					<span>미래를 밝히는 기술</span>
					<h1>TOV IT</h1>
				</div>

				<div className="img-wrapper">
					<div className="darker" />
					<div className="img" />
				</div>
			</StyledBannerMain>
		</>
	);
};

export default React.memo(BannerMainComponent);
