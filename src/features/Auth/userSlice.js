import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';
export const register = createAsyncThunk('users/register', async (payload) => {
  const data = await userApi.register(payload);
  localStorage.setItem('access_token', JSON.stringify(data.tokens.access.token));
  localStorage.setItem('countCarts', JSON.stringify(data.countCarts));
  localStorage.setItem('user', JSON.stringify(data.user));
  //return user data
  return data.user;
});
export const login = createAsyncThunk('users/login', async (payload) => {
  const data = await userApi.login(payload);
  localStorage.setItem('access_token', JSON.stringify(data.tokens.access.token));
  localStorage.setItem('countCarts', JSON.stringify(data.countCarts));
  localStorage.setItem('user', JSON.stringify(data.user));
  window.location.reload();
  return data.user;
});
export const test = createAsyncThunk('users/test', async () => {
  const data = await userApi.info();
  localStorage.setItem('userInfo', JSON.stringify(data));
  return data;
});



const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem('user')) ||{},
    setting: JSON.parse(localStorage.getItem('userInfo')) || {},
    countCarts : JSON.parse(localStorage.getItem('countCarts')) || 0,
  },
  reducers: {
    logout(state){
      window.location.replace("http://localhost:3006/")
      localStorage.clear();
      state.current = {};
      state.countCarts = 0;
    },
    incre(state,action){
      state.countCarts+=action.payload;
      localStorage.setItem('countCarts', JSON.stringify(state.countCarts));
      
    },
    dlt(state,action){
      state.countCarts--;
      localStorage.setItem('countCarts', JSON.stringify(state.countCarts));
    },
    setCoutCarts(state,action){
      state.countCarts = 0;
      localStorage.setItem('countCarts', JSON.stringify(state.countCarts));
    },
    changename(state,action){
      state.current.name = action.payload;
    }
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
      state.countCarts = JSON.parse(localStorage.getItem('countCarts')) ;
    },
    [test.fulfilled]: (state, action) => {
      state.setting = action.payload;
    },
  },
});

const { actions , reducer } = userSlice;
export const {logout,incre,dlt,changename,setCoutCarts} = actions;
export default reducer;
