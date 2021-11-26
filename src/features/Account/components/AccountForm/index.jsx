import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import InputField from '../form-control/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '@material-ui/core';
import userApi from '../../../../api/userApi';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Loading from '../../../Loading';
import test from '.././../../Auth/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
AccountForm.propTypes = {
  onsubmit: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

function AccountForm(props) {
  console.log('vcl', props.user);
   const [user, setUser] = useState({});
  const {setValue,reset} = useForm();
   const userRedux = useSelector((state) => state.user.setting);
   console.log('userReudxacc', userRedux);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(1);
  const [reload, setReload] = useState(false);



  useEffect(() => {
    if(props.user){

    }
  },[props.user])

  const schema = yup.object().shape({
    email: yup.string(),
    name: yup
      .string()
      .required('Please enter your full name')
      .test('should has at least two words', 'please enter at least two words', (value) => {
        return value.split(' ').length >= 2;
      }),
    phone: yup
      .string()
      .required('Please enter your phone')
      .matches(/[0-9]/, 'Must be only number')
      .min(10, 'Please enter phone have 10 number')
      .max(10, 'Please enter phone have 10 number'),
    address: yup.string(),
  });
console.log('test local',JSON.parse(localStorage.getItem('user')))
  const form = useForm({
    defaultValues: {
      email: JSON.parse(localStorage.getItem('user')).email ,
      name:  JSON.parse(localStorage.getItem('user')).name,
      phone: JSON.parse(localStorage.getItem('user')).phone,
      address:JSON.parse(localStorage.getItem('user')).address,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onsubmit } = props;
    if (onsubmit) {
      await onsubmit(values);
      setReload(!reload);
    }
  };

  const { isSubmitting } = form.formState;
  // if (loading === 1) return <Loading />;
  return (
    <>
      <div className="account-info">
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className=" row">
            <span className="input-label col-md-2">Email :</span>
            <div className="name-info col-md-6">
              <InputField disabled="true" name="email" form={form} />
            </div>
          </div>
          <div className=" row">
            <span className="input-label col-md-2">Name :</span>
            <div className="name-info col-md-6">
              <InputField name="name" form={form} />
            </div>
          </div>
          <div className=" row">
            <span className="input-label col-md-2">Phone :</span>
            <div className="name-info col-md-6">
              <InputField name="phone" form={form} />
            </div>
          </div>
          <div className=" row">
            <span className="input-label col-md-2">Address</span>
            <div className="name-info col-md-6">
              <InputField name="address" form={form} />
            </div>
          </div>
          <div className="row">
            <div className="submitButton col-md-5">
              <Button
                disabled={isSubmitting}
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
  );
}

export default AccountForm;
