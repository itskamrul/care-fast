import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import healthData from '../../Utilitis/healthData';

const ServiceDetails = () => {
  const { serviceID } = useParams();

  const displayService = healthData.find(service => service.id == serviceID);
  const { name, img, price, details, sample } = displayService;
  return (
    <div>
      <div className=" row container">
        <div className="col-md-6">
          <img className="img-fluid" src={img} alt="" />
        </div>
        <div className="col-md-6 text-start">
          <h4>{name}</h4>
          <h5>Fee: TK {price}</h5>
          <h6>
            Sample: <span className="text-danger">{sample}</span>
          </h6>
          <div className="d-flex flex-column ">
            <span>Details:</span>
            <span> {details}</span>
          </div>
          <Link className="btn-regular" to="/home">
            GO Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
