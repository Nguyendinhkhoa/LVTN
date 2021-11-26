import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import SlideInProduct from '../Product/components/Slide';
import './stye.css';
import cartApi from '../../api/cartApi';
import Loading from '../Loading';
import Lottie from 'lottie-web';
import { useDispatch } from 'react-redux';
import { dlt } from '../Auth/userSlice';

function Cart(props) {
  const dispatch = useDispatch();
  const [Cart, setCart] = useState([]);
  const [loading, setLoading] = useState(1);
  const [params, setParams] = useState({});
  const [listUpdate, setListUpdate] = useState([]);
  const user = useSelector((state) => state.user.current);
  console.log(typeof user);
  useEffect(() => {
    setLoading(1);
    if (Object.keys(user).length === 0) {
      setCart([]);
      setTimeout(() => {
        setLoading(0);
      }, 1000);
    } else {
      try {
        const fecthCart = async () => {
          const cart = await cartApi.getCart();
          console.log(cart);
          setCart(cart.results);
        };
        fecthCart();
        setTimeout(() => {
          setLoading(0);
        }, 1000);
      } catch (error) {
        console.log('FAILDED TO FETCH PRODUCT LIST', error);
      }
    }
  }, [user]);


  const handleDeleteItem = async (item) => {
    const res = await cartApi.deleteCart(item.id)
    if (typeof(res) === 'string') {
      setCart([...Cart.filter(el => el.id !== item.id)])
    }
    dispatch(dlt(1));
  };

  const hanldeChangeQuantity = (item, event) => {

    setListUpdate([
      ...listUpdate.filter(el => el.productId !== item.productId),
      {
        id : item.id,
        productId: item.productId,
        quantity: event.target.value
      }
    ])
  };

  if (loading === 1) return <Loading />;

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
      <section id="cart-title">
        <div className="container">
          <h2>Shopping Cart</h2>
          <hr />
        </div>
      </section>

      <div className="liton__shoping-cart-area mb-120">
        <div className="container">
          <div className="row bg-w">
            <div className="col-lg-12">
              <div className="shoping-cart-inner">
                <section className="shopping-cart spad">
                  { listUpdate.length }
                  <div className="cart-table">
                    <table>
                      <thead className="thead-table">
                        <tr>
                          <th className="duongke">Image</th>
                          <th className="p-name duongke">Product Name</th>
                          <th className="duongke">Price</th>
                          <th className="duongke">Quantity</th>
                          <th className="duongke">Total</th>
                          <th> Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        { !Cart.length && <div>No Product In Cart</div>}
                        {Cart.map((item, index) => {
                          return (
                            <tr className="item-cart" key={item.id}>
                              <td className="cart-pic first-row duongke">
                                <img src={item.image} alt="" />
                              </td>
                              <td
                                className="cart-title first-row duongke"
                                style={{ fontFamily: 'inherit', fontWeight: 500 }}
                              >
                                {item.productName}
                              </td>
                              <td className="product-price d-none"></td>
                              <td className="p-price first-row duongke">
                                {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}₫
                              </td>
                              <td className="qua-col first-row duongke">
                                <div className="quantity-cart">
                                  <input
                                    id="test-input"
                                    className="form-control"
                                    type="number"
                                    min={1}
                                    onChange={(e) => hanldeChangeQuantity(item, e)}
                                    defaultValue={item.quantity}
                                  />
                                </div>
                              </td>
                              <td className="total-price first-row duongke">
                                {item.priceTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}₫
                              </td>
                              <td className="close-td first-row">
                                <i
                                  className="fas fa-trash"
                                  onClick={() => handleDeleteItem(item)}
                                ></i>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </section>

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
