import counterReducer from '../features/Counter/counterSlice';
import useReducer from '../features/Auth/userSlice';
import { configureStore } from "@reduxjs/toolkit";

const rootReducer ={
    counter : counterReducer,
    user : useReducer,
};

const store = configureStore({
    reducer : rootReducer,
});
export default store;