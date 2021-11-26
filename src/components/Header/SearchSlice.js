import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productApi from '../../api/productApi';

export const searchProduct = createAsyncThunk(
    'Search/searchProduct', 
    async (payload) => {
    const data = await productApi.search(payload);
    console.log(data);
    return data.results;
  });
const SearchSlice = createSlice({
    name: 'Search',
    initialState:{
        results : [],
    },
    reducers: {
      
    },
    extraReducers: {
      [searchProduct.fulfilled]: (state, action) => {
        console.log(action.payload);
        state.results = action.payload;
      },
    },
  });
  
const { reducer } = SearchSlice;
export default reducer;