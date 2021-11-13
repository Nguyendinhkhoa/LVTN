import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-control/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup
    .object()
    .shape({
      // title: yup.string().required('Please enter title').min(5,"Title too short")
      password: yup
        .string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
      confirmPassword: yup.string().required('Confirm Password is required'),
      //     .oneOf([yup.ref('password')], 'Passwords must match')
    })
    .required();

  const form = useForm({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="password" label="Todo" form={form} />
      <InputField name="confirmPassword" label="confirmpassword" form={form} />
    </form>
  );
}

export default TodoForm;
