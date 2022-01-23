import React, { useState } from 'react';
import './style.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
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
  const { enqueueSnackbar } = useSnackbar();
  const [errorMessage,setErrorMessage] = useState(false);
  // const [status, setStatus] = useState(false);
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
    setErrorMessage(false);
    (async () => {
      try {
        await userApi.resetPass(values, params.token);
        enqueueSnackbar(`Reset Password Successfully`, {
          variant: 'success',
        });
        setTimeout(() => {
          history.push("/");
        }, 1500);
        
      } catch (error) {
        console.log('lỗi rồi nè');
        setErrorMessage(true);
      }
    })();
    // setStatus(true);
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
              <div>
                  {errorMessage ? (
                    <div className="_7Ao-BQ umTGIP">
                      <div className="o5DLud">
                        <svg
                          viewBox="0 0 16 16"
                          role="img"
                          className="stardust-icon stardust-icon-cross-with-circle _2-4Lck"
                        >
                          <path
                            fill="none"
                            stroke="#FF424F"
                            d="M8 15A7 7 0 108 1a7 7 0 000 14z"
                            clipRule="evenodd"
                          />
                          <rect
                            stroke="none"
                            width={7}
                            height="1.5"
                            x="6.061"
                            y={5}
                            fill="#FF424F"
                            rx=".75"
                            transform="rotate(45 6.06 5)"
                          />
                          <rect
                            stroke="none"
                            width={7}
                            height="1.5"
                            fill="#FF424F"
                            rx=".75"
                            transform="scale(-1 1) rotate(45 -11.01 -9.51)"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="_3mi2mp">something is wrong, please check your mail</div>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              <div className="_3e4zDA _2kpMlA">
                <div />
                <div className="h4yPIu">
                  <div className="_3mizNj">
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
