import React from 'react';
import PropTypes from 'prop-types';

SlideInProduct.propTypes = {
    
};

function SlideInProduct(props) {
    return (
        <>
            <div className="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image " data-bs-bg="img/bg/14.jpg" style={{backgroundImage: 'url("img/bg/14.jpg")'}}>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="ltn__breadcrumb-inner">
          <h1 className="page-title">Shop Left Sidebar</h1>
          <div className="ltn__breadcrumb-list">
            <ul>
              <li><a href="index.html"><span className="ltn__secondary-color"><i className="fas fa-home" /></span> Home</a></li>
              <li>Shop Left Sidebar</li>
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