import React, { useEffect, useState } from 'react';
import SlideInProduct from '../../components/Slide';
import { withRouter } from 'react-router';
import '../../style.css';
import productApi from '../../../../api/productApi';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../../productSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import Loading from '../../components/LoadingAdd';
import { Link } from 'react-router-dom';
import cartApi from '../../../../api/cartApi';
import { addItem } from '../../productSlice';
import { incre } from '../../../Auth/userSlice';
import ScrollTop from '../../../../components/ScrollTop';
import Slider from 'react-slick';
function DetailProduct(props) {
  const [slug, SetSlug] = useState(props.match.params.slug);
  const [product, SetProduct] = useState({});
  const loggedInUser = useSelector((state) => state.user);
  const isLoggedIn = !!loggedInUser.current.id;
  const [disabled, setDisabled] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [recommendProduct,setRecommentProduct] = useState([]);
  const dispatch = useDispatch();

  const [quantityAddCart, SetQuantityAddCart] = useState(0);
  const [listCart, setListCart] = useState([]);
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
  useEffect(() => {
    const fecthCart = async () => {
      const cart = await cartApi.getCart();
      const action = addItem(cart.results);
      dispatch(action);
      setListCart(cart.results);
    };

    fecthCart();
  }, []);
  useEffect(()=>{
    const fecthRecommend = async()=>{
      const reProduct = await productApi.recommend({page : 0 , limit : 10});
      setRecommentProduct(reProduct.results);
    }
    fecthRecommend();
  },[])
  function unescapeHTML(escapedHTML) {
    return escapedHTML.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
  }
  useEffect(() => {
    try {
      const fecthProduct = async () => {
        const params = {
          slug,
        };
        const product = await productApi.get(params);
        const test = unescapeHTML(product.description)
        console.log('product detail : ',  product);
        product.description = test ;
        SetProduct(product);
        setLoading(0);
        if (product.inventoryQty === 0) {
          setDisabled(true);
        }
      };
      fecthProduct();
    } catch (error) {
      console.log('FAILDED TO FETCH PRODUCT LIST', error);
    }
  }, []);

  const handleSubmit = async () => {
    if (!isLoggedIn) {
      enqueueSnackbar(`Please Login before purchasing`, {
        variant: 'error',
      });
      return;
    } else {
      const values = {
        productId: product.id,
        quantity: quantity,
      };
      try {
        setLoading(true);
        const action = addtocart(values);
        const resuftAction = await dispatch(action);
        unwrapResult(resuftAction);
        setLoading(false);
        enqueueSnackbar(`Add to cart successfully!`, {
          variant: 'success',
        });
        SetQuantityAddCart(1);
      } catch (error) {
        console.log('fail', error.message);
      }
    }
  };

  const price = '' + product.discountPrice;
  const onEnter = (event) => {
    if (event.target.value > product.inventoryQty || event.target.value < 1) {
      enqueueSnackbar(`Please enter quantity between 1 to ${product.inventoryQty}`, {
        variant: 'error',
      });
      setDisabled(true);
    } else {
      setQuantity(event.target.value);
      setDisabled(false);
    }
  };
  useEffect(() => {
    if (quantityAddCart === 0) {
      return;
    } else {
      if (listCart.length === 0) {
        dispatch(incre(1));
      } else {
        const flag = listCart
          .map((cart) => {
            return cart.productId;
          })
          .indexOf(product.id);
        if (flag === -1) {
          dispatch(incre(1));
        }
      }
    }
  }, [quantityAddCart]);

  return (
    <div>
      {loading === 1 ? (
        <Loading />
      ) : (
        <>
          <ScrollTop />
          <SlideInProduct page="Product Detail" />
          <div className="ltn__shop-details-area pb-85">
            <div className="container">
              <div className="row">
                <div className="col-lg-9 col-md-12">
                  <div className="ltn__shop-details-inner mb-60">
                    <div className="row">
                      <div className="col-md-6 col-lg-5">
                        <div className="ltn__shop-details-img-gallery">
                          <div className="ltn__shop-details-large-img slick-initialized slick-slider ltn__product-item-3">
                            <img src={product.image} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-7">
                        <div className="modal-product-info shop-details-info pl-0">
                          <h3 className="animated fadeIn">{product.name}</h3>
                          <div className="product-price">
                            <span>{price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}₫</span>
                            {product.price === product.discountPrice ? <></> :
                            <del>{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}₫</del>
                          }
                            </div>
                          <div className="modal-product-meta ltn__product-details-menu-1">
                            <ul>
                              <li>
                                <span>{product.content}</span>
                              </li>
                              {/* <li>
                                <strong>Categories:</strong>
                                <span>
                                  {product.category &&
                                    product.category.map((cate, idx) => (
                                      <Link to={`/products?category=` + cate} key={idx}>
                                        {cate}
                                      </Link>
                                    ))}
                                </span>
                              </li> */}
                              <li>
                                <strong>MFG:</strong>
                                <span>{product.productionDate}</span>
                              </li>
                              <li>
                                <strong>EXP:</strong>
                                <span>{product.expiryDate}</span>
                              </li>
                              <li>
                                <strong>Unit:</strong>
                                <span>{product.unit}</span>
                              </li>
                            </ul>
                          </div>
                          <div className="ltn__product-details-menu-2">
                            <ul>
                              <li>
                                <div className="cart-plus-minus">

                                  <input
                                    id="test-input"
                                    className="form-control"
                                    type="number"
                                    min={1}
                                    width="50px"
                                    onChange={onEnter}
                                    defaultValue={1}
                                  />
                                </div>
                              </li>
                              <li>
                                <button
                                  onClick={handleSubmit}
                                  className="theme-btn-1 btn btn-effect-1"
                                  title="Add to Cart"
                                  disabled={disabled}
                                >
                                  <i className="fas fa-shopping-cart" />
                                  <span>ADD TO CART</span>
                                </button>
                              </li>
                            </ul>
                          </div>
                          <hr />
                          <div className="ltn__social-media">
                            <ul>
                              <li>Share:</li>
                              <li>
                                <a href="https://www.facebook.com/" title="Facebook">
                                  <i className="fab fa-facebook-f" />
                                </a>
                              </li>
                              <li>
                                <a href="https://twitter.com/" title="Twitter">
                                  <i className="fab fa-twitter" />
                                </a>
                              </li>
                              <li>
                                <a href="https://www.linkedin.com/" title="Linkedin">
                                  <i className="fab fa-linkedin" />
                                </a>
                              </li>
                              <li>
                                <a href="https://www.instagram.com/" title="Instagram">
                                  <i className="fab fa-instagram" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <hr />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Shop Tab Start */}
                  <div className="ltn__shop-details-tab-inner ltn__shop-details-tab-inner-2">
                    <div className="ltn__shop-details-tab-menu">
                      <div className="nav">
                        <a
                          className="show active"
                          data-bs-toggle="tab"
                          href="#liton_tab_details_1_1"
                        >
                          Description
                        </a>

                      </div>
                    </div>
                    <div className="tab-content">
                      <div className="tab-pane fade active show" id="liton_tab_details_1_1">
                        {/* <div  > */}

                        <div className="ltn__shop-details-tab-content-inner">
                          <div dangerouslySetInnerHTML={{__html: product.description}}></div>
                          
                        </div>

                        {/* </div> */}
                      </div>

                    </div>
                  </div>
                  {/* Shop Tab End */}
                </div>
                <div className="col-lg-4">
                  {/* <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar">

                <div className="widget ltn__top-rated-product-widget">
                  <h4 className="ltn__widget-title ltn__widget-title-border">Top Rated Product</h4>
                  <ul>
                    <li>
                      <div className="top-rated-product-item clearfix">
                        <div className="top-rated-product-img">
                          <a href="product-details.html">
                            <img src="img/product/1.png" alt="#" />
                          </a>
                        </div>
                        <div className="top-rated-product-info">
                          <div className="product-ratting">
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="fas fa-star" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fas fa-star" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fas fa-star" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fas fa-star" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fas fa-star" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <h6>
                            <a href="product-details.html">Mixel Solid Seat Cover</a>
                          </h6>
                          <div className="product-price">
                            <span>$49.00</span>
                            <del>$65.00</del>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="top-rated-product-item clearfix">
                        <div className="top-rated-product-img">
                          <a href="product-details.html">
                            <img src="img/product/2.png" alt="#" />
                          </a>
                        </div>
                        <div className="top-rated-product-info">
                          <div className="product-ratting">
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="fas fa-star" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fas fa-star" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fas fa-star" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fas fa-star" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fas fa-star" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <h6>
                            <a href="product-details.html">Thermometer Gun</a>
                          </h6>
                          <div className="product-price">
                            <span>$49.00</span>
                            <del>$65.00</del>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="top-rated-product-item clearfix">
                        <div className="top-rated-product-img">
                          <a href="product-details.html">
                            <img src="img/product/3.png" alt="#" />
                          </a>
                        </div>
                        <div className="top-rated-product-info">
                          <div className="product-ratting">
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="fas fa-star" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fas fa-star" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fas fa-star" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fas fa-star-half-alt" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="far fa-star" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <h6>
                            <a href="product-details.html">Coil Spring Conversion</a>
                          </h6>
                          <div className="product-price">
                            <span>$49.00</span>
                            <del>$65.00</del>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget ltn__banner-widget">
                  <a href="shop.html">
                    <img src="img/banner/2.jpg" alt="#" />
                  </a>
                </div>
              </aside> */}
                </div>
              </div>
              <div className="row recommend-sys">
                <h4>YOU MAY ALSO LIKE</h4>
                <div className="slider-container">
                  <Slider {...settings} className="card__container--inner">
                    {recommendProduct && recommendProduct.map((item,idx)=>{
                      return(
                        <div className="card__container--inner--card" key={idx}>
                        <img
                          src={item.image}
                          alt="hero_img"
                        />
  
                        <div className="product-info">
                          <h2 className="product-title">
                            <a href="product-details.html">
                             {item.name}
                            </a>
                          </h2>
                        </div>
                      </div>
                      )
                    })}


                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default withRouter(DetailProduct);
