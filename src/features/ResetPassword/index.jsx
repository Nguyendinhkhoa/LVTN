import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useHistory, useLocation } from 'react-router';
import userApi from '../../api/userApi';
import PasswordReset from './components/PasswordReset';
import queryString from 'query-string';
ResetPassword.propTypes = {};

function ResetPassword(props) {
  const history = useHistory();
  const location = useLocation();
  const params = queryString.parse(location.search);
  console.log(params);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(false);
  const schema = yup.object().shape({
    password: yup
      .string()
      .required('Please enter your new password')
      .min(6, 'Please enter at least 6 character')
      .test('passwordRequirements', 'Password must include letters and numbers', (value) =>
        [/[a-z]/, /[0-9]/].every((pattern) => pattern.test(value))
      ),
  });
  const form = useForm({
    defaultValues: {
      password: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit1 = async (values) => {
    console.log(values);
    (async () => {
      try {
        const fecth = await userApi.resetPass(values, params.token);
        console.log(fecth);
      } catch (error) {
        console.log(error);
      }
    })();

    setEmail(values.email);
    setStatus(true);
  };
  return (
    <>
      <div className="container">
        <div className="forgotpass">
          <form onSubmit={form.handleSubmit(handleSubmit1)}>
            <div className="fogot-content">
              <div className="Xqnqjs">
                <div className="_3qVJYR">
                  <div className="setpass _36wKwh">
                    <div>Set Your Password</div>
                  </div>
                </div>
              </div>
              <div className="_3e4zDA _2kpMlA">
                <div />
                <div className="h4yPIu">
                  <div className="_3mizNj">
                    {/* <EmailField name="email" form={form} /> */}
                    <PasswordReset name="password" form={form} />
                  </div>
                </div>
                <button type="submit" className="_1ruZ5a _3Nrkgj _3kANJY _1IRuK_ hh2rFL _3_offS">
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
