import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
  const {
    signUsingGoogle,
    registerWithEmail,
    getEmail,
    getPassword,
    setError,
    error,
    setUsers,
  } = useAuth();

  useEffect(() => {
    document.title = 'Register -CareFast';
  }, []);

  const history = useHistory();
  const location = useLocation();
  const redirect_url = location.state?.from || '/home';

  const handleEmail = e => {
    const email = e.target.value;
    getEmail(email);
  };
  const handlePassword = e => {
    const password = e.target.value;
    getPassword(password);
  };
  const handleRegisterWithEmail = () => {
    registerWithEmail()
      .then(result => {
        setUsers(result.user);
        history.push(redirect_url);
      })
      .catch(error => {
        setError(error.message);
      });
  };
  return (
    <div className="container">
      <div>
        <p className="text-danger">{error}</p>
      </div>
      <div className="d-flex justify-content-center">
        <div className="login-container shadow">
          <div>
            <i className="far fa-user login-icon"></i>
            <h4 className="fw-bold login-title">Register</h4>
          </div>
          <div>
            <input
              onBlur={handleEmail}
              type="email"
              className="form-control input-box"
              placeholder="email"
              required
            />
            <input
              onBlur={handlePassword}
              type="password"
              className="form-control input-box"
              placeholder="password"
              required
            />
          </div>
          <Button onClick={handleRegisterWithEmail} className="login-btn">
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
    </div>
  );
};

export default Register;
