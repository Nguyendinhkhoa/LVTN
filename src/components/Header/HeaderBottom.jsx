import React from 'react';

import { NavLink , Link } from 'react-router-dom';


function HeaderBottom(props) {
    return (
       <>
        <div className="header-bottom-area ltn__border-top ltn__header-sticky  ltn__sticky-bg-white--- ltn__sticky-bg-secondary ltn__secondary-bg section-bg-1 menu-color-white d-none d-lg-block">
  <div className="container">
    <div className="row">
      <div className="col header-menu-column justify-content-center">
        <div className="sticky-logo">
          <div className="site-logo">
            <a href="index.html"><img src="img/logo-3.png" alt="Logo" /></a>
          </div>
        </div>
        <div className="header-menu header-menu-2">
          <nav>
            <div className="ltn__main-menu">
              <ul>
                <li className="menu-icon"><NavLink to="/">Home</NavLink>
                </li>
                <li className="menu-icon"><NavLink to="/about">About</NavLink>
                </li>
                <li className="menu-icon"><NavLink to="/products">Shop</NavLink>
                </li>
                <li className="menu-icon"><NavLink to="/news">News</NavLink>
                </li>
                <li className="menu-icon"><NavLink to="/pages">Pages</NavLink>
                </li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>
       </>
    );
}

export default HeaderBottom;
