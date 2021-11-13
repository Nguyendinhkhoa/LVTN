import React from 'react';
import PropTypes from 'prop-types';
import hinh from '../../../img/product/1.png';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';
Product.propTypes = {
    product : PropTypes.object,
};

function Product({product}) {
    return (
        <div className="col-xl-4 col-sm-6 col-6">
                  <div className="ltn__product-item ltn__product-item-3 text-center">
                    <Box minHeight="255px">
                    <div className="product-img" >
                      <Link to={`/product-detail/${product.slug}`}><img height="255px" src={product.image? product.image : hinh} alt="#" /></Link>
                    </div>
                    </Box>
                    <div className="product-info">

                      <h2 className="product-title"><a href="product-details.html">{product.name}</a></h2>
                      <div className="product-price">
                        <span>{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}₫</span>
                        <del>$162.000 ₫</del>
                      </div>                                                      
                    </div>
                  </div>
        </div>
    );
}

export default Product;