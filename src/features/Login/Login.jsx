import React from 'react';
import { Link } from 'react-router-dom';



function Login(props) {
    return (
        <>
            <div className="container">
  <form action method="POST" className="login-email">
    <p className="login-text" style={{fontSize: '2rem', fontWeight: 800}}>Login</p>
    <div className="input-group">
      <input type="email" placeholder="Email" name="email" required />
    </div>
    <div className="input-group">
      <input type="password" placeholder="Password" name="password"  required />
    </div>
    <div className="input-group">
      <button name="submit" className="btn">Login</button>
    </div>
    <p className="login-register-text">Don't have an account? <Link to="/register">Register Here</Link>.</p>
  </form>
</div>

        </>
    );
}

export default Login;