import React, { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';
import SlideInProduct from '../Product/components/Slide';
import './stye.css';
import cartApi from '../../api/cartApi';
import { useDispatch } from 'react-redux';
import { dlt } from '../Auth/userSlice';
import { Link } from 'react-router-dom';
import LoadingCart from './components/LoadingCart';
import ScrollTop from '../../components/ScrollTop';
import EmptyCart from './components/EmptyCart';

function Cart(props) {
  const dispatch = useDispatch();
  const [Cart, setCart] = useState([]);
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [loading, setLoading] = useState(1);
  const [reload, setReload] = useState(false);
  const user = useSelector((state) => state.user.current);
  const { enqueueSnackbar } = useSnackbar();
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
          let sum = 0;
          cart.results.map((item) => {
            return sum += item.priceTotal;
          });
          setCartSubtotal(sum);
        };

        fecthCart();
        setTimeout(() => {
          setLoading(0);
        }, 1000);
      } catch (error) {
        console.log('FAILDED TO FETCH PRODUCT LIST', error);
      }
    }
  }, [user, reload]);

  const handleDeleteItem = async (item) => {
    const res = await cartApi.deleteCart(item.id);
    if (typeof res === 'string') {
      setCart([...Cart.filter((el) => el.id !== item.id)]);
      dispatch(dlt(1));
      enqueueSnackbar(`Delete Product Successfully`, {
        variant: 'success',
      });
    }
    setReload(!reload);
  };

  const hanldeChangeQuantity = (item, event) => {
    const quantityUpdate = event.target.value;
    const idCart = item.id;
    console.log(idCart);
    let sum = 0;
    setCart((Cart) =>
      Cart.map((item) => (idCart === item.id ? { ...item, quantity: quantityUpdate } : item))
    );
    Cart.map((item) => {
     return sum += item.price * item.quantity;
    });
    setCartSubtotal(sum);
    console.log(cartSubtotal)
    const updateRes = async () => {
      const res = await cartApi.updateQuantity({ quantity: Number(quantityUpdate) }, item.id);
      console.log('res', res);
    };
    updateRes();
  };

  if (loading === 1) return <LoadingCart />;

  return (
    <>
      <ScrollTop />
      <SlideInProduct page="cart" />
      <div className="container">
        <div type="notice" className="CartNotice__StyledCartNotice-sc-1b5bk36-0 bJVYzv">
          <div className="messages">
            <p className="messages__inner">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20">
                  <g fill="none" fillRule="evenodd">
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
              <span className="messages__text">
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
                  {Cart.length ? (
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
                                  {(item.price * item.quantity)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                  ₫
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
                  ) : (
                    <EmptyCart />
                  )}
                </section>
                {Cart.length > 0 && (
                  <div className="shoping-cart-total mt-50">
                    <div className="btn-wrapper text-right">
                      <Link to="/order" className="theme-btn-1 btn btn-effect-1">
                        Proceed to checkout
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
