import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import './style.css';
import HeaderTop from './HeaderTop';
import HeaderMiddle from './HeaderMiddle';
import HeaderBottom from './HeaderBottom';
import classnames from "classnames";
import MobileMenu from './MobileMenu';


function Header(props) {

    return (
        <>
    <header className="ltn__header-area ltn__header-3">       
        <HeaderTop/>
        <HeaderMiddle/>
        <HeaderBottom/>
    </header>
    <MobileMenu/>
        </>

    );
}

export default Header;