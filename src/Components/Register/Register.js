import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="login-container shadow">
        <div>
          <i class="far fa-user login-icon"></i>
          <h4 className="fw-bold login-title">Register</h4>
        </div>
        <div>
          <input
            type="email"
            class="form-control input-box"
            id=""
            placeholder="email"
          />
          <input
            type="password"
            class="form-control input-box"
            id=""
            placeholder="password"
          />
        </div>
        <Button className="login-btn">Get Started</Button>
        <p>
          Have account? <Link to="./login">login</Link>
        </p>
        <p>or</p>
        <Button className="btn-regular">Google Sign In</Button>
      </div>
    </div>
  );
};

export default Register;
