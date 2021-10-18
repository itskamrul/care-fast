import React from 'react';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import products from '../../Utilitis/fakedata';

const ProductDetails = () => {
  const { productID } = useParams();

  const displayProduct = products.find(product => product.id == productID);
  const { name, img, value, description, review } = displayProduct;
  return (
    <div>
      <div className=" row container">
        <div className="col-md-6">
          <img className="img-fluid" src={img} alt="" />
        </div>
        <div className="col-md-6 text-start">
          <h4>{name}</h4>
          <h6>Review: {review}</h6>
          <Rating
            initialRating={value}
            readonly
            emptySymbol="far fa-star icon-color"
            fullSymbol="fas fa-star icon-color"
          ></Rating>
          <div className="d-flex flex-column ">
            <span>Description:</span>
            <span> {description}</span>
          </div>
          <Link className="btn-regular" to="/home">
            GO Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
