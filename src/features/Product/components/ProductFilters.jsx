import React from 'react';
import PropTypes from 'prop-types';
import FilterByCategory from './Filters/FilterByCategory';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import queryString from 'query-string';
ProductFilter.propTypes = {
    filters : PropTypes.object.isRequired,
    onChange : PropTypes.func,
};

function ProductFilter({filters,onChange}) {
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
     const HandleCategoryChange = (newCategorySlug) => {
        if(!onChange) return ;
        const queryParams = {category : newCategorySlug};
        history.push({
            pathname : match.path,
            search : queryString.stringify(queryParams)
        });
        const newFilters = {
            ...filters,
            category : newCategorySlug,
            page : 1,
        };
        onChange(newFilters);
    }   
    return (
        <div>
            <FilterByCategory onChange={HandleCategoryChange}/>
        </div>
    );
}

export default ProductFilter;