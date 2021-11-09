import React from 'react';
import bootstrap from 'bootstrap' ;
// import PropTypes from 'prop-types';



function HeaderMiddle(props) {
    return (
        <>
        <div className="ltn__header-middle-area">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="site-logo">
                  <a href="/#"><img src="img/logo.png"  />Medicine</a>
                </div>
              </div>
              <div className="col header-contact-serarch-column d-none d-lg-block">
                <div className="header-contact-search">
                  <div className="header-feature-item">
                    <div className="header-feature-icon">
                      <i className="icon-call" />
                    </div>
                    <div className="header-feature-info">
                      <h6>Phone</h6>
                      <p><a href="tel:0123456789">+0123-456-789</a></p>
                    </div>
                  </div>

                  <div className="header-search-2">
                    <form id="  " method="get" action="">
                      <input type="text" name="search"  placeholder="Search here..." />
                      <button type="submit">
                        <span><i className="fas fa-search"></i></span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col">
                 <div className="ltn__header-options">
                  <ul>
                    <li className="d-none">
                      <div className="ltn__drop-menu ltn__currency-menu">
                        <ul>
                          <li><a href="/#" className="dropdown-toggle"><span className="active-currency">USD</span></a>
                            <ul>
                              <li><a href="login.html">USD - US Dollar</a></li>
                              <li><a href="wishlist.html">CAD - Canada Dollar</a></li>
                              <li><a href="register.html">EUR - Euro</a></li>
                              <li><a href="account.html">GBP - British Pound</a></li>
                              <li><a href="wishlist.html">INR - Indian Rupee</a></li>
                              <li><a href="wishlist.html">BDT - Bangladesh Taka</a></li>
                              <li><a href="wishlist.html">JPY - Japan Yen</a></li>
                              <li><a href="wishlist.html">AUD - Australian Dollar</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="d-lg-none">

                      <div className="header-search-wrap">
                        <div className="header-search-1">
                          <div className="search-icon">
                          <i className="fas fa-search for-search-show"></i>                     
                            <i className="icon-cancel  for-search-close" />
                          </div>
                        </div>
                        <div className="header-search-1-form">
                          <form id="#" method="get" action="#">
                            <input type="text" name="search"  placeholder="Search here..." />
                            <button type="submit">
                              <span><i className="fas fa-search"></i></span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </li>
                    <li className="d-none---"> 

                      <div className="ltn__drop-menu user-menu">
                        <ul>
                          <li>
                            <a href="/#"><i className="far fa-user"></i></a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>

                      <div className="mini-cart-icon mini-cart-icon-2">
                        <a href="#ltn__utilize-cart-menu" className="ltn__utilize-toggle">
                          <span className="mini-cart-icon">
                          <i className="fas fa-shopping-cart"></i>
                            <sup>2</sup>
                          </span>
                          <h6><span>Your Cart</span> <span className="ltn__secondary-color">$89.25</span></h6>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div> 
              </div>
            </div>
          </div>
        </div>   
        </>
    );
}

export default HeaderMiddle;