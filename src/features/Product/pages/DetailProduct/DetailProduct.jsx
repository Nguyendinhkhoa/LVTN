import React , {useEffect,useState} from 'react';
import PropTypes from 'prop-types';

import { withRouter } from "react-router";

import productApi from '../../../../api/productApi';
DetailProduct.propTypes = {
    
};

function DetailProduct(props) {

    const [slug,SetSlug] = useState(props.match.params.slug);
    const [product,SetProduct] = useState({})
    useEffect(()=>{
        try{
            const fecthProduct = async () =>{
                const params ={
                    slug
                }
              const product = await productApi.get(params);
            //   const Product = product.results ;
              console.log(product);
              SetProduct(product);
            }
            fecthProduct();
          }  
          catch(error){
            alert("FAILDED TO FETCH PRODUCT LIST",error);
          }
    },[])
   
    return (
        <div>
            {product.name}
        </div>
    );
}

export default withRouter(DetailProduct);