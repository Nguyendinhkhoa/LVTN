import React, { useState , useEffect } from 'react';
import PropTypes from 'prop-types';
import banner11 from '../images/banner11.jpg';
import banner12 from '../images/banner12.jpg';
import NewProduct from './NewProduct';
import productApi from '../../../api/productApi';
LatestProduct.propTypes = {};
function LatestProduct(props) {
  const [listProduct, setListProduct] = useState([]);
  const [params,setParams] = useState({
      sortBy : '-created',
      limit : 6,
  })
  useEffect(() => {
    const fecthProduct = async () => {
      const productList = await productApi.getAll(params);
      const arrProduct = productList.results;
      console.log(arrProduct);
      setListProduct(arrProduct);
    };
    fecthProduct();
  }, []);
  return (
    <>
      <div className=" ltn__product-gutter  no-product-ratting pt-85 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2 text-center">
                <h1 className="section-title">Newest Products</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="row">
                <div className="col-lg-12 col-sm-6">
                  <div className="ltn__banner-item">
                    <div className="ltn__banner-img">
                      <a href="shop.html">
                        <img src={banner11} alt="Banner Image" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-sm-6">
                  <div className="ltn__banner-item">
                    <div className="ltn__banner-img">
                      <a href="shop.html">
                        <img src={banner12} alt="Banner Image" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row ltn__tab-product-slider-one-active--- slick-arrow-1">
                <NewProduct listProduct={listProduct}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestProduct;
