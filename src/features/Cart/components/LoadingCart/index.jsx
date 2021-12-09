import React, { useEffect } from 'react';
import Lottie from 'lottie-web';
import animation from './cart.json';
function LoadingCart(props) {
    const animationcontainer = React.createRef();

  useEffect(() => {
    Lottie.loadAnimation({
        container : animationcontainer.current,
        animationData : animation ,
        loop: true,

    },)
  }, []);
  return (
    <>
    <div className="container" style={{height: "1000px",marginTop : "100px"}}>
        <div className="animation" ref={animationcontainer}>
        </div>
    </div>
    </>
  );
}

export default LoadingCart;
