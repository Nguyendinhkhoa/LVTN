import React, { useState, useEffect } from 'react';
import Loading from '../Loading';
import './test.css';
import Lottie from 'lottie-web';
import animation from './cart.json';
function Test(props) {
    const animationcontainer = React.createRef();
    console.log(animationcontainer);

  useEffect(() => {
    Lottie.loadAnimation({
        container : animationcontainer.current,
        animationData : animation ,

    })
  }, []);
  return (
    <>
    <div className="container">
        <div className="animation" ref={animationcontainer}>

        </div>
    </div>
    </>
  );
}

export default Test;
