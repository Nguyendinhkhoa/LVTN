import React from 'react';
import Slider from 'react-slick';
import './test.scss';
function Test(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
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
        <div className="row">
          <div className="col-md-">
            <Slider {...settings} className="card__container--inner">
              <div className="card__container--inner--card">
                <img
                  src="https://www.wanderon.in/triplist/spiti-summer/wanderon-spiti-1.jpg"
                  alt="hero_img"
                />

                <div class="product-info">
                  <h2 class="product-title">
                    <a href="product-details.html">Cao đông trùng hạ thảo Cordy Vital (Hộp 90g)</a>
                  </h2>
                  <div class="product-price">
                    <span>1,480,000₫</span>
                    <del>$162.000 ₫</del>
                  </div>
                </div>
              </div>
              <div className="card__container--inner--card">
                <img
                  src="https://www.wanderon.in/triplist/spiti-summer/wanderon-spiti-1.jpg"
                  alt="hero_img"
                />

                <div class="product-info">
                  <h2 class="product-title">
                    <a href="product-details.html">Cao đông trùng hạ thảo Cordy Vital (Hộp 90g)</a>
                  </h2>
                  <div class="product-price">
                    <span>1,480,000₫</span>
                    <del>$162.000 ₫</del>
                  </div>
                </div>
              </div>
              <div className="card__container--inner--card">
                <img
                  src="https://www.wanderon.in/triplist/spiti-summer/wanderon-spiti-1.jpg"
                  alt="hero_img"
                />

                <div class="product-info">
                  <h2 class="product-title">
                    <a href="product-details.html">Cao đông trùng hạ thảo Cordy Vital (Hộp 90g)</a>
                  </h2>
                  <div class="product-price">
                    <span>1,480,000₫</span>
                    <del>$162.000 ₫</del>
                  </div>
                </div>
              </div>
              <div className="card__container--inner--card">
                <img
                  src="https://www.wanderon.in/triplist/spiti-summer/wanderon-spiti-1.jpg"
                  alt="hero_img"
                />

                <div class="product-info">
                  <h2 class="product-title">
                    <a href="product-details.html">Cao đông trùng hạ thảo Cordy Vital (Hộp 90g)</a>
                  </h2>
                  <div class="product-price">
                    <span>1,480,000₫</span>
                    <del>$162.000 ₫</del>
                  </div>
                </div>
              </div>
              <div className="card__container--inner--card">
                <img
                  src="https://www.wanderon.in/triplist/spiti-summer/wanderon-spiti-1.jpg"
                  alt="hero_img"
                />

                <div class="product-info">
                  <h2 class="product-title">
                    <a href="product-details.html">Cao đông trùng hạ thảo Cordy Vital (Hộp 90g)</a>
                  </h2>
                  <div class="product-price">
                    <span>1,480,000₫</span>
                    <del>$162.000 ₫</del>
                  </div>
                </div>
              </div>
              <div className="card__container--inner--card">
                <img
                  src="https://www.wanderon.in/triplist/spiti-summer/wanderon-spiti-1.jpg"
                  alt="hero_img"
                />

                <div class="product-info">
                  <h2 class="product-title">
                    <a href="product-details.html">Cao đông trùng hạ thảo Cordy Vital (Hộp 90g)</a>
                  </h2>
                  <div class="product-price">
                    <span>1,480,000₫</span>
                    <del>$162.000 ₫</del>
                  </div>
                </div>
              </div>
              <div className="card__container--inner--card">
                <img
                  src="https://www.wanderon.in/triplist/spiti-summer/wanderon-spiti-1.jpg"
                  alt="hero_img"
                />

                <div class="product-info">
                  <h2 class="product-title">
                    <a href="product-details.html">Cao đông trùng hạ thảo Cordy Vital (Hộp 90g)</a>
                  </h2>
                  <div class="product-price">
                    <span>1,480,000₫</span>
                    <del>$162.000 ₫</del>
                  </div>
                </div>
              </div>
              <div className="card__container--inner--card">
                <img
                  src="https://www.wanderon.in/triplist/spiti-summer/wanderon-spiti-1.jpg"
                  alt="hero_img"
                />

                <div class="product-info">
                  <h2 class="product-title">
                    <a href="product-details.html">Cao đông trùng hạ thảo Cordy Vital (Hộp 90g)</a>
                  </h2>
                  <div class="product-price">
                    <span>1,480,000₫</span>
                    <del>$162.000 ₫</del>
                  </div>
                </div>
              </div>
              <div className="card__container--inner--card">
                <img
                  src="https://www.wanderon.in/triplist/spiti-summer/wanderon-spiti-1.jpg"
                  alt="hero_img"
                />

                <div class="product-info">
                  <h2 class="product-title">
                    <a href="product-details.html">Cao đông trùng hạ thảo Cordy Vital (Hộp 90g)</a>
                  </h2>
                  <div class="product-price">
                    <span>1,480,000₫</span>
                    <del>$162.000 ₫</del>
                  </div>
                </div>
              </div>

            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Test;
