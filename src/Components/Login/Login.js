import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
  const {
    signUsingGoogle,
    signInWithEmail,
    getEmail,
    getPassword,
    error,
    setError,
    setUsers,
    setIsLoding,
  } = useAuth();

  useEffect(() => {
    document.title = 'Login -CareFast';
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

  const handleGoogleSignin = () => {
    signUsingGoogle()
      .then(result => {
        setUsers(result.user);
        history.push(redirect_url);
      })
      .finally(() => {
        setIsLoding(false);
      });
  };
  const handleSigninWithEmail = () => {
    signInWithEmail()
      .then(result => {
        setUsers(result.user);
        history.push(redirect_url);
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <div>
      <p className="text-danger">{error}</p>
      <div className="d-flex justify-content-center">
        <div className="login-container shadow">
          <div>
            <i className="far fa-user login-icon"></i>
            <h4 className="fw-bold login-title">Login</h4>
          </div>
          <div>
            <input
              onChange={handleEmail}
              type="email"
              className="form-control input-box"
              placeholder="email"
              required
            />
            <input
              onChange={handlePassword}
              type="password"
              className="form-control input-box"
              placeholder="password"
              required
            />
          </div>
          {/* <input className="login-btn" type="submit" value="Login" /> */}
          <Button onClick={handleSigninWithEmail} className="login-btn">
            Get Started
          </Button>
          <p>
            Don't have account? <Link to="./register">Register</Link>
          </p>
          <p>or</p>
          <Button onClick={handleGoogleSignin} className="btn-regular">
            Google Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
