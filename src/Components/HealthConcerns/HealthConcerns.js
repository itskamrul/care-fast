import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './HealthConcerns.css';

const HealthConcerns = () => {
  return (
    <div className="container mt-3 ">
      <div>
        <h2 className="fw-bold">Health Concerns</h2>
      </div>
      <div>
        <Row xs={1} lg={4} md={2} className="g-4">
          <Col className="card-item ">
            <Card className="shadow border-0 bg-white rounded-3">
              <Card.Img
                className="card-img  mx-auto d-block"
                variant="top"
                src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/liver-care.jpg?v=1"
              />
              <Card.Body>
                <Card.Title>Liver Care</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="card-item">
            <Card className="shadow border-0 bg-white rounded-3">
              <Card.Img
                className="card-img  mx-auto d-block"
                variant="top"
                src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/stomach-care.jpg?v=1"
              />
              <Card.Body>
                <Card.Title>Stomach Care</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="card-item">
            <Card className="shadow border-0 bg-white rounded-3">
              <Card.Img
                className="card-img  mx-auto d-block"
                variant="top"
                src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/kidney-care.jpg?v=1"
              />
              <Card.Body>
                <Card.Title>Kidney Care</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="card-item">
            <Card className="shadow border-0 bg-white rounded-3">
              <Card.Img
                className="card-img  mx-auto d-block"
                variant="top"
                src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/weight-care.jpg?v=1"
              />
              <Card.Body>
                <Card.Title>Weight Care</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HealthConcerns;
