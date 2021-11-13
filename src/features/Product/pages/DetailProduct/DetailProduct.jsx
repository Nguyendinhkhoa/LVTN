import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SlideInProduct from '../../components/Slide';
import { withRouter } from 'react-router';
import '../../style.css';
import productApi from '../../../../api/productApi';
import { TextField } from '@material-ui/core';
DetailProduct.propTypes = {};
function DetailProduct(props) {
  const [slug, SetSlug] = useState(props.match.params.slug);
  const [product, SetProduct] = useState({});
  const [disabled,setDisabled] = useState(false);
  useEffect(() => {
    try {
      const fecthProduct = async () => {
        const params = {
          slug,
        };
        const product = await productApi.get(params);
        console.log(product);
        SetProduct(product);
        if(product.inventoryQty===0){
          setDisabled(true);
        }
      };
      fecthProduct();
    } catch (error) {
      console.log('FAILDED TO FETCH PRODUCT LIST', error);
    }
  }, []);
  const price = '' + product.price;
  return (
    <>
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
                        <img src={product.image} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-7">
                    <div className="modal-product-info shop-details-info pl-0">
                      <h3 className="animated fadeIn">{product.name}</h3>
                      <div className="product-price">
                        <span>{price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}₫</span>
                        <del>$162.000 ₫</del>
                      </div>
                      <div className="modal-product-meta ltn__product-details-menu-1">
                        <ul>
                        <li>
                          <strong>Introduce:</strong>
                          <span>{product.content}</span>
                          </li>
                          <li>
                            <strong>Categories:</strong>
                            <span>
                              {product.category &&
                                product.category.map((cate, idx) => <a key={idx}>{cate}</a>)}
                            </span>
                          </li>
                          <li>
                          <strong>MFG:</strong>
                          <span>{product.productionDate}</span>
                          </li>
                          <li>
                          <strong>EXP:</strong>
                          <span>{product.expiryDate}</span>
                          </li>
                        </ul>
                      </div>
                      <div className="ltn__product-details-menu-2">
                        <ul>
                          <li>
                          <div className="cart-plus-minus">
                            <TextField
                              id="outlined-number"
                              type="number"
                              defaultValue="1"
                              InputProps={{ inputProps: { min: 1, max: product.inventoryQty } }}
                              InputLabelProps={{
                                shrink: true,
                              }}
                              variant="outlined"
                            />
                          </div>
                          </li>
                          <li>
                            <button
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
                            <a href="#" title="Facebook">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Twitter">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Linkedin">
                              <i className="fab fa-linkedin" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Instagram">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <hr />
                      <div className="ltn__safe-checkout">
                        <h5>Guaranteed Safe Checkout</h5>
                        <img src="img/icons/payment-2.png" alt="Payment Image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Shop Tab Start */}
              <div className="ltn__shop-details-tab-inner ltn__shop-details-tab-inner-2">
                <div className="ltn__shop-details-tab-menu">
                  <div className="nav">
                    <a className="show active" data-bs-toggle="tab" href="#liton_tab_details_1_1">
                      Description
                    </a>
                    <a data-bs-toggle="tab" href="#liton_tab_details_1_2" className>
                      Reviews
                    </a>
                  </div>
                </div>
                <div className="tab-content">
                  <div className="tab-pane fade active show" id="liton_tab_details_1_1">
                    <div className="ltn__shop-details-tab-content-inner">
                      <h4 className="title-2">Lorem ipsum dolor sit amet elit.</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                        sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
                        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                        voluptatem.
                      </p>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="liton_tab_details_1_2">
                    <div className="ltn__shop-details-tab-content-inner">
                      <h4 className="title-2">Customer Reviews</h4>
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
                          <li className="review-total">
                            {' '}
                            <a href="#"> ( 95 Reviews )</a>
                          </li>
                        </ul>
                      </div>
                      <hr />
                      {/* comment-area */}
                      <div className="ltn__comment-area mb-30">
                        <div className="ltn__comment-inner">
                          <ul>
                            <li>
                              <div className="ltn__comment-item clearfix">
                                <div className="ltn__commenter-img">
                                  <img src="img/testimonial/1.jpg" alt="Image" />
                                </div>
                                <div className="ltn__commenter-comment">
                                  <h6>
                                    <a href="#">Adam Smit</a>
                                  </h6>
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
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Doloribus, omnis fugit corporis iste magnam ratione.
                                  </p>
                                  <span className="ltn__comment-reply-btn">September 3, 2020</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="ltn__comment-item clearfix">
                                <div className="ltn__commenter-img">
                                  <img src="img/testimonial/3.jpg" alt="Image" />
                                </div>
                                <div className="ltn__commenter-comment">
                                  <h6>
                                    <a href="#">Adam Smit</a>
                                  </h6>
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
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Doloribus, omnis fugit corporis iste magnam ratione.
                                  </p>
                                  <span className="ltn__comment-reply-btn">September 2, 2020</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="ltn__comment-item clearfix">
                                <div className="ltn__commenter-img">
                                  <img src="img/testimonial/2.jpg" alt="Image" />
                                </div>
                                <div className="ltn__commenter-comment">
                                  <h6>
                                    <a href="#">Adam Smit</a>
                                  </h6>
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
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Doloribus, omnis fugit corporis iste magnam ratione.
                                  </p>
                                  <span className="ltn__comment-reply-btn">September 2, 2020</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* comment-reply */}
                      <div className="ltn__comment-reply-area ltn__form-box mb-30">
                        <form action="#">
                          <h4 className="title-2">Add a Review</h4>
                          <div className="mb-30">
                            <div className="add-a-review">
                              <h6>Your Ratings:</h6>
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
                            </div>
                          </div>
                          <div className="input-item input-item-textarea ltn__custom-icon">
                            <textarea placeholder="Type your comments...." defaultValue={''} />
                          </div>
                          <div className="input-item input-item-name ltn__custom-icon">
                            <input type="text" placeholder="Type your name...." />
                          </div>
                          <div className="input-item input-item-email ltn__custom-icon">
                            <input type="email" placeholder="Type your email...." />
                          </div>
                          <div className="input-item input-item-website ltn__custom-icon">
                            <input type="text" name="website" placeholder="Type your website...." />
                          </div>
                          <label className="mb-0">
                            <input type="checkbox" name="agree" /> Save my name, email, and website
                            in this browser for the next time I comment.
                          </label>
                          <div className="btn-wrapper">
                            <button
                              className="btn theme-btn-1 btn-effect-1 text-uppercase"
                              type="submit"
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
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
        </div>
      </div>
    </>
  );
}

export default withRouter(DetailProduct);
