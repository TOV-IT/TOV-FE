import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link, Route, BrowserRouter, Router } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import Actions from "Actions";

import TOV_LOGO from "./assets/TOV.png";
import TOV_LOGO_B from "./assets/TOV_B.png";
import TOV_LOGO_W from "./assets/TOV_W.png";

const StyledLogo = styled.img.attrs((props) => ({
  src: props.src || TOV_LOGO,
}))`
  display: block;
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
`;

StyledLogo.defaultProps = {
  src: TOV_LOGO,
};

const LogoComponent: React.FC<any> = ({ width, height, src }) => {
  const [logoSrc, setLogoSrc] = useState(src);

  useEffect(() => {
    switch (src) {
      case "black":
        setLogoSrc(TOV_LOGO_B);
        break;

      case "white":
        setLogoSrc(TOV_LOGO_W);
        break;

      default:
        setLogoSrc(TOV_LOGO);
        break;
    }
    return () => {};
  }, [logoSrc]);

  return (
    <>
      <StyledLogo width={width} height={height} src={logoSrc} />
    </>
  );
};

export default React.memo(LogoComponent);
