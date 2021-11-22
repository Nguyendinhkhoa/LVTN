import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

NewProduct.propTypes = {
  listProduct: PropTypes.array,
};

function NewProduct({ listProduct }) {
  console.log(listProduct);
  return (
    <>    
      {listProduct.map((product, index) => {
        return (
          <div className="col-lg-3--- col-md-4 col-sm-6 col-6" key={product.id}>
            <div className="ltn__product-item ltn__product-item-2 text-left">
              <div className="product-img">
                <Link to={`/product-detail/${product.slug}`}>
                  <img src={product.image} alt="#" />
                </Link>
                <div className="product-badge">
                  <ul>
                    <li className="sale-badge">New</li>
                  </ul>
                </div>
              </div>
              <div className="product-info">
                <h2 className="product-title">
                  <Link to={`/product-detail/${product.slug}`}>{product.name}</Link>
                </h2>
                <div className="product-price">
                  <span>{product.price}</span>
                  <del>$46.00</del>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default NewProduct;
