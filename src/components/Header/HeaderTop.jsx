import React from 'react';
import bootstrap from 'bootstrap' 
// import PropTypes from 'prop-types';
import './style.css';
function HeaderTop(props) {
    return (
        <>
        <div className="ltn__header-top-area border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="ltn__top-bar-menu">
                  <ul>
                    <li><a href="mailto:nguyendinhkhoa1234@gmail.com"><i className="far fa-envelope"></i> contact@gmail.com</a></li>
                    <li><a href="locations.html"><i className="fas fa-map-marker-alt"></i>Tan Phu , HCM</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="top-bar-right">
                  <div className="ltn__top-bar-menu">
                    <ul>
                      <li>
                        <div className="ltn__social-media text-end">
                          <ul className="text-end">
                            <li><a href="https://www.facebook.com/" title="Facebook"><i  className="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://twitter.com/" title="Twitter"><i className="fab fa-twitter" /></a></li>
                            <li><a href="https://www.instagram.com/" title="Instagram"><i className="fab fa-instagram" /></a></li>
                            <li><a href="https://www.youtube.com/" title="Youtube"><i className="fab fa-youtube"></i></a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    );
}

export default HeaderTop;