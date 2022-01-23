import React, { useState, useEffect } from 'react';
import './account.css';
import SlideInProduct from '../Product/components/Slide';
import AccountForm from './components/AccountForm';
import userApi from '../../api/userApi';
import Loading from '../Loading';
import { useSnackbar } from 'notistack';
import PasswordForm from './components/PasswordForm';
import orderApi from '../../api/orderApi';
import { Link, Redirect } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
const useStyles = makeStyles((theme) => ({
  pagination: {
    display: 'flex',
    flexFlow: 'row nowap',
    justifyContent: 'center',
  },
}));
Account.propTypes = {};
function Account(props) {
  const classes = useStyles();
  const [user, setUser] = useState({});
  const [listOrder, setListOrder] = useState([]);
  const [reload, setReload] = useState(true);
  const [loading, setLoading] = useState(1);
  const login = JSON.parse(localStorage.getItem('user'));
  // const [flag, setFlag] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  const [params,setParams] = useState({
    page : 1,
  })
  const [pagination, setPagination] = useState({
    totalPage: 1,
    page: 1,
  }); 

  useEffect(() => {
    (async () => {
      try {
        setLoading(1);
        const fetchUser = await userApi.info();
        setUser(fetchUser);
      } catch (error) {
        console.log('fetch error', error);
      }
      setLoading(0);
    })();
  }, [reload]);
  useEffect(() => {

    (async () => {
      setLoading(1);
      try {
        const fetchOrder = await orderApi.getOrder(params);
        console.log('order ne', fetchOrder.results);
        setListOrder(fetchOrder.results);
        setPagination({
          ...pagination,
          totalPage: fetchOrder.totalPages,
          page: fetchOrder.page,
        });

        console.log(pagination);
      } catch (error) {
        console.log('fetch error', error);
      }
      setLoading(0);
    })();
  }, [params,pagination]);

  // const handleSubmitInfo = async (values) => {
  //   delete values['email'];
  //   values.avatar = '';
  //   console.log(values);
  //   try {
  //     (async () => {
  //       try {
  //         setReload(!reload);
  //         const updateUser = await userApi.update(values);
  //         setUser(updateUser);
  //         const localUser = JSON.parse(localStorage.getItem('user'));
  //         localUser.name = values['name'];
  //         localStorage.setItem(
  //           'user',
  //           JSON.stringify({
  //             ...localUser,
  //             name: values.name,
  //             phone: values.phone,
  //             address: values.address,              
  //           })
  //         );
  //         dispatch(changename(values.name));
  //         enqueueSnackbar('Change infomation successful', { variant: 'success' });
  //       } catch (error) {
  //         console.log('fetch error', error);
  //       }
  //     })();
  //   } catch (error) {
  //     console.log('fail', error.message);
  //   }
  // };
  const handleSubmitPassword = async (values) => {
    delete values['confirmPassword'];
    try {
      (async () => {
        try {
          setReload(!reload);
          await userApi.updatePassword(values);
          enqueueSnackbar('Change Password successfully', { variant: 'success' });
        } catch (error) {
          console.log('fetch error', error);
          enqueueSnackbar(error.message, { variant: 'error' });
        }
      })();
      setLoading(0);
    } catch (error) {
      console.log('fail', error.message);
    }
  };
  const hanldeInfoChange = (values) => {
    setUser({
      email: values.email,
      name: values.name,
      phone: values.phone,
      address: values.address,
      avatar : '',
    });
  };
  const handlePageChange = (e, page) => {
    setParams((prevFilters) => ({
      ...prevFilters,
      page: page,
    }));
  }
  return login ? (
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
                          <a data-bs-toggle="tab" href="#liton_tab_1_3">
                            Change Information <i className="fas fa-file-alt" />
                          </a>
                          <a data-bs-toggle="tab" href="#liton_tab_1_4">
                            Change Password <i className="fas fa-map-marker-alt" />
                          </a>
                          {/* <a >
                            Logout <i className="fas fa-sign-out-alt" />
                          </a> */}
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
                              {loading === 1 ? (
                                <Loading />
                              ) : (
                                <>
                                  <div className="row account-details">
                                    <div className="col-md-4">
                                      <img
                                        src="https://source.unsplash.com/random/200x200?sig=1"
                                        alt=""
                                      />
                                    </div>
                                    <div className="col-md-7 info-user">
                                      <p>
                                        <span>Email : </span> {user.email}
                                      </p>
                                      <p>
                                        <span>fullName : </span>
                                        {user.name}
                                      </p>
                                      <p>
                                        <span>Phone : </span>
                                        {user.phone ? user.phone : 'Not be up-to-date.'}
                                      </p>
                                      <p>
                                        <span>Adreess : </span>
                                        {user.address ? user.address : 'Not be up-to-date.'}
                                      </p>
                                    </div>
                                  </div>
                                </>
                              )}
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
                                    <th>Create At</th>
                                    <th>shipping code</th>
                                    <th>Status</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {listOrder.map((item, ind) => {
                                    return (
                                      <tr key={item.id}>
                                        <td>{ind + 1}</td>
                                        <td>
                                          {item.updatedAt ? item.updatedAt : 'Not Found'}
                                        </td>
                                        <td>
                                          {item.shippingCode ? item.shippingCode : 'Not Found'}
                                        </td>
                                        <td>{item.orderStatus}</td>
                                        <td>
                                          {item.totalAmount
                                            .toString()
                                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                          ₫
                                        </td>
                                        <td>
                                          <Link to={`/account/view-order/${item.id}`}>View</Link>
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                            <div className="row pagination-order">
                              <Box className={classes.pagination}>
                                {listOrder.length > 0 && (
                                  <Pagination
                                    count={pagination.totalPage}
                                    page={pagination.page}
                                    onChange={handlePageChange}
                                    color="secondary"
                                  />
                                )}
                              </Box>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="liton_tab_1_3">
                          <div className="ltn__myaccount-tab-content-inner">
                            {loading === 1 ? (
                              <Loading />
                            ) : (
                              <AccountForm
                                // onsubmit={handleSubmitInfo}
                                user={user}
                                InfoChange={hanldeInfoChange}
                              />
                            )}
                          </div>
                        </div>
                        <div className="tab-pane fade" id="liton_tab_1_4">
                          <div className="ltn__myaccount-tab-content-inner">
                            {loading === 1 ? (
                              <Loading />
                            ) : (
                              <PasswordForm onsubmit={handleSubmitPassword} />
                            )}
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
  ) : (
    <Redirect to="/" />
  );
}

export default Account;
