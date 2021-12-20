import React, { useState, useEffect } from 'react';
import SlideInProduct from '../Product/components/Slide';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from '../../components/form-control/InputField';
import { Button } from '@mui/material';
import './order.css';
import cartApi from '../../api/cartApi';
import userApi from '../../api/userApi';
import orderApi from '../../api/orderApi';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { useHistory } from 'react-router';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch } from 'react-redux';
import { setCoutCarts } from '../Auth/userSlice';
Order.propTypes = {};
function Order(props) {
  const [cart, setCart] = useState([]);
  const [cartId, setCartId] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [show, setShow] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const fecthCart = async () => {
        const cartRes = await cartApi.getCart();
        if (cartRes.results.length === 0) {
          history.push('/products');
        } else {
          console.log(cartRes.results);
          console.log(typeof cartRes.results);

          setCart(cartRes.results);
          console.log(cart.length);
          const dataId = [];
          cartRes.results.map((item, indx) => {
            dataId.push(item.id);
          });
          let sum = 0;
          cartRes.results.map((item) => {
            sum += item.priceTotal;
          });
          setCartSubtotal(sum);
          setCartId(dataId);
        }
      };
      fecthCart();
    } catch (error) {
      console.log('FAILDED TO FETCH PRODUCT LIST', error);
    }
  },[]);
  useEffect(() => {
    const fecthUser = async () => {
      const UserRes = await userApi.info();
      if (!UserRes.phone || !UserRes.address) {
        console.log('no info');
        setShow(true);
      }
      setUserInfo(UserRes);
    };
    fecthUser();
  }, []);

  const schema = yup.object().shape({
    receiverName: yup.string().required('Please enter your name'),
    phoneNumber: yup
      .string()
      .required('Please enter your phone')
      .matches(/[0-9]/, 'Must be only number')
      .min(10, 'Please enter phone have 10 number')
      .max(10, 'Please enter phone have 10 number'),
    addressDelivery: yup.string().required('Please enter your address'),
  });

  const form = useForm({
    defaultValues: {
      receiverName: '',
      phoneNumber: '',
      addressDelivery: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    setUserInfo({
      ...userInfo,
      name: values.receiverName,
      phone: values.phoneNumber,
      address: values.addressDelivery,
    });
    handleClose();
  };
  const handleSubmitOrder = () => {
    const order = {
      receiverName: userInfo.name,
      phoneNumber: userInfo.phone,
      addressDelivery: userInfo.address,
      cartIds: cartId,
    };
    try {
      (async () => {
        try {
          const placeOrder = await orderApi.createOder(order);
          localStorage.setItem('countCarts', 0);
          console.log('order nè', placeOrder);
          history.push(`/OrderSuccess?orderId=${placeOrder.id}`);
          
        } catch (error) {
          console.log('fetch error', error);
        }
      })();
      dispatch(setCoutCarts());
    } catch (error) {
      console.log('fail', error.message);
    }
    console.log(order);
  };
  const handleClickOpen = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    if (!userInfo.phone || !userInfo.address) {
      history.push('/cart');
    }
  };
  return (
    <>
      <SlideInProduct page="Order" />
      <div id="order-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12 info-address">
              <div className="_1G9Cv7"></div>
              <div className="content-info-address">
                <div className="title-info-address">
                  <div className="icon">
                    <svg
                      height="16"
                      widths="12"
                      viewBox="0 0 12 16"
                      width="12"
                      className="shopee-svg-icon icon-location-marker"
                    >
                      <path
                        d="M6 3.2c1.506 0 2.727 1.195 2.727 2.667 0 1.473-1.22 2.666-2.727 2.666S3.273 7.34 3.273 5.867C3.273 4.395 4.493 3.2 6 3.2zM0 6c0-3.315 2.686-6 6-6s6 2.685 6 6c0 2.498-1.964 5.742-6 9.933C1.613 11.743 0 8.498 0 6z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>Delivery Address</div>
                </div>
                <div className="info-address-inline">
                  <div className="user-info">
                    <div className="name__wrap">
                      <div className="name">{userInfo.name}</div>
                      <div className="phone">{userInfo.phone}</div>
                    </div>
                    <div className="address">{userInfo.address}</div>
                  </div>
                  <div className="change-address">
                    <Button
                      className="btn btn-primary"
                      type="button"
                      variant="contained"
                      data-toggle="collapse"
                      data-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                      onClick={handleClickOpen}
                    >
                      Change Info
                    </Button>
                  </div>
                </div>
                {show ? (
                  <div className="collapse show" id="collapseExample">
                    <Dialog
                      disableBackdropClick
                      open={show}
                      onClose={handleClose}
                      aria-labelledby="form-dialog-title"
                    >
                      {!userInfo.phone || !userInfo.address ? (
                        <DialogTitle id="form-dialog-title">
                          Please enter your infomation
                        </DialogTitle>
                      ) : (
                        <DialogTitle id="form-dialog-title">New Address</DialogTitle>
                      )}
                      <DialogContent>
                        <form onSubmit={form.handleSubmit(handleSubmit)}>
                          <InputField name="receiverName" label="Full Name" form={form} />
                          <InputField name="phoneNumber" label="Phone" form={form} />
                          <InputField name="addressDelivery" label="Address" form={form} />
                          <Button
                            // disabled={isSubmitting}
                            type="submit"
                            variant="contained"
                            color="primary"
                            // fullWidth
                            // className={classes.submit}
                          >
                            Confirm
                          </Button>
                        </form>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose} color="primary" type="text">
                          Cancel
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 product-in-cart">
              <div className="cart-title">
                <div className="content">
                  <div className="info product-info">
                    <div className="product-name">Product</div>
                  </div>
                  <div className="info">Price</div>
                  <div className="info">Quantity</div>
                  <div className="info">Total</div>
                </div>
              </div>
              {cart.map((item, ind) => {
                return (
                  <div className="cart-content" key={item.id}>
                    <div className="product">
                      <div className="information-product product-img-name">
                        <img src={item.image} width="40px" height="40px" alt="" />
                        <span>{item.productName}</span>
                      </div>
                      <div className="product-price">
                        {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}₫
                      </div>
                      <div className="product-quantity">{item.quantity}</div>
                      <div className="product-total">
                        {item.priceTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}₫
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="row">
            <div className="shoping-cart-total1 mt-50">
              <h4>Cart Totals</h4>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Cart Subtotal</td>
                    <td>{cartSubtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}₫</td>
                  </tr>
                  <tr>
                    <td>Shipping and Handing</td>
                    <td>15,000₫</td>
                  </tr>
                  <tr>
                    <td>Vat</td>
                    <td>$00.00</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Order Total</strong>
                    </td>
                    <td>
                      <strong>
                        {(cartSubtotal + 15000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}₫
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="btn-wrapper text-right">
                <button onClick={handleSubmitOrder} className="theme-btn-1 btn btn-effect-1">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
