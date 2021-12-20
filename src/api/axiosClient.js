import axios from 'axios';
const axiosClient = axios.create({
    baseURL: 'http://teamedicine.tk:3000/',
    // baseURL: 'http://localhost:3000/',
    headers: {
        'Content-type': 'application/json',
    },

});
function getLocalAccessToken() {
  const accessToken = 'Bearer ' + JSON.parse(localStorage.getItem('access_token'));
  return accessToken;
}

  axiosClient.interceptors.request.use(
    (config) => {
      const token = getLocalAccessToken();
      if (token) {
        config.headers["Authorization"] = token ;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if(error.response){
      const {config,status,data} = error.response;
      if(config.url === 'api/v1/auth/register' && status===400){
        throw new  Error(data.message);
      }
      if(config.url === 'api/v1/auth/login' && status===401){
        throw new  Error(data.message);
      }
      if(config.url === "/api/v1/users/update-password" && status===401){
        throw new  Error(data.message);
      }
      if(config.url.indexOf("/api/v1/auth/reset-password") !== -1 && status===401){
        throw new  Error(data.message);
      }
      return Promise.reject(error);
    }
    return Promise.reject(error);
  });
export default axiosClient;