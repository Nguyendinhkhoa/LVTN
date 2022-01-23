import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import './style.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import EmailField from './components/EmailField';
import { useHistory } from 'react-router';
import userApi from '../../api/userApi';
ForgotPassword.propTypes = {};

function ForgotPassword(props) {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(false);
  const [errorEmail,setErrorEmail] = useState(false);
  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Please enter your email')
      .email('Please enter a valid email address '),
  });
  const form = useForm({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit1 = async (values) => {
    console.log(values);

    (async () => {
      try {
        await userApi.forgotPass(values);
        setEmail(values.email);
        setStatus(true);
      } catch (error) {
        setErrorEmail(true);
      }
    })();
  };
  const okButton = () => {
    history.push('/');
  };
  return status ? (
    <>
      <div className="container">
        <div className="forgotpass">
          <div className="jWssEL _34gSQ-">
            <div className="Xqnqjs">
              <div className="_3qVJYR">
                <div className="_6naxFx">
                  <svg viewBox="0 0 22 17" className="yGpYhu">
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fillRule="evenodd"
                      transform="translate(-3, -6)"
                    >
                      <path d="M5.78416545,15.2727801 L12.9866648,21.7122915 C13.286114,22.0067577 13.286114,22.4841029 12.9866648,22.7785691 C12.6864297,23.0738103 12.200709,23.0738103 11.9004739,22.7785691 L3.29347136,15.0837018 C3.27067864,15.0651039 3.23845445,15.072853 3.21723364,15.0519304 C3.06240034,14.899273 2.99480814,14.7001208 3.00030983,14.5001937 C2.99480814,14.3002667 3.06240034,14.1003396 3.21723364,13.9476821 C3.23845445,13.9275344 3.2714646,13.9345086 3.29425732,13.9166857 L11.9004739,6.22026848 C12.200709,5.92657717 12.6864297,5.92657717 12.9866648,6.22026848 C13.286114,6.51628453 13.286114,6.99362977 12.9866648,7.288096 L5.78416545,13.7276073 L24.2140442,13.7276073 C24.6478918,13.7276073 25,14.0739926 25,14.5001937 C25,14.9263948 24.6478918,15.2727801 24.2140442,15.2727801 L5.78416545,15.2727801 Z" />
                    </g>
                  </svg>
                </div>
                <div className="_3p_roN _36wKwh">
                  <div className="ZWZ4ab">Reset Password</div>
                </div>
              </div>
            </div>
            <div className="_3e4zDA _2kpMlA">
              <div className="_3f_d49">
                <svg
                  viewBox="0 0 77 50"
                  role="img"
                  className="stardust-icon stardust-icon-email-with-lock _39cto-"
                >
                  <path
                    stroke="none"
                    d="M59.4 0H6.6C2.96 0 0 2.983 0 6.667v36.667C0 47.017 2.953 50 6.6 50h42.826c.7-.008 1.653-.354 1.653-1.497 0-1.156-.814-1.482-1.504-1.482h-.15v-.023H6.6c-1.823 0-3.568-1.822-3.568-3.664V6.667c0-1.842 1.745-3.623 3.568-3.623h52.8c1.824 0 3.6 1.78 3.6 3.623V18c0 .828.538 1.468 1.505 1.468S66 18.828 66 18v-.604-10.73C66 2.983 63.047 0 59.4 0zm-.64 5.76c.374.713.35 1.337-.324 1.733L33.84 21.53c-.423.248-1.575.923-3.124-.004L7.465 7.493c-.672-.396-.52-.896-.146-1.6s.753-1.094 1.426-.698L32.065 19.4 57.202 5.186c.672-.396 1.183-.14 1.556.574zm14.335 26.156l.277.078c.34.092.5.148.45.168 1.862.8 3.178 2.735 3.178 5v7.47c0 2.967-2.28 5.38-5.08 5.38H57.08c-2.8 0-5.08-2.413-5.08-5.38V37.15c0-2.538 1.67-4.665 3.905-5.23v-1.807C55.905 25.087 59.76 21 64.5 21c3.52 0 6.63 2.234 7.944 5.635l.02.05.006.016a9.55 9.55 0 0 1 .625 3.415v1.8zM70.48 28.17a1.28 1.28 0 0 1-.028-.081c-.83-2.754-3.223-4.604-5.954-4.604-3.447 0-6.25 2.974-6.25 6.63v1.655h12.505v-1.655c0-.677-.096-1.33-.275-1.946h.001zm4.18 16.45h-.002c0 1.596-1.227 2.892-2.737 2.892H57.08c-1.507 0-2.737-1.3-2.737-2.893v-7.47c0-1.597 1.227-2.893 2.738-2.893h14.84c1.508 0 2.737 1.3 2.737 2.893v7.47z"
                    fillOpacity=".87"
                    fillRule="evenodd"
                  />
                  <rect
                    stroke="none"
                    x={63}
                    y={38}
                    width={3}
                    height={6}
                    viewBox="0 0 3 6"
                    rx="1.5"
                    fillOpacity=".87"
                  />
                </svg>
              </div>
              <div className="_2rSmEY">
                <div>
                  A Verification email has been sent to this email address{' '}
                  <span className="_25142T">{email}</span>.
                </div>
                <div>Please verify it.</div>
              </div>
              <button
                onClick={okButton}
                className="_1ruZ5a _3Nrkgj _3kANJY _1IRuK_ _3ydwKz hh2rFL _3_offS"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="container">
        <div className="forgotpass">
          <form onSubmit={form.handleSubmit(handleSubmit1)}>
            <div className="fogot-content">
              <div className="Xqnqjs">
                <div className="_3qVJYR">
                  <div className="_6naxFx">
                    <svg viewBox="0 0 22 17" className="yGpYhu">
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fillRule="evenodd"
                        transform="translate(-3, -6)"
                      >
                        <path d="M5.78416545,15.2727801 L12.9866648,21.7122915 C13.286114,22.0067577 13.286114,22.4841029 12.9866648,22.7785691 C12.6864297,23.0738103 12.200709,23.0738103 11.9004739,22.7785691 L3.29347136,15.0837018 C3.27067864,15.0651039 3.23845445,15.072853 3.21723364,15.0519304 C3.06240034,14.899273 2.99480814,14.7001208 3.00030983,14.5001937 C2.99480814,14.3002667 3.06240034,14.1003396 3.21723364,13.9476821 C3.23845445,13.9275344 3.2714646,13.9345086 3.29425732,13.9166857 L11.9004739,6.22026848 C12.200709,5.92657717 12.6864297,5.92657717 12.9866648,6.22026848 C13.286114,6.51628453 13.286114,6.99362977 12.9866648,7.288096 L5.78416545,13.7276073 L24.2140442,13.7276073 C24.6478918,13.7276073 25,14.0739926 25,14.5001937 C25,14.9263948 24.6478918,15.2727801 24.2140442,15.2727801 L5.78416545,15.2727801 Z" />
                      </g>
                    </svg>
                  </div>
                  <div className="_3p_roN _36wKwh">
                    <div className="ZWZ4ab">Reset Password</div>
                  </div>
                </div>
              </div>
              <div className="_3e4zDA _2kpMlA">
                <div>
                  {errorEmail ? (
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
                        <div className="_3mi2mp">Account not found</div>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="h4yPIu">
                  <div className="_3mizNj">
                    <EmailField name="email" form={form} />
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

export default ForgotPassword;
