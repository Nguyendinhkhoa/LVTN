import React, { useEffect, useState } from 'react';
import productApi from '../../api/productApi';
import categoryApi from '../../api/categoryApi';
import SlideInProduct from './components/Slide';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import ProductSkelatonList from './components/ProductSkelatonList';
import ProductList from './components/ProductList';
import Pagination from '@material-ui/lab/Pagination';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProductFilter from './components/ProductFilters';

const useStyles = makeStyles((theme) => ({
  pagination : {
    display : 'flex',
    flexFlow : 'row nowap',
    justifyContent : 'center'
  }
}));


function Product(props) {
    const classes = useStyles();
    const location = useLocation();
    const [listProduct, SetListProduct] = useState([]);
    const [listCate, SetlistCate] = useState([]);
    const [loading,setLoading]= useState(true);
    const [pagination,setPagination] = useState({
      totalPage : 1,
      page : 1,
    })
    const [cateSort,SetCateSort]=useState(()=>{
      const params = queryString.parse(location.search);
        if(Object.keys(params).length === 0){
          return null;
        }
        return params.category;
    });

    const [filters,setFilters]= useState({
        limit : 9,                             
        page : 1,
        category : cateSort
    });



    // Fetch All Category
    useEffect(()=>{
        const fecthCategory = async () =>{
          const categoryList = await categoryApi.getAll();
          const arrCate = categoryList.results ;
          SetlistCate(arrCate);
        }
    
        fecthCategory();
    },[]);
 

    //  Fectch Product by Filter 
    useEffect(()=>{
      try{
        const fecthProduct = async () =>{
          const productList = await productApi.getAll(filters);
          const arrProduct = productList.results ;
          SetListProduct(arrProduct);
          setPagination({
            ...pagination,
            totalPage :productList.totalPages ,
            page : productList.page,
          });
        }
        fecthProduct();
      }  
      catch(error){
        console.log("FAILDED TO FETCH PRODUCT LIST",error);
      }
      setLoading(false);
    },[filters]);


      // const handleLiClick =( cateslug)=>{
      //   const queryParams = {category : cateslug};
      //   history.push({
      //       pathname : match.path,
      //       search : queryString.stringify(queryParams)
      //   });
      //   setFilters({
      //     ...filters,
      //     category : cateslug,          
      // });
      // }
    const  handlePageChange = (e,page)=>{
        setFilters(prevFilters=>({
          ...prevFilters,
          page : page,
        }));
        window.scrollTo(0,600);
      }
    const  HandleFiltersChange = (newFilters)=>{
        setFilters(prevFilters=>({
          ...prevFilters,
          ...newFilters,
        }));
      }
    return (
        <div>

<SlideInProduct/>
            <div className="ltn__product-area ltn__product-gutter mb-120">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 order-lg-2 mb-120">
        <div className="ltn__shop-options">
          <ul>
            <li>
              <div className="short-by text-center">
                <select className="nice-select">
                  <option >Default Sorting</option>
                  <option onChange={()=>{ alert('123');}}>Sort by popularity</option>
                  <option>Sort by new arrivals</option>
                  <option>Sort by price: low to high</option>
                  <option>Sort by price: high to low</option>
                </select>

              </div> 
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade active show" id="liton_product_grid">
            <div className="ltn__product-tab-content-inner ltn__product-grid-view">
              <div className="row">

            {loading ? <ProductSkelatonList/> :<ProductList data={listProduct}/>}  
              </div>
            </div>
          </div>
        </div>
        <Box className={classes.pagination}>
        <Pagination count={pagination.totalPage} page={pagination.page} onChange={handlePageChange} color="secondary" />
        </Box>
      </div>
      <div className="col-lg-4  mb-120">
        <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar">
          {/* Category Widget */}
          <ProductFilter filters={filters} onChange={HandleFiltersChange}/>

          
          {/* Banner Widget */}
          <div className="widget ltn__banner-widget">
            <a href="shop.html"><img src="../img/banner/banner-2.jpg" alt="#" /></a>
          </div>
        </aside>
      </div>
    </div>
  </div>
</div>

            đây là trang product
        </div>
    );
}

export default Product;