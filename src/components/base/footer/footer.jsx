import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import './assets/css/style.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <h3 className="footer-logo">TOV</h3>
            <div className="footer-mid">
                <div className="footer-copyright">©Copyright 2021 TOV All rights reserved</div>
                <div className="footer-address">부산광역시 금정구 금강로 322 2층</div>
            </div>
            <div className="footer-link">
                <a href="https://www.youtube.com/channel/UCZZOjlTrjJvSATrknAzYEfw" target="_blank">
                    <i className="fab fa-youtube"></i>
                </a>
                <a href="https://www.instagram.com/project_busan" target="_blank">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="mailto:projectplan0531@gmail.com">
                    <i className="fas fa-envelope"></i>
                </a>
            </div>
        </footer>
    )
}

export default hot(module)(Footer);