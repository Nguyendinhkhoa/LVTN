import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Footer(props) {
  return (
    <>
      <footer className="ltn__footer-area  ">
        <div className="footer-top-area  section-bg-2 plr--5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-5 col-sm-6 col-md-4 col-lg-4">
                <div className="footer-widget footer-about-widget">
                  <div className="footer-logo">
                    <div className="site-logo">
                      <img src="img/logo-2.png" alt="Logo" />
                      <span>Medicine</span>
                    </div>
                  </div>
                  <p>
                  At Medicine, each pharmacist is always dedicated to serving and is trained to successfully complete the assigned tasks.
                  </p>
                  <div className="footer-address">
                    <ul>
                      <li>
                        <div className="footer-address-icon">
                        <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="footer-address-info">
                          <p>Brooklyn, New York, United States</p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                        <i className="fas fa-phone-volume"></i>
                        </div>
                        <div className="footer-address-info">
                          <p>
                            <a href="tel:+0123-456789">+0123-456789</a>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                        <i className="far fa-envelope"></i>
                        </div>
                        <div className="footer-address-info">
                          <p>
                            <a href="mailto:example@example.com">example@example.com</a>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
              <div className="col-xl-2 col-sm-6 col-md-4 col-lg-4">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Company</h4>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        
                        <Link to="/product">All Products</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3  col-sm-6 col-md-4 col-lg-4">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Follow us</h4>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <i className="fab fa-facebook-square"></i>
                        <a href="https://www.facebook.com/">Facebook</a>
                      </li>
                      <li>
                        <i className="fab fa-youtube"></i>
                        <a href="https://www.youtube.com/">Youtube</a>
                      </li>
                      <li>
                        <i className="fab fa-instagram"></i>
                        <a href="instagram.com">Instagram</a>
                      </li>
                      <li>
                        <i className="fab fa-whatsapp-square"></i>
                        <a href="https://web.whatsapp.com/">What app</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
