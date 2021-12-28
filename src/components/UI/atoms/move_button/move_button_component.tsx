import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { Link, Route, BrowserRouter, Routes, useNavigate, useParams, useLocation } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import Atoms from 'Atoms';
import Molecules from 'Molecules';
import Organisms from 'Organisms';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

const StyledMoveButton = styled.a.attrs((props) => ({
	href: props.href || '/',
	target: '_blank',
}))`
	${(props) => {
		return css``;
	}}
`;

const MoveButtonComponent: React.FC<any> = (props) => {
	return (
		<>
			<StyledMoveButton {...props}>{props.children}</StyledMoveButton>
		</>
	);
};

export default MoveButtonComponent;
