import React, { useEffect, useState } from 'react';

const useProduct = () => {
  const [products, setProuducts] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setProuducts(data));
  }, []);
  return products;
};

export default useProduct;
