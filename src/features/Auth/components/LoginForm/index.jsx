import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-control/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Avatar,
  Typography,
  TextField,
  Button,
  LinearProgress,
  Box,
  Grid,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { makeStyles } from '@material-ui/core/styles';
import { auto } from '@popperjs/core';
import PasswordField from '../../../../components/form-control/PasswordField';
import { Link } from 'react-router-dom';
import { Copyright } from '@material-ui/icons';

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

Loginform.propTypes = {
  onSubmit: PropTypes.func,
};

function Loginform(props) {
  const classes = useStyles();
  const schema = yup.object().shape({

    email: yup
      .string()
      .required('Please enter your email')
      .email('Please enter a valid email address '),
    password: yup
      .string()
      .required('Please enter your password'),
  });

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
    // form.reset();
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
                Sign In
              </Typography>
              <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="email" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  className={classes.submit}
                >
                  Sign In
                </Button>
              </form>
              <Grid container justifyContent="flex-end">
                <Grid item margin="normal">
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginform;
