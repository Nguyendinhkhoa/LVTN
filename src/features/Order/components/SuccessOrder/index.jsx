import React from 'react';
import PropTypes from 'prop-types';
import SlideInProduct from '../../../Product/components/Slide';
import SuccessIcon from '../SuccessIcon';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import queryString from 'query-string';
import { useEffect } from 'react';
import { useState } from 'react';
import orderApi from '../../../../api/orderApi';
import Loading from '../../../Loading';


function SuccessOrder(props) {
     const location = useLocation();
     const history = useHistory();
     const [orderId,setOrderId] = useState('');
     const [loading,setLoading] = useState(true);
     useEffect(()=>{
          Loading(true)
          const params = queryString.parse(location.search);
          console.log(params);
          (async () => {
               try {
               const fecth = await orderApi.getOderById(params);
                 console.log(fecth.id);
                 setOrderId(fecth.id);
                 setLoading(false);
               } catch (error) {
                    history.push('/products');
               }
             })();         
     },[])
  return loading ? <Loading/> : (
    <>
      <SlideInProduct page="Order Success" />
      <div className="container">
        <div className="checkout-page">
          <div className="iconsucces">
            <SuccessIcon />
          </div>
          <h1 className="title-success">THANK YOU FOR YOUR PURCHASE</h1>
          <div className="info-order-success">
            <p style={{ fontsize: '20px' }}>Your order number: <span className='order-number'>{orderId}</span> </p>
            <p>You can review your order : <Link to={`/account/view-order/${orderId}`}>Your order</Link> </p>
            <p className="notice-message">
              Orders shipped to or through areas affected by Covid-19 may be delivered later than
              expected. We ask for your understanding.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuccessOrder;
