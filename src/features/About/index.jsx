import React from 'react';
import PropTypes from 'prop-types';
import './about.css';
import aboutImg from './about.png';
import SlideInProduct from '../Product/components/Slide';

function About(props) {
  return (
    <>
      <SlideInProduct page="About Us" />
      <div className="container">
        <div className="whatIsMedicine">
          <h2>What is Medicine ?</h2>
          <p>PharmEasy is a consumer healthcare “super app”.</p>
          <p>
            PharmEasy is a consumer healthcare “super app” that provides consumers with on-demand,
            home delivered access to a wide range of prescription, OTC pharmaceutical, other
            consumer healthcare products, comprehensive diagnostic test services, and
            teleconsultations thereby serving their healthcare needs.
          </p>
          <p>To change the face of healthcare in India, one consumer at a time.</p>
          <div className="statistical">
            <div className="statistical-child">
              <span>25 Million</span>
              <span>Registered Users as of Jun 30, 2021</span>
            </div>
            <div className="statistical-child">
              <span>8.8 Million</span>
              <span>Medicine Orders as of FY21</span>
            </div>
            <div className="statistical-child">
              <span>2.4 Million</span>
              <span>Transacting customers as of FY21</span>
            </div>
          </div>
        </div>
        
      </div>
      <div className="aboutTarget">
           <div className="targetContent">
           <h2 class="AboutUs_ourUltimateTitle__2Rc16">Our ultimate goal is to provide affordable healthcare to one and all.</h2>
           </div>
      </div>
      <div className="coreValues">
      <h2 class="AboutUs_h2__3Re_n" id="core-values">Core Values of Medicine</h2>
      <p class="AboutUs_descriptions__2VwCw">To further our vision and goals, we came up with the following core values. Our values are highly instrumental in deciding where we want to go and how we will get there.</p>
      <img src={aboutImg} alt="" />
      </div>
    </>
  );
}

export default About;
