import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link, Route, BrowserRouter, Router } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import Actions from "Actions";
import Atoms, { Logo } from "Atoms";

const StyledHeader = styled.header.attrs((props) => ({}))`
  ${(props) => {
    const baseBlack = props.theme.palette.$base_black;
    const desktopHeight = props.theme.size.$header_desktop_line_height;
    const mobileHeight = props.theme.size.$header_mobile_line_height;
    return css`
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: ${desktopHeight};
      padding: 0 5%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo {
        img {
          width: 100px;
        }
      }

      nav {
        a {
          color: ${baseBlack};
          margin: 0 5px;
          font-size: 18px;
          font-weight: 500;
          display: inline-block;

          &:last-child {
            margin-right: 0;
          }

          &:after {
            content: "";
            position: relative;
            display: block;
            transform: scaleX(0);
            height: 2px;
            background-color: ${baseBlack};
            transition: .3s;
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
      }
    `;
  }}
`;

StyledHeader.defaultProps = {};

const HeaderComponent: React.FC<any> = ({}) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <StyledHeader>
        <Link to="/" className="logo">
          <Logo src="black" />
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
