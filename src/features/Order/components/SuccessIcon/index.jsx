import React, { useEffect } from 'react';
import Lottie from 'lottie-web';
import animation from './success.json';

function SuccessIcon(props) {
  const animationcontainer = React.createRef();

  useEffect(() => {
    Lottie.loadAnimation({
      container: animationcontainer.current,
      animationData: animation,
      loop: true,
    });
  },[animationcontainer]);
  return (
    <>
        <div className="animation" ref={animationcontainer}></div>
    </>
  );
}

export default SuccessIcon;
