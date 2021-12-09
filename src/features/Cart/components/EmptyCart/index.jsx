import React, { useEffect } from 'react';
import animation from './empty-cart.json';
import Lottie from 'lottie-web';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function EmptyCart(props) {
  const animationcontainer = React.createRef();

  useEffect(() => {
    Lottie.loadAnimation({
      container: animationcontainer.current,
      animationData: animation,
      loop: true,
    });
  }, []);
  return (
    <>
      <div className="container" style={{ height: '500px', marginTop: '10px' }}>
        <div
          className="animation"
          style={{ height: '150px', marginTop: '150px' }}
          ref={animationcontainer}
        ></div>
        <div className="row empty-cart">
          <span>Yourt Cart is Empty</span>
          <Link to="/products">
            <Button variant="contained" color="secondary">
              Buy Now
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default EmptyCart;
