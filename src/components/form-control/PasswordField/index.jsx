import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


PasswordField.propTypes = {
    form : PropTypes.object.isRequired,
    name : PropTypes.string.isRequired,

    label : PropTypes.string,
    disabled : PropTypes.bool,
};

function PasswordField(props) {
    const{form,name,label,disabled}= props;
    const {errors } = form;
    const  hasError =  !!errors[name];

    const [showPassword,SetShowPassword] = useState(false);

    const toggleShowPassword = ()=>{
        SetShowPassword(x =>!x);
    }

    return (
      <>
        <FormControl margin="normal" fullWidth >
        <InputLabel  htmlFor={name}>{label}</InputLabel>
        <Controller
          name={name}
          control={form.control}
          as={Input}
          id={name}
          type={showPassword ? 'text' : 'password'}
          label={label}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={toggleShowPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          disabled={disabled}
         
        />
        <FormHelperText error={!!hasError}>{errors[name]?.message}</FormHelperText>
      </FormControl>
      </>

    );
}

export default PasswordField;