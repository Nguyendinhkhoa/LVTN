import React from 'react';
import PropTypes from 'prop-types';
import SlideInProduct from '../Product/components/Slide';
import './stye.css';
Cart.propTypes = {};

function Cart(props) {
  return (
    <>
      <SlideInProduct page="cart" />
      <div className="container">
        <div type="notice" class="CartNotice__StyledCartNotice-sc-1b5bk36-0 bJVYzv">
          <div class="messages">
            <p class="messages__inner">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20">
                  <g fill="none" fill-rule="evenodd">
                    <path
                      fill="#0d5cb6"
                      d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0z"
                    ></path>
                    <path
                      fill="#E2EBF6"
                      d="M10 18.77c-4.835 0-8.77-3.935-8.77-8.77 0-4.835 3.935-8.77 8.77-8.77 4.835 0 8.77 3.935 8.77 8.77 0 4.835-3.935 8.77-8.77 8.77z"
                    ></path>
                    <path
                      fill="#0d5cb6"
                      d="M10.115 8.72c.34 0 .616.276.616.616v5.23a.616.616 0 01-1.231 0v-5.23c0-.34.276-.615.615-.615zm.044-3.737a1.03 1.03 0 110 2.059 1.03 1.03 0 010-2.059z"
                    ></path>
                  </g>
                </svg>
              </span>
              <span class="messages__text">
                Due to the impact of the Covid-19 epidemic, some areas may receive goods later than
                expected. Thank you for your understanding!
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="liton__shoping-cart-area mb-120">
        <div className="container">
          <div className="row bg-w">
            <div className="col-lg-12">
              <div className="shoping-cart-inner">
                <div className="shoping-cart-table table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td className="cart-product-remove">x</td>
                        <td className="cart-product-image">
                          <a href="product-details.html">
                            <img src="img/product/1.png" alt="#" />
                          </a>
                        </td>
                        <td className="cart-product-info">
                          <h4>
                            <a href="product-details.html">Digital Stethoscope</a>
                          </h4>
                        </td>
                        <td className="cart-product-price">$149.00</td>
                        <td className="cart-product-quantity">
                          <div className="cart-plus-minus">
                            <div className="dec qtybutton">-</div>
                            <input type="number" name="qtybutton" className="cart-plus-minus-box" />
                            <div className="inc qtybutton">+</div>
                          </div>
                        </td>
                        <td className="cart-product-subtotal">$298.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="shoping-cart-total mt-50">
                  <h4>Cart Totals</h4>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Cart Subtotal</td>
                        <td>$618.00</td>
                      </tr>
                      <tr>
                        <td>Shipping and Handing</td>
                        <td>$15.00</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Order Total</strong>
                        </td>
                        <td>
                          <strong>$633.00</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="btn-wrapper text-right">
                    <a href="checkout.html" className="theme-btn-1 btn btn-effect-1">
                      Proceed to checkout
                    </a>
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

export default Cart;
