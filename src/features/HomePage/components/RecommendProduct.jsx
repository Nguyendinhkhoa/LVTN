import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './style.scss';
const RecommendProduct = (props) => {
     const settings = {
          dots: false,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 3000,
        };
  return (
    <>
      <div className="container">
        <div className="row recommend-sys">
          <h4>{props.title}</h4>
          <div className="slider-container">
            <Slider {...settings} className="card__container--inner">
              
              {props.reProduct &&
                props.reProduct.map((item, idx) => {
                  return (
                    <div className="card__container--inner--card border-recommend " key={idx}>
                      <Link to={`/product-detail/${item.slug}`}><img src={item.image} alt="hero_img" /></Link>
                      <div className="product-info">
                        <h2 className="product-title">
                        <Link to={`/product-detail/${item.slug}`}>{item.name}</Link>
                        </h2>
                      </div>
                    </div>
                  );
                })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

RecommendProduct.propTypes = {
     reProduct : PropTypes.array,
     title : PropTypes.string,
};

export default RecommendProduct;
