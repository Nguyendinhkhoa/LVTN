import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-control/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Avatar, Typography, TextField, Button } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { makeStyles } from '@material-ui/core/styles' ;
import { auto } from '@popperjs/core';
import PasswordField from '../../../../components/form-control/PasswordField';


const useStyles = makeStyles((theme)=>({
    root : {paddingTop : theme.spacing(15)},
    avatar : {
        margin : '0 auto',
        backgroundColor : theme.palette.secondary.main,
    },
    title :{
        textAlign : 'center',
        margin : theme.spacing(2,0,3,0)
    },
    submit : {
        margin : theme.spacing(3,0,2,0)
    }
}));

RegisterForm.propTypes = {
    onSubmit : PropTypes.func,
};

function RegisterForm(props) {
    const classes = useStyles();
    // const schema = yup.object().shape({
    //     title: yup.string().required('Please enter title').min(5,"Title too short")
    //   }).required();

    const form = useForm({
        defaultValues : {
            fullName : '',
            email : '',
            password : '',
            retypePassword : '',

        },
        // resolver : yupResolver(schema),
    });

    const handleSubmit = (values) =>{
        const {onSubmit} = props;
        if(onSubmit){
            onSubmit(values);
        }
        form.reset();
    }
    return (
        <div className={classes.root}>
        <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
        </Avatar>
        <Typography component="h3" variant="h5" className={classes.title}>Create An Account</Typography>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
           <InputField name="fullName" label="Full Name" form={form}/>
           <InputField name="email" label="Email" form={form}/>
           <PasswordField name="password" label="Password" form={form}/>
           <PasswordField name="retypePassword" label="Confirm Password" form={form}/>
           <Button type="submit"  variant="contained" color="primary" fullWidth className={classes.submit}>Create An Account</Button>
        </form>
        </div>
    );
}

export default RegisterForm;