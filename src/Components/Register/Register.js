import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
  const { signUsingGoogle, registerWithEmail, getEmail, getPassword, error } =
    useAuth();

  const handleEmail = e => {
    const email = e.target.value;
    getEmail(email);
  };
  const handlePassword = e => {
    const password = e.target.value;
    getPassword(password);
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="login-container shadow">
        <div>
          <i class="far fa-user login-icon"></i>
          <h4 className="fw-bold login-title">Register</h4>
        </div>
        <div>
          <input
            onBlur={handleEmail}
            type="email"
            class="form-control input-box"
            id=""
            placeholder="email"
            required
          />
          <input
            onBlur={handlePassword}
            type="password"
            class="form-control input-box"
            id=""
            placeholder="password"
            required
          />
        </div>
        <Button onClick={registerWithEmail} className="login-btn">
          Get Started
        </Button>
        <p>
          Have account? <Link to="./login">login</Link>
        </p>
        <p>or</p>
        <Button onClick={signUsingGoogle} className="btn-regular">
          Google Sign In
        </Button>
      </div>
    </div>
  );
};

export default Register;
