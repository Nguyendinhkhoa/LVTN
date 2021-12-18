import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../LoginForm';
import {useDispatch} from 'react-redux';
import { login} from '../../userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';


Login.propTypes = {
    closeDialog :PropTypes.func,
};


function Login(props) {
    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar()
    const handleSubmit = async (values)=>{
        try{
            const action = login(values)
            const resuftAction = await dispatch(action);
            unwrapResult(resuftAction);
            const{closeDialog} = props ;
            if(closeDialog){
                closeDialog();
            }
        }
        catch(error){
            console.log("fail" ,error.message);
            enqueueSnackbar(error.message,{variant: 'error'});  
        }
    }
    return (
        <div>
            <LoginForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default Login;