import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';

import Product from './Product';

ProductList.propTypes = {
    data : PropTypes.array,
};
ProductList.defaultProps = {
    data : [] ,
}
function ProductList({data}) {
    return (

        <>
                {data.map((product,index)=>(
                        <Product key={product.id} product={product}/>
                ))}

        </>
    );
}

export default ProductList;