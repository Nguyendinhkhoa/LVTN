import React, { useEffect } from 'react';
import animation from './empty-search.json';
import Lottie from 'lottie-web';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

EmptySearch.propTypes = {};

function EmptySearch(props) {
  const animationcontainer = React.createRef();

  useEffect(() => {
    Lottie.loadAnimation({
      container: animationcontainer.current,
      animationData: animation,
      loop: true,
    });
  }, [animationcontainer]);
  return (
    <>
      <div className="container" style={{ height: '500px', marginTop: '10px' }}>
        <div
          className="animation"
          style={{ height: '300px'}}
          ref={animationcontainer}
        ></div>
        <div className="row empty-cart">
          <span>No product were found</span>
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

export default EmptySearch;
