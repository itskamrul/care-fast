import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/notFound.png';

const NotFound = () => {
  return (
    <div>
      <div>
        <img className=" img-fluid" src={notFound} alt="" />
      </div>
      <Link to="/home" className="btn-regular">
        GO Back
      </Link>
    </div>
  );
};

export default NotFound;
