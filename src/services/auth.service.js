import axios from 'src/utils/axios';
import { API_BASE_URL } from 'src/config';
import { USER } from 'src/config/endpoints';

class AuthService {
  setAxiosInterceptors = ({ onLogout }) => {
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          this.setSession(null);

          if (onLogout) {
            onLogout();
          }
        }

        return Promise.reject(error);
      }
    );
  };
  
  loginWithEmail = (email, password) => new Promise((resolve, reject) => {
    axios.post(API_BASE_URL + USER.LOGIN, {
      email,
      password
    })
      .then((response) => {
        if (response.data.user) {
          this.setSession(response.data.token);
          resolve(response.data);
        } else {
          reject(response.data.error)
        }
      })
      .catch((error) => {
        reject(error);
      })
  })
  loginWithToken = () => new Promise((resolve, reject) => {
    const accessToken = localStorage.getItem('token');
    axios.defaults.headers.common.Authorization = `${accessToken}`;
    axios.get(`${API_BASE_URL}${USER.GET_ME}`)
      .then((response) => {
        if (response.data.user) {
          resolve(response.data);
        } else {
          reject(response.data.error);
        }
      })
      .catch((error) => {
        reject(error);
      });
  })
  registerWithEmail = (data) => new Promise((resolve, reject) => {
    axios.post(API_BASE_URL + USER.REGISTER, data)
      .then((response) => {
        if (response.data.status) {
          resolve();
        } else {
          reject(response.data.error)
        }
      })
      .catch((error) => {
        reject(error);
      })
  });


  logout = () => {this.setSession(null);}
  setSession = (accessToken) => {
    if (accessToken) {
      localStorage.setItem('token', accessToken);
      axios.defaults.headers.common.Authorization = accessToken;
    } else {
      localStorage.removeItem('token');
      delete axios.defaults.headers.common.Authorization;
    }
  }
  getAccessToken = () => localStorage.getItem('token');
  isAuthenticated = () => !!this.getAccessToken();
}

const authService = new AuthService();

export default authService;