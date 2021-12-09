import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import SlideInProduct from '../Product/components/Slide';
import orderApi from '../../api/orderApi';
import './style.css';
import CustomizedSteppers from './Stepper/CustomizedSteppers';
import CancelOrder from './Stepper/CancelOrder';
import Loading from '../Loading';
function ViewOder(props) {
  const orderId = props.match.params.orderId;
  const [order, setOrder] = useState({});
  const [orderCancel, setOrderCancel] = useState(false);
  const [orderStatus1, setOrderStatus] = useState(0);
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [loading,setLoading] = useState(1);
  useEffect(() => {
    setLoading(1);
    try {
      const fecthOrder = async () => {
        const params = {
          orderId,
        };
        const order = await orderApi.getOderById(params);
        setOrder(order);
        if(order.orderStatus === 'Unconfirm'){
          setOrderCancel(true);
        }
        switch(order.orderStatus){
          case "Unconfirm" : 
          setOrderStatus(0);
          break;
          case "Confirm" : 
          setOrderStatus(1);
          break;
          case "Shipping" : 
          setOrderStatus(2);
          break;
          case "Conpleted" : 
          setOrderStatus(3);
          break;
        }
        let initialValue=0;
        let sum = order.listCart.reduce(function (previousValue, currentValue) {
          return previousValue + currentValue.priceTotal;
        }, initialValue);
        setCartSubtotal(sum);
              setLoading(0);
      };
      fecthOrder();

    } catch (error) {
      console.log('FAILDED TO FETCH PRODUCT LIST', error);
    }

  }, [orderStatus1]);
  if(loading === 1) return <Loading/>
  return (
    <div>
      <button onClick={() => setOrderStatus(2)}>Click me</button>
      <SlideInProduct page="Order Detail" />
      <div className="order-detail">
        <div className="container">
          <div className="row id-order">
            <div className="info-id">
              <span>ORDER ID : {orderId}</span>
              <span style={{ margin: '0 5px' }}> |</span>
              <span className="order-completed-status">Order Completed</span>
            </div>
          </div>
          <div className="_1J7vLy">
            <div className="DI-rNr tyOBoQ"> </div>
            <div className="DI-rNr _25igL4"> </div>
          </div>
          <div className="row">
            <div className="order-tracking">
              {orderCancel === true ? (
            
                <CancelOrder activeSteps={1} />
              ) : (
                <CustomizedSteppers activeSteps={orderStatus1} />
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 info-address information-address">
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
                      <div className="name">{order.receiverName}</div>
                    </div>
                    <div className="phone">{order.phoneNumber}</div>
                    <div className="address">{order.addressDelivery}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="show-order">
              <table className="styles__StyledProductList-sc-ri73gr-3 Nbknf">
                <thead>
                  <tr>
                    <th>Sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Giảm giá</th>
                    <th>Tạm tính</th>
                  </tr>
                </thead>
                <tbody>
                  {order.listCart &&
                    order.listCart.map((item, idx) => {
                      return (
                        <tr key={idx}>
                          <td className="product--info">
                            <div className="product-item">
                              <img src={item.image} alt="" />
                              <div className="product-info">
                                <a
                                  className="product-name"
                                  href="/product-p22597852.html?spid=22597853"
                                >
                                  {item.productName}
                                </a>
                              </div>
                            </div>
                          </td>
                          <td className="price">
                            {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ₫
                          </td>
                          <td className="quantity">1</td>
                          <td className="discount-amount">0 ₫</td>
                          <td className="raw-total">
                            {item.priceTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ₫
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={4}>
                      <span>Order Subtotal</span>
                    </td>
                    <td>{cartSubtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ₫</td>
                  </tr>
                  <tr>
                    <td colSpan={4}>
                      <span>Phí vận chuyển</span>
                    </td>
                    <td>15.000 ₫</td>
                  </tr>
                  <tr>
                    <td colSpan={4}>
                      <span>Order Total</span>
                    </td>
                    <td>
                      <span className="sum">
                        {(cartSubtotal + 15000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ₫
                      </span>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(ViewOder);
