import axios from 'axios';
const axiosClient = axios.create({
    baseURL: 'http://teamedicine.tk:3000/',
    headers: {
        'Content-type': 'application/json',
        'Authorization' :'Bearer ' + JSON.parse(localStorage.getItem('access_token')),
    },

});
// Add a request interceptor
axiosClient.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const {config,status,data} = error.response;
    
    if(config.url === 'api/v1/auth/register' && status===400){
      throw new  Error(data.message);
    }
    if(config.url === 'api/v1/auth/login' && status===401){
      throw new  Error(data.message);
    }
    return Promise.reject(error);
  });
export default axiosClient;