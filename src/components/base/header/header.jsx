import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";
import { Link, Route, Switch, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import { useSelector, useDispatch } from 'react-redux';
import Actions from "../../../redux/actions";


import "./assets/css/style.scss";

function NavTab () {

    const dispatch = useDispatch();
    const auth = useSelector(store => store.auth); 
    

    const [navTabStyle, setNavTabStyle] = useState();
    const [navBgStyle, setNavBgStyle] = useState();
    const [navStyle, setNavStyle] = useState();

    const navOpen = () => {
        setNavTabStyle({
            right: '0',
            left: '0',
            opacity: '100%',
        })
        setNavStyle({
            right: '0',
            left: 'auto',
            opacity: '100%',
        });
        setNavBgStyle({
            left: '0',
            opacity: '100%',
        });
    };

    const navClose = () => {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        let navWidth = '';
        let navBgWidth = ''
        if (vw < 1000){
            navWidth = '-80%';
            navBgWidth = '-20%';
        }else{
            navWidth = '-30%';
            navBgWidth = '-70%';
        }
        setNavStyle({
            right: navWidth,
            left: 'auto',
            opacity: '0',
        });
        setNavBgStyle({
            left: navBgWidth,
            opacity: '100%',
        });
        setTimeout(() => {
            setNavTabStyle({
                left: '-100%',
                opacity: '0',
            })
        }, 300);
    }

    async function logout () {
        dispatch(Actions.auth.logout());
        navClose();
    }

    return (
        <nav className="nav">
            <button className='nav-menuBar material-icons' onClick={navOpen}>menu</button>

            <div className='navTab' style={navTabStyle}>
                <div className='navTab-container' style={navStyle}>
                    <div className='navTab-user'>
                        {
                            auth.isAuthenticated == false ? (
                                <>
                                    <Link to='/login' className='user-login' onClick={navClose}>로그인</Link>
                                    <p className='user-more'>
                                        회원가입을 하실려면 <Link to='/register' onClick={navClose}>여기</Link>를 클릭해주세요
                                    </p>
                                </>
                            ) : (
                                <>
                                    <div className='user-profile'>
                                        <div className='profile_left'>
                                            <Link
                                                to='/profile'
                                                className='profile-img'
                                                // style={{ backgroundImage: `url(${logo})` }}
                                                onClick={navClose}
                                            ></Link>
                                            <span><strong>USER</strong> 님</span>
                                        </div>
                                        <button onClick={logout} className='user-logout'>로그아웃</button>
                                    </div>
                                </>
                            )
                        }
                    </div>
                    <ul className='navTab-link'>
                        <Link to="/test" onClick={navClose}>🔬TEST</Link>
                    </ul>
                </div>
                <div className='navTab-bg' onClick={navClose} style={navBgStyle}></div>
            </div>

        </nav>
    )

}

function Header(props) {
    console.log("Header rendering");

    return (
        <header className="header">
            <div className="logo">
                <Link to='/'>TOV</Link>
            </div>
            <NavTab />
        </header>
    );
}

export default hot(module)(Header);
