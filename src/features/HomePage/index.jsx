import React, { useEffect, useState } from 'react';
import categoryApi from '../../api/categoryApi';
import { Link } from 'react-router-dom';
import './style.css';
import trolley_8 from './images/8-trolley.svg';
import money_9 from './images/9-money.svg';
import credit_card_10 from './images/10-credit-card.svg';
import gift_card_11 from './images/11-gift-card.svg';
function HomePage(props) {
  const [listCate, SetlistCate] = useState([]);
  useEffect(() => {
    const fecthCategory = async () => {
      const categoryList = await categoryApi.getAll();
      const arrCate = categoryList.results;
      SetlistCate(arrCate);
    };

    fecthCategory();
  }, []);

  return (
    <>
      <div className="ltn__slider-area ltn__slider-3---  section-bg-1--- mt-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 ">
              {/* CATEGORY-MENU-LIST START */}
              <div className="ltn__category-menu-wrap">
                <div className="ltn__category-menu-title">
                  <h2 className="section-bg-1 ltn__secondary-bg text-color-white">Categories</h2>
                </div>
                <div className="ltn__category-menu-toggle ltn__one-line-active">
                  <ul>
                    {listCate &&
                      listCate.length > 0 &&
                      listCate.map((cate, ind) => {
                        return (
                          <li
                            key={cate.id}
                            className="ltn__category-menu-item ltn__category-menu-drop"
                          >
                            <Link to={`/products?category=${cate.slug}`}>
                              <img width="30px" height="30px" src={cate.image} alt="" />
                              <span className="expandcate">{cate.name}</span>{' '}
                            </Link>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
              {/* END CATEGORY-MENU-LIST */}
            </div>
            <div className="col-lg-9">
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="..." className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ltn__feature-area mt-35 mt--65---">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__feature-item-box-wrap ltn__feature-item-box-wrap-2 ltn__border section-bg-1">
                <div className="ltn__feature-item ltn__feature-item-8">
                  <div className="ltn__feature-icon">
                    <img src={trolley_8} alt="#" />
                  </div>
                  <div className="ltn__feature-info">
                    <h4>Free shipping</h4>
                    <p>On all orders over $49.00</p>
                  </div>
                </div>
                <div className="ltn__feature-item ltn__feature-item-8">
                  <div className="ltn__feature-icon">
                    <img src={money_9}alt="#" />
                  </div>
                  <div className="ltn__feature-info">
                    <h4>15 days returns</h4>
                    <p>Moneyback guarantee</p>
                  </div>
                </div>
                <div className="ltn__feature-item ltn__feature-item-8">
                  <div className="ltn__feature-icon">
                    <img src={credit_card_10} alt="#" />
                  </div>
                  <div className="ltn__feature-info">
                    <h4>Secure checkout</h4>
                    <p>Protected by Paypal</p>
                  </div>
                </div>
                <div className="ltn__feature-item ltn__feature-item-8">
                  <div className="ltn__feature-icon">
                    <img src={gift_card_11} alt="#" />
                  </div>
                  <div className="ltn__feature-info">
                    <h4>Offer &amp; gift here</h4>
                    <p>On all orders over</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
