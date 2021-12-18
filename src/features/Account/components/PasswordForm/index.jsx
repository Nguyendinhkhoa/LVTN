import React from 'react';
import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '@material-ui/core';
import PasswordField from '../form-control/PasswordField';

PasswordForm.propTypes = {
    onsubmit : PropTypes.func,
};


function PasswordForm(props) {

  const schema = yup.object().shape({
    oldPassword: yup
    .string()
    .required('Please enter your old password')
    .min(6, 'Please enter at least 6 character')
    .test('passwordRequirements', 'Password must include letters and numbers', (value) =>
      [/[a-z]/, /[0-9]/].every((pattern) => pattern.test(value))
    ),
    password: yup
    .string()
    .required('Please enter your new password')
    .min(6, 'Please enter at least 6 character')
    .test('passwordRequirements', 'Password must include letters and numbers', (value) =>
      [/[a-z]/, /[0-9]/,].every((pattern) => pattern.test(value))
    ),
    confirmPassword: yup
    .string()
    .required('Please retype your password')
    .oneOf([yup.ref('password')], 'Password does not match'),
  });
  const form= useForm({
    defaultValues: {
      oldPassword: "" ,
      password:"",
      confirmPassword:"",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values)=>{
    const { onsubmit } = props;
    if (onsubmit) {
      await onsubmit(values);
    }
  }
    return(
      <>
      <div className="account-info">
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className=" row">
            <span className="input-label col-md-4">Old Password :</span>
            <div className="name-info col-md-6">
              <PasswordField name="oldPassword" form={form}  />
            </div>
          </div>
          <div className=" row">
            <span className="input-label col-md-4">New Password :</span>
            <div className="name-info col-md-6">
              <PasswordField name="password" form={form} defaultValues="" />
            </div>
          </div>
          <div className=" row">
            <span className="input-label col-md-4">Retype New Password :</span>
            <div className="name-info col-md-6">
              <PasswordField name="confirmPassword" form={form} defaultValues=""/>
            </div>
          </div>
          <div className="row">
            <div className="submitButton col-md-5">
              <Button
                // disabled={isSubmitting}
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Save Change
              </Button>
            </div>
          </div>
        </form>
      </div>
      </>
    )
}

export default PasswordForm;