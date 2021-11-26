import React from 'react';
import './NotFound.css';
import back from './p404.png';
import { Link } from 'react-router-dom';
function NotFound(props) {
  return (
    <div id="NotFound">
      <div id="container">
        <div className="content" style={{ backgroundImage: `url(${back})` }}>
          <h2>404</h2>
          <h4>Opps! Page Not Found </h4>
          <p>
            the page you were looking for doesn't exist . you may have mistyped the address or the
            page may have moved
          </p>
          
          <Link to="/">Back To Home</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
