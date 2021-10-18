import React from 'react';
import { Row } from 'react-bootstrap';
import useProduct from '../../hooks/useProduct';
import Product from '../Product/Product';

const AllProduct = () => {
  const products = useProduct();
  return (
    <div className="container">
      <h1 className="fw-bold mt-3 mb-4">All Product</h1>

      <div>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4 bg-white">
          {products.map(product => (
            <Product product={product}></Product>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default AllProduct;
