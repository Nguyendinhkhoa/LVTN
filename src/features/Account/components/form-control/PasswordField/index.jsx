import React ,{useState} from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { OutlinedInput} from '@material-ui/core';
PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

function PasswordField(props) {
  const { form, name, disabled } = props;
  const { errors } = form;
  const hasError = !!errors[name];

  const [showPassword, SetShowPassword] = useState(false);

  const toggleShowPassword = () => {
    SetShowPassword((x) => !x);
  };

  return (
    <>
      <FormControl margin="normal" fullWidth>
        <Controller
          name={name}
          control={form.control}
          as={OutlinedInput}
          id={name}
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={toggleShowPassword}>
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
