import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';

export const register = createAsyncThunk('users/register', async (payload) => {
  const data = await userApi.register(payload);
  localStorage.setItem('access_token', JSON.stringify(data.tokens.access.token));
  localStorage.setItem('user', JSON.stringify(data.user));
  //return user data
  return data.user;
});
export const login = createAsyncThunk('users/login', async (payload) => {
  const data = await userApi.login(payload);
  localStorage.setItem('access_token', JSON.stringify(data.tokens.access.token));
  localStorage.setItem('user', JSON.stringify(data.user));
  //return user data
  return data.user;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem('user')) ||{},
    setting: {},
  },
  reducers: {},
  extraReducers: {
    // 'user/register/fullfilled'
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer } = userSlice;
export default reducer;
