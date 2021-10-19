import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
  const { id, name, img } = service;
  return (
    <div>
      <Col>
        <Card className="product-container">
          <Card.Img className="card-image img-fluid" variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Link className="btn-regular" to={`/ServiceDetails/${id}`}>
              See details
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
