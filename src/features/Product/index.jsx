import React, { useEffect, useState } from 'react';
import productApi from '../../api/productApi';
import SlideInProduct from './components/Slide';
import './style.css';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import ProductSkelatonList from './components/ProductSkelatonList';
import ProductList from './components/ProductList';
import Pagination from '@material-ui/lab/Pagination';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProductFilter from './components/ProductFilters';
import baner_2 from './images/banner-2.jpg';
import { Link } from 'react-router-dom';
import CategorySkelaton from './components/CategorySkelaton';
const useStyles = makeStyles((theme) => ({
  pagination: {
    display: 'flex',
    flexFlow: 'row nowap',
    justifyContent: 'center',
  },
}));

function Product(props) {
  const classes = useStyles();
  const location = useLocation();
  const [listProduct, SetListProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    totalPage: 1,
    page: 1,
  }); 
  const [cateSort, SetCateSort] = useState(() => {
    const params = queryString.parse(location.search);

    if (Object.keys(params).length === 0) {
      return null;
    }
    return params.category;
  });

  const [filters, setFilters] = useState({
    limit: 9,
    page: 1,
    category: cateSort,
  });
  // useEffect(() => {
  //   setLoading(true);
  //   const fecthCategory = async () => {
  //     const categoryList = await categoryApi.getAll();
  //     const arrCate = categoryList.results;
  //     SetlistCate(arrCate);
  //     setLoading(false);
  //   };

  //   fecthCategory();
  // }, []);

  // useEffect(() => {
  //   const fecthProduct = async () => {
  //     const productList = await productApi.getAll(filters);
  //     const arrProduct = productList.results;
  //     SetListProduct(arrProduct);
  //   };
  //   setLoading(false);
  //   fecthProduct();
  // }, [!location.search]);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const productList = await productApi.getAll(filters);
        const arrProduct = productList.results;
        SetListProduct(arrProduct);
        setPagination({
          ...pagination,
          totalPage: productList.totalPages,
          page: productList.page,
        });
      } catch (error) {
        console.log('fetch error', error);
      }
      setLoading(false);
    })();
  }, [filters]);

  const handlePageChange = (e, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      page: page,
    }));
    window.scrollTo(0, 400);
  };
  const HandleFiltersChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };
  return (
    <div>
      <SlideInProduct page="Products" />
      <div className="ltn__product-area ltn__product-gutter mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 order-lg-2 mb-120">
              <div className="tab-content">
                <div className="tab-pane fade active show" id="liton_product_grid">
                  <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                    <div className="row">

                      {loading ? <ProductSkelatonList /> :<ProductList data={listProduct}  />}
                    </div>
                  </div>
                </div>
              </div>
              <Box className={classes.pagination}>
                {listProduct.length > 0 && (
                  <Pagination
                    count={pagination.totalPage}
                    page={pagination.page}
                    onChange={handlePageChange}
                    color="secondary"
                  />
                )}
              </Box>
            </div>
            <div className="col-lg-4  mb-120">
              <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar">
                <div className="widget1 ltn__menu-widget">
                  <h4 className="ltn__widget-title ltn__widget-title-border">Product categories</h4>
                  <li >
                    <Link to="/products">
                      <span>All Category</span>
                    </Link>
                  </li>
                  {loading ? <CategorySkelaton/> : <ProductFilter filters={filters} onChange={HandleFiltersChange} />}
                  
                </div>

                {/* Banner Widget */}
                <div className="widget ltn__banner-widget">
                  <Link to="/products">
                    <img src={baner_2} alt="#" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
