import React from 'react';
import PropTypes from 'prop-types';
import '../../style.css';
import bg from '../../images/bg.jpg';
import { Link } from 'react-router-dom';

SlideInProduct.propTypes = {
  page : PropTypes.string 
};

function SlideInProduct({page}) {
  return (
    <>
      <div
        className="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image "
        data-bs-bg="img/bg/14.jpg"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__breadcrumb-inner">
                <h1 className="page-title">Shop Left Sidebar</h1>
                <div className="ltn__breadcrumb-list">
                  <ul>
                    <li>
                      
                      <Link to="/">
                        <span className="ltn__secondary-color">
                          <i className="fas fa-home" />
                        </span>{' '}
                        Home
                      </Link>
                    </li>
                    <li>{page}</li>
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

export default SlideInProduct;
