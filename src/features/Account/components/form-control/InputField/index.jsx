import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';


InputField.propTypes = {
    form : PropTypes.object.isRequired,
    name : PropTypes.string.isRequired,
    disabled : PropTypes.bool,
    label : PropTypes.string,
};

function InputField(props) {
    const{form,name,disabled}= props;
    const {errors } = form;
    const  hasError =  errors[name];
    return (
        <Controller 
        name={name}
        control={form.control}
        as={TextField}  
        margin="normal"
        fullWidth
        disabled={disabled}
        error ={!!hasError}
        helperText={errors[name]?.message }
        variant="outlined"
        size="small"
        />
    );
}

export default InputField;