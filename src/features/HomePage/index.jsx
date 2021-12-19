import React, { useEffect, useState } from 'react';
import categoryApi from '../../api/categoryApi';
import { Link } from 'react-router-dom';
import './style.css';
import trolley_8 from './images/8-trolley.svg';
import money_9 from './images/9-money.svg';
import credit_card_10 from './images/10-credit-card.svg';
import gift_card_11 from './images/11-gift-card.svg';
import slide1 from './images/slide1.jpg';
import slide2 from './images/slide2.jpg';
import oder9 from './images/oder9.png';
import author from './images/author.jpg';
import banner1 from './images/banner1.jpg';
import banner2 from './images/banner2.jpg';
import banner3 from './images/banner3.jpg';
import LatestProduct from './components/LatestProduct';
import ScrollTop from '../../components/ScrollTop';
import RecommendProduct from './components/RecommendProduct';
import productApi from '../../api/productApi';

function HomePage(props) {
  const [listCate, SetlistCate] = useState([]);
  const [reProduct, setReProduct] = useState([]);
  useEffect(() => {
    const fecthCategory = async () => {
      const categoryList = await categoryApi.getAll();
      const arrCate = categoryList.results;
      SetlistCate(arrCate);
    };

    fecthCategory();
  }, []);
  useEffect(() => {
    const fecthReProduct = async () => {
      const productList = await productApi.homeProduct();
      console.log(productList,"product list recom");
      setReProduct(productList);
    };
    fecthReProduct();
  }, []);
  return (
    <>
      <ScrollTop/>
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
                    <img src={slide1} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={slide2} className="d-block w-100" alt="..." />
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
      <div className="ltn__feature-area mb-35 mt-35 mt--65---">
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
                    <img src={money_9} alt="#" />
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

      <div className="ltn__about-us-area pt-25 pb-120 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="about-us-img-wrap about-img-left">
                <img src={oder9} alt="" />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area ltn__section-title-2--- mb-30">
                  <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color d-none">
                    About Us
                  </h6>
                  <h1 className="section-title1">Your faithful partners Medical Goods</h1>
                  <p>
                    Houzez allow you to design unlimited panels and real estate custom forms to
                    capture leads and keep record of all information
                  </p>
                </div>
                <ul className="ltn__list-item-1 ltn__list-item-1-before--- clearfix">
                  <li>
                    <i className="fas fa-check-square" /> Better security for patient privacy and
                    information.
                  </li>
                  <li>
                    <i className="fas fa-check-square" /> More products at lower prices.
                  </li>
                  <li>
                    <i className="fas fa-check-square" /> connect customers with the power of
                    eCommerce at all.
                  </li>
                </ul>
                <div className="about-author-info-2 border-top mt-30 pt-20">
                  <ul>
                    <li>
                      <div className="about-author-info-2-brief  d-flex">
                        <div className="author-img">
                          <img src={author} alt="#" />
                        </div>
                        <div className="author-name-designation">
                          <h4 className="mb-0">Đình Khoa</h4>
                          <small>Medical Specialist</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="about-author-info-2-contact  d-flex">
                        <div className="about-contact-icon d-flex align-self-center mr-10">
                          <i className="fas fa-phone-alt"></i>
                        </div>
                        <div className="about-author-info-2-contact-info">
                          <small>Get Support</small>
                          <h6 className="mb-0">0326737214</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ltn__banner-area mt-120---">
        <div className="container">
          <div className="row ltn__custom-gutter--- justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="ltn__banner-item">
                <div className="ltn__banner-img">
                  <Link to="/products">
                    <img src={banner1} alt="Banner Image" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="ltn__banner-item">
                <div className="ltn__banner-img">
                  <Link to="/products">
                    <img src={banner2} alt="Banner Image" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="ltn__banner-item">
                <div className="ltn__banner-img">
                  <Link to="/products">
                    <img src={banner3} alt="Banner Image" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LatestProduct />
      {reProduct && reProduct.map((item,ind)=>{
        console.log(item.listProducts.length);
        if(item.listProducts.length >0){
          return <RecommendProduct amout={item.listProducts.length } reProduct={item.listProducts} title={item.name} key={ind}/> ;
        }
        else{
          return;
        }
      })}
    </>
  );
}

export default HomePage;
