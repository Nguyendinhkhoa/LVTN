import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import cartApi from '../../api/cartApi';

export const addtocart = createAsyncThunk('addtocart', async (payload) => {
  const data = await cartApi.addtocart(payload);
  localStorage.setItem('user', JSON.stringify(data));
  //return user data
  return data;
});


const cartSlice = createSlice({
  name: 'Cart',
  initialState: {
      cartItem :JSON.parse(localStorage.getItem('cart')) ||{},
  },
  reducers: {
    
  },
  extraReducers: {
    // 'user/register/fullfilled'
    [addtocart.fulfilled]: (state, action) => {
      state.cartItem = action.payload;
    },
  },
});

const { reducer } = cartSlice;
export default reducer;
