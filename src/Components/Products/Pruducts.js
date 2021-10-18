import React from 'react';
import { Row } from 'react-bootstrap';
import useProduct from '../../hooks/useProduct';
import Product from '../Product/Product';

const Pruducts = () => {
  const products = useProduct();
  return (
    <div id="bestSellings" className="container mt-5">
      <div className=" mb-5">
        <h2 className="fw-bold">Best Sellings Fitness materials</h2>
      </div>
      <div>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4 bg-white rounded-3">
          {products.map(product =>
            product.id <= 106 ? <Product product={product}></Product> : []
          )}
        </Row>
      </div>
    </div>
  );
};

export default Pruducts;
