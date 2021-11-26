import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './account.css';
import SlideInProduct from '../Product/components/Slide';
import AccountForm from './components/AccountForm';
import userApi from '../../api/userApi';
import Loading from '../Loading';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { changename, test } from '../Auth/userSlice';
import { useSnackbar } from 'notistack'

Account.propTypes = {};
function Account(props) {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const [reload, setReload] = useState(true);
  const [loading, setLoading] = useState(1);
  const [flag,setFlag] =useState(true);
  const {enqueueSnackbar} = useSnackbar()

  useEffect(() => {
    (async () => {
      try {
        setLoading(1);
        const fetchUser = await userApi.info();
        console.log('user account', fetchUser);
        setUser(fetchUser);

      } catch (error) {
        console.log('fetch error', error);
      }
      setLoading(0);
    })();
  }, [reload]);

  const handleSubmitInfo = async (values) => {
    delete values['email'];
    try {
      (async () => {
        try {
          const updateUser = await userApi.update(values);
          setUser(updateUser);
          const localUser =  JSON.parse(localStorage.getItem('user'));
          localUser.name = values['name'];
          localStorage.setItem('user', JSON.stringify({...localUser, name: values.name , phone : values.phone , address : values.address}));
        } catch (error) {
          console.log('fetch error', error);
        }
      })();
      dispatch(changename(values.name));
      enqueueSnackbar('Change infomation successful',{variant: 'success'});
    } 
    catch (error) {
      console.log('fail', error.message);
      // enqueueSnackbar(error.message,{variant: 'error'});
    }
  };
  // if (loading === 1) return <Loading />;

  return (
    <>
      <SlideInProduct page="Account" />
      <div className="liton__wishlist-area pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__product-tab-area">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="ltn__tab-menu-list mb-50">
                        <div className="nav nav1">
                          <a className="active show" data-bs-toggle="tab" href="#liton_tab_1_1">
                            Account Details <i className="fas fa-home" />
                          </a>
                          <a data-bs-toggle="tab" href="#liton_tab_1_2">
                            Orders <i className="fas fa-file-alt" />
                          </a>
                          <a data-bs-toggle="tab" href="#liton_tab_1_4">
                            Change password <i className="fas fa-map-marker-alt" />
                          </a>
                          <a href="login.html">
                            Logout <i className="fas fa-sign-out-alt" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="tab-content">
                        <div className="tab-pane fade active show" id="liton_tab_1_1">
                          <div className="ltn__myaccount-tab-content-inner">
                            <p>
                              The following addresses will be used on the checkout page by default.
                            </p>
                            <div className="ltn__form-box">
                              <AccountForm onsubmit={handleSubmitInfo} user={user} />
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="liton_tab_1_2">
                          <div className="ltn__myaccount-tab-content-inner">
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Order</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>Jun 22, 2019</td>
                                    <td>Pending</td>
                                    <td>$3000</td>
                                    <td>
                                      <a href="cart.html">View</a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td>Nov 22, 2019</td>
                                    <td>Approved</td>
                                    <td>$200</td>
                                    <td>
                                      <a href="cart.html">View</a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>Jan 12, 2020</td>
                                    <td>On Hold</td>
                                    <td>$990</td>
                                    <td>
                                      <a href="cart.html">View</a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="liton_tab_1_4">
                          <div className="ltn__myaccount-tab-content-inner">
                            <p>
                              The following addresses will be used on the checkout page by default.
                            </p>
                            <div className="row">
                              <div className="col-md-6 col-12 learts-mb-30">
                                <h4>
                                  Billing Address{' '}
                                  <small>
                                    <a href="#">edit</a>
                                  </small>
                                </h4>
                                <address>
                                  <p>
                                    <strong>Alex Tuntuni</strong>
                                  </p>
                                  <p>
                                    1355 Market St, Suite 900 <br />
                                    San Francisco, CA 94103
                                  </p>
                                  <p>Mobile: (123) 456-7890</p>
                                </address>
                              </div>
                              <div className="col-md-6 col-12 learts-mb-30">
                                <h4>
                                  Shipping Address{' '}
                                  <small>
                                    <a href="#">edit</a>
                                  </small>
                                </h4>
                                <address>
                                  <p>
                                    <strong>Alex Tuntuni</strong>
                                  </p>
                                  <p>
                                    1355 Market St, Suite 900 <br />
                                    San Francisco, CA 94103
                                  </p>
                                  <p>Mobile: (123) 456-7890</p>
                                </address>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* PRODUCT TAB AREA END */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
