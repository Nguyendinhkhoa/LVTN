import React from 'react';
import './contact.css';
import banner from './img/bannercontact.png';
import point from './img/pointContact.png';
import box2 from './img/box2.png';
import box3 from './img/box3.png';
import pharmImg3 from './img/pharmImg3.png'

function Contact(props) {
  return (
    <>
      <div className="headerMainContent">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-12 col-lg-12 col-xs-12"
              style={{ paddingLeft: '0px', paddingRight: '0px' }}
            >
              <img className="masthead-avatar desktopImgView" alt='#' src={banner} />
              <div className="centered">Simplifying healthcare &amp; Impacting lives</div>
            </div>
          </div>
        </div>
      </div>
      <div className="how-info1">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h4 className="how-info1-header offset-md-1">
                India’s leading online pharmacy platform
              </h4>
              <div className="col-md-9 how-info1-content offset-md-1">
                <p>
                  We aim to meet our customers &amp; health needs by providing complete healthcare
                  services.
                </p>
                <p>
                  We are now building partnerships to assure the quickest delivery of healthcare
                  products and services.
                </p>
              </div>
            </div>
            <div className="col-md-6 how-img">
              <div className="row people align-items-center">
                <div className="col-md-6 col-lg-6 item">
                  <div className="box boxContent1">
                    <img className="mask-copy-pharma" alt='#' src={point} />
                    <p className="boxContent">
                      We cover 1000+ cities and towns across 22000+ pin codes
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 item">
                  <div className="box boxContent2">
                    <img className="mask-copy-pharma" alt='#' src={box2} />
                    <p className="boxContent">50+ lakh happy customers</p>
                  </div>
                  <div className="box boxContent3">
                    <img className="mask-copy-pharma" alt='#' src={box3} />
                    <p className="boxContent">
                      Building partnerships to reach every corner of the country
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="how-info3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 how-img">
              <img
                src={pharmImg3}
                className="mask-image-copy img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <h4 className="how-info2-header">We join hands with retail partners</h4>
              <div className="how-info2-content">
                <p className="mt-5 how_info2_details">
                  We join hands with retail partners from multiple cities with goal to make
                  affordable healthcare accessible to all.
                </p>
                <p className="how-info2-lable1 mt-4">
                  “ PharmEasy makes business establishment easier for entrepreneurs based on needs
                  and capability ”
                </p>
                <p className="mt-4 how_info2_details">
                  We encourage our local retailers, strengthen communities, establish job
                  opportunities and unlock huge potentials for our offline sellers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
