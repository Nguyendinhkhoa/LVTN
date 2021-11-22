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
  initialState: [
  ],
  reducers: {
    
  },
  extraReducers: {
    [addtocart.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
  },
});

const { reducer } = cartSlice;
export default reducer;
