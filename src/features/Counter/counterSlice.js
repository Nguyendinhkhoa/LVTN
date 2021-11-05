
const {createSlice} = require('@reduxjs/toolkit');

const counterSlice = createSlice({
    name : 'counter1',
    initialState : 0,
    reducers : {
        increase(state,action){
            
            return state+1+action.payload;
        },
        decrease(state){
            return state-1;
        },
    }
});

const {actions,reducer} = counterSlice ;
export const{increase,decrease} = actions;
export default reducer;