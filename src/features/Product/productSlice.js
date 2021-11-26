import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import cartApi from '../../api/cartApi';
export const addtocart = createAsyncThunk(
  'Cart/addtocart', 
  async (payload) => {
  const data = await cartApi.addtocart(payload);
  return data;
});


const cartSlice = createSlice({
  name: 'Cart',
  initialState: {
    cartItem : [],

  }
  ,
  reducers: {
    addItem(state,action){
      state.cartItem = action.payload;
      return state;
    },
  },
  extraReducers: {
    // [addtocart.fulfilled]: (state, action) => {
    //   state.push(action.payload);
    // },
  },
});

const { actions ,reducer } = cartSlice;
export const {addItem} = actions;
export default reducer;
