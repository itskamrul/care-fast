import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const AllServices = () => {
  useEffect(() => {
    document.title = 'Services -CareFast';
  }, []);

  const services = useServices();
  return (
    <div className="container">
      <h3 className="fw-bold mt-3 mb-4">Our All Health Checkup Services</h3>

      <div>
        <Row xs={1} sm={2} md={3} className="g-4 bg-white rounded-3">
          {services.map(service => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default AllServices;
