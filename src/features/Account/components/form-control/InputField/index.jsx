import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';


InputField.propTypes = {
    form : PropTypes.object.isRequired,
    name : PropTypes.string.isRequired,
    label : PropTypes.string,
    disabled : PropTypes.bool,
    defaultValues : PropTypes.string,
};

function InputField(props) {
    const{form,name,disabled,defaultValues}= props;
    const {errors } = form;
    const  hasError =  errors[name];
    return (
        <Controller 
        name={name}
        control={form.control}
        as={TextField}
        margin="normal"
        fullWidth
        defaultValues={defaultValues}
        disabled={disabled}
        error ={!!hasError}
        helperText={errors[name]?.message }
        id="outlined-helperText"
        variant="outlined"
        size="small"
        />
    );
}

export default InputField;