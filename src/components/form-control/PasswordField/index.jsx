import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { Controller } from 'react-hook-form';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
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
    const {errors , formState} = form;
    const  hasError = formState.touched[name] && errors[name];

    const [showPassword,SetShowPassword] = useState(false);

    const toggleShowPassword = ()=>{
        SetShowPassword(x =>!x);
    }

    return (
        <FormControl margin="normal" fullWidth  variant="outlined">
          <InputLabel htmlFor={name}>{label}</InputLabel>
          <Controller
          name={name}
          control={form.control}
          as={OutlinedInput}
            id={name}
            type={showPassword ? 'text' : 'password'}
            label={label}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            disabled={disabled}
            error ={!!hasError}
            helpertext={errors[name]?.message }
          />
        </FormControl>


    );
}

export default PasswordField;