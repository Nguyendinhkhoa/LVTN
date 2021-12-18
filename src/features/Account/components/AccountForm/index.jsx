import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputField from '../form-control/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '@material-ui/core';
import userApi from '../../../../api/userApi';
import Loading from '../../../Loading';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { changename } from '../../../Auth/userSlice';
AccountForm.propTypes = {
  // onsubmit: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  InfoChange : PropTypes.func,
};

function AccountForm(props) {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(0);
  const [reload, setReload] = useState(false);
  const dispatch = useDispatch();
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/ ;

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
      .matches(phoneRegExp, 'Must be only number')
      .min(10, 'Please enter phone have 10 number')
      .max(10, 'Please enter phone have 10 number'),
    address: yup.string(),
  });

  const form = useForm({
    defaultValues: {
      email: props.user.email,
      name: props.user.name,
      phone: props.user.phone,
      address: props.user.address,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    props.InfoChange(values);
    delete values['email'];
    values.avatar = "";
    try {
      (async () => {
        try {
          setLoading(1);
          setReload(!reload);
          const updateUser = await userApi.update(values);
          console.log('aloo ', updateUser);

          //NOTE:
          setTimeout(() => {
            form.setValue('email', updateUser.email);
            form.setValue('name', updateUser.name);
            form.setValue('phone', updateUser.phone);
            form.setValue('address', updateUser.address);
          }, 1)
          

          const localUser = JSON.parse(localStorage.getItem('user'));
          localUser.name = values['name'];
          localStorage.setItem(
            'user',
            JSON.stringify({
              ...localUser,
              name: values.name,
              phone: values.phone,
              address: values.address,
            })
          );
          dispatch(changename(values.name));
          enqueueSnackbar('Change infomation successful', { variant: 'success' });
          setLoading(0);
        } 
        catch (error) {
          console.log('fetch error', error);
        }
      })();
    } catch (error) {
      console.log('fail', error.message);
    }
  };

  return (
    <>
      <div className="account-info">
        {loading === 1 ? (
          <Loading />
        ) : (
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <div className=" row">
              <span className="input-label col-md-2">Email :</span>
              <div className="name-info col-md-6">
                <InputField disabled={true} name="email" lablel="Email" form={form} />
              </div>
            </div>
            <div className=" row">
              <span className="input-label col-md-2">Name :</span>
              <div className="name-info col-md-6">
                <InputField name="name" form={form} lablel="Name" />
              </div>
            </div>
            <div className=" row">
              <span className="input-label col-md-2">Phone :</span>
              <div className="name-info col-md-6">
                <InputField name="phone" form={form} lablel="Phone" />
              </div>
            </div>
            <div className=" row">
              <span className="input-label col-md-2">Address</span>
              <div className="name-info col-md-6">
                <InputField name="address" form={form} lablel="Address" />
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
        )}
      </div>
    </>
  );
}

export default AccountForm;
