import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
  const services = useServices();
  return (
    <div className="container mt-5">
      <div className=" mb-5">
        <h2 className="fw-bold">Our Services</h2>
      </div>
      <div>
        <Row xs={1} sm={2} md={3} className="g-4 bg-white rounded-3">
          {services.map(service =>
            service.id <= 106 ? (
              <Service key={service.id} service={service}></Service>
            ) : (
              []
            )
          )}
        </Row>
      </div>
    </div>
  );
};

export default Services;
