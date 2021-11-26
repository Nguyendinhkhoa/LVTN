import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-control/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Avatar,
  Typography,
  Button,
  LinearProgress,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import PasswordField from '../../../../components/form-control/PasswordField';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    textAlign: 'center',
    margin: theme.spacing(2, 0, 3, 0),
  },
  submit: {
    margin: theme.spacing(3, 0, 2, 0),
  },
  process: {
    paddingTop: theme.spacing(1),
  },
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyles();
  const schema = yup.object().shape({
    name: yup
      .string()
      .required('Please enter your full name')
      .test('should has at least two words', 'please enter ay least two words', (value) => {
        return value.split(' ').length >= 2;
      }),
    email: yup
      .string()
      .required('Please enter your email')
      .email('Please enter a valid email address '),
    password: yup
      .string()
      .required('Please enter your password')
      .min(6, 'Please enter at least 6 character')
      .test('passwordRequirements', 'Password must include letters and numbers', (value) =>
        [/[a-z]/, /[0-9]/,].every((pattern) => pattern.test(value))
      ),
    retypePassword: yup
      .string()
      .required('Please retype your password')
      .oneOf([yup.ref('password')], 'Password does not match'),
  });

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };
  const { isSubmitting } = form.formState;
  return (
    <div>
      {isSubmitting && <LinearProgress className={classes.process} />}
      <div className="container">
        <div className="row">
          <div className=" mx-auto ">
            <div className={classes.root}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h3" variant="h5" className={classes.title}>
                Create An Account
              </Typography>
              <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="name" label="Full Name" form={form} />
                <InputField name="email" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />
                <PasswordField name="retypePassword" label="Confirm Password" form={form} />
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  className={classes.submit}
                >
                  Create An Account
                </Button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
