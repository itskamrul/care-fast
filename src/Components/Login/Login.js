import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
  const { users, signUsingGoogle } = useAuth();
  console.log(users);
  return (
    <div className="d-flex justify-content-center">
      <div className="login-container shadow">
        <div>
          <i className="far fa-user login-icon"></i>
          <h4 className="fw-bold login-title">Login</h4>
        </div>
        <div>
          <input
            type="email"
            className="form-control input-box"
            placeholder="email"
          />
          <input
            type="password"
            className="form-control input-box"
            placeholder="password"
          />
        </div>
        <Button className="login-btn">Get Started</Button>
        <p>
          Don't have account? <Link to="./register">Register</Link>
        </p>
        <p>or</p>
        <Button onClick={signUsingGoogle} className="btn-regular">
          Google Sign In
        </Button>
      </div>
    </div>
  );
};

export default Login;
