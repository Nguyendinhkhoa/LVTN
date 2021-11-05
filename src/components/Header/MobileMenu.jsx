import React, { useState } from 'react';

import { Link } from 'react-router-dom';



function MobileMenu(props) {

    const [openMenu,SetOpenMenu] = useState('');
    const [display,Setdisplay] = useState({display:'none'});
    const [buttonClose,SetButton] = useState('');
    const handleMenuClick = () =>{
    SetOpenMenu('ltn__utilize-open');
      Setdisplay({display:'block'});
      SetButton('close');
    }
    const handleOutsilde = () =>{
        SetOpenMenu('');
      Setdisplay({display:'none'});
      SetButton('');
    }
    return (
        <>
       {/* MOBILE MENU START */}
        <div className="mobile-header-menu-fullwidth mb-30 d-block d-lg-none">
        <div className="container">
            <div className="row">
            <div className="col-lg-12">
                {/* Mobile Menu Button */}
                <div className="mobile-menu-toggle d-lg-none">
                <span>MENU</span>
                <button  onClick={handleMenuClick}  className={"ltn__utilize-toggle " + buttonClose} >
                    <svg viewBox="0 0 800 600">
                    <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top" />
                    <path d="M300,320 L540,320" id="middle" />
                    <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) " />
                    </svg>
                </button>
                </div>
            </div>
            </div>
        </div>
        </div>

        {/* MOBILE MENU END */}
        <div id="ltn__utilize-mobile-menu" className={"ltn__utilize ltn__utilize-mobile-menu  " + openMenu }>
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
            <div className="ltn__utilize-menu-head">
            <div className="site-logo">
                <a href="index.html"><img src="img/logo.png" alt="Logo" /></a>
            </div>
            <button className="ltn__utilize-close" onClick={handleOutsilde}>×</button>
            </div>

            <div className="ltn__utilize-menu">
            <ul>
                <li><Link to="/home" onClick={handleOutsilde}>Home</Link></li>
                <li><Link to="/about" onClick={handleOutsilde}>About</Link></li>
                <li><Link to="/products" onClick={handleOutsilde}>Shop</Link></li>
                <li><Link to="/news" onClick={handleOutsilde}>News</Link></li>
                <li><Link to="/pages" onClick={handleOutsilde}>Pages</Link></li>
                <li><Link to="/contact" onClick={handleOutsilde}>Contact</Link></li>
            </ul>
            </div>
            <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
            <ul>
                <li>
                <a href="account.html" title="My Account">
                    <span className="utilize-btn-icon">
                    <i className="far fa-user" />
                    </span> My Account
                </a>
                </li>
                <li>
                <a href="wishlist.html" title="Wishlist">
                    <span className="utilize-btn-icon">
                    <i className="far fa-heart" />
                    <sup>3</sup>
                    </span> Wishlist
                </a>
                </li>
                <li>
                <a href="cart.html" title="Shoping Cart">
                    <span className="utilize-btn-icon">
                    <i className="fas fa-shopping-cart" />
                    <sup>5</sup>
                    </span> Shoping Cart
                </a>
                </li>
            </ul>
            </div>
            <div className="ltn__social-media-2">
            <ul>
                <li><Link to="https://www.facebook.com/" title="Facebook"><i className="fab fa-facebook-f" /></Link></li>
                <li><Link to="https://www.facebook.com/"  title="Twitter"><i className="fab fa-twitter" /></Link></li>
                <li><Link to="https://www.facebook.com/"  title="Linkedin"><i className="fab fa-linkedin" /></Link></li>
                <li><Link to="https://www.facebook.com/" title="Instagram"><i className="fab fa-instagram" /></Link></li>
            </ul>
            </div>
        </div>
        </div>

        <div className="ltn__utilize-overlay" onClick={handleOutsilde} style={display}></div>
        </>
    );
}

export default MobileMenu;