import React, {useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import categoryApi from '../../../../api/categoryApi';
import { Link } from 'react-router-dom';

FilterByCategory.propTypes = {
    onChange : PropTypes.func,
};

function FilterByCategory({onChange}) {
    const [categoryList,setCategoryList] = useState([]);
    useEffect(()=>{
        const fecthCategory = async () =>{
            const cateList = await categoryApi.getAll();
            const arrCate = cateList.results ;
            setCategoryList(arrCate);
          }
      
          fecthCategory();
    },[]);
    const handleCategoryClick = (category) =>{
        if (onChange) {
            onChange(category);
        }
    }
    return (
        <>
            <ul>
            { categoryList && categoryList.length >0 && categoryList.map((cate,ind)=>{
                return(
              <li onClick={()=>handleCategoryClick(cate.slug)} key={cate.id}><Link to={cate.slug}>{cate.name}<span><i className="fas fa-long-arrow-alt-right" /></span></Link></li>
              )
            }) }
              </ul>
        </>
    );
}

export default FilterByCategory;