import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
  const { id, name, img, price, value } = product;
  return (
    <div>
      <Col>
        <Card className="product-container">
          <Card.Img className="card-image img-fluid" variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name.slice(0, 16)}</Card.Title>
            <Rating
              initialRating={value}
              readonly
              emptySymbol="far fa-star icon-color"
              fullSymbol="fas fa-star icon-color"
            ></Rating>
            <Card.Text>Price: {price}</Card.Text>
            <Link className="btn-regular" to={`/productDetails/${id}`}>
              See details
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Product;
