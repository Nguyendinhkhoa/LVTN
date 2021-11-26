import counterReducer from '../features/Counter/counterSlice';
import useReducer from '../features/Auth/userSlice';
import cartReducer from '../features/Product/productSlice';
import searchReducer from '../components/Header/SearchSlice';
import { configureStore } from "@reduxjs/toolkit";

const rootReducer ={
    counter : counterReducer,
    user : useReducer,
    cart : cartReducer,
    Search : searchReducer,
};

const store = configureStore({
    reducer : rootReducer,
});
export default store;