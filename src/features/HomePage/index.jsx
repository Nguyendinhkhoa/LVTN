import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import categoryApi from '../../api/categoryApi';
import { Redirect, Route, Switch } from 'react-router';
import ListPage from '../Todo/pages/ListPage';
import { Link } from 'react-router-dom';

HomePage.propTypes = {
    
};

function HomePage(props) {
    const [todoStatus,SetTodoStatus]= useState([
        {
        id: 1, 
        status : 'all',
    },
        {
        id: 2, 
        status : 'completed',
    }
]);

    const [test,SetTest] =useState([]);
    const [listCate, SetlistCate] = useState([]);
    useEffect(()=>{
        const fecthCategory = async () =>{
          const params = {

          }
          const categoryList = await categoryApi.getAll();
          const arrCate = categoryList.results ;
          SetlistCate(arrCate);
        }
    
        fecthCategory();
      },[]);
      console.log(listCate);



    return (
        <>
        <div className="ltn__slider-area ltn__slider-3---  section-bg-1--- mt-30">
            <div className="container">
                <div className="row">
                <div className="col-lg-3">
                    {/* CATEGORY-MENU-LIST START */}
                    <div className="ltn__category-menu-wrap">
                    <div className="ltn__category-menu-title">
                        <h2 className="section-bg-1 ltn__secondary-bg text-color-white" >Categories</h2>
                    </div>
                    <div className="ltn__category-menu-toggle ltn__one-line-active">
                        <ul>

                        { listCate && listCate.length >0 && listCate.map((cate,ind)=>{
                            return(
                                <li key={cate.id} className="ltn__category-menu-item ltn__category-menu-drop" >
                                    <Link  to={`/products?category=${cate.slug}`}>{cate.name} <span className="expand" /></Link>
                                </li>
                                )
                            }) }
                        </ul>
                    </div>
                    </div>
                    {/* END CATEGORY-MENU-LIST */}
                </div>
                <div className="col-lg-9">
                    <div className="ltn__slide-active-2 slick-slide-arrow-1 slick-slide-dots-1 slick-initialized slick-slider slick-dotted" role="toolbar">
                    {/* ltn__slide-item */}
                    <div aria-live="polite" className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: '1740px'}} role="listbox"><div className="ltn__slide-item ltn__slide-item-10 section-bg-1 bg-image slick-slide slick-current slick-active" data-bs-bg="img/slider/61.jpg" data-slick-index={0} style={{backgroundImage: 'url("img/slider/61.jpg")', width: '870px', position: 'relative', left: '0px', top: '0px', zIndex: 999, opacity: 1}} aria-hidden="false" tabIndex={-1} role="option" aria-describedby="slick-slide00">
                            <div className="ltn__slide-item-inner">
                            <div className="container">
                                <div className="row">
                                <div className="col-lg-7 col-md-7 col-sm-7 align-self-center">
                                    <div className="slide-item-info">
                                    <div className="slide-item-info-inner ltn__slide-animation">
                                        <h5 className="slide-sub-title ltn__secondary-color animated text-uppercase">Up To 50% Off Today Only!</h5>
                                        <h1 className="slide-title  animated">Gold Standard <br />Pre-Workout</h1>
                                        <h5 className="color-orange  animated">Starting at &amp;16.99</h5>
                                        <div className="slide-brief animated d-none">
                                        <p>Predictive analytics is drastically changing the real estate industry. In the past, providing data for quick</p>
                                        </div>
                                        <div className="btn-wrapper  animated">
                                        <a href="shop.html" className="theme-btn-1 btn btn-effect-1 text-uppercase" tabIndex={0}>Shop now</a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-5 align-self-center">
                                    <div className="slide-item-img">
                                    {/* <a href="shop.html"><img src="img/product/1.png" alt="Image"></a> */}
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div><div className="ltn__slide-item ltn__slide-item-10 section-bg-1 bg-image slick-slide" data-bs-bg="img/slider/62.jpg" data-slick-index={1} style={{backgroundImage: 'url("img/slider/62.jpg")', width: '870px', position: 'relative', left: '-870px', top: '0px', zIndex: 998, opacity: 0}} aria-hidden="true" tabIndex={-1} role="option" aria-describedby="slick-slide01">
                            <div className="ltn__slide-item-inner">
                            <div className="container">
                                <div className="row">
                                <div className="col-lg-7 col-md-7 col-sm-7 align-self-center">
                                    <div className="slide-item-info">
                                    <div className="slide-item-info-inner ltn__slide-animation">
                                        <h4 className="slide-sub-title ltn__secondary-color animated text-uppercase">Welcome to our shop</h4>
                                        <h1 className="slide-title  animated">Gold Standard <br />Pre-Workout</h1>
                                        <div className="slide-brief animated d-none">
                                        <p>Predictive analytics is drastically changing the real estate industry. In the past, providing data for quick</p>
                                        </div>
                                        <div className="btn-wrapper  animated">
                                        <a href="shop.html" className="theme-btn-1 btn btn-effect-1 text-uppercase" tabIndex={-1}>Shop now</a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-5 align-self-center">
                                    <div className="slide-item-img">
                                    {/* <a href="shop.html"><img src="img/slider/62.jpg" alt="Image"></a> */}
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div></div></div>
                    {/* ltn__slide-item */}
                    <ul className="slick-dots" style={{}} role="tablist"><li className="slick-active" aria-hidden="false" role="presentation" aria-selected="true" aria-controls="navigation00" id="slick-slide00"><button type="button" data-role="none" role="button" tabIndex={0}>1</button></li><li aria-hidden="true" role="presentation" aria-selected="false" aria-controls="navigation01" id="slick-slide01"><button type="button" data-role="none" role="button" tabIndex={0}>2</button></li></ul></div>
                </div>
                </div>
            </div>
            </div>

        </>
    );
}

export default HomePage;