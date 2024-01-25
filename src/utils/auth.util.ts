import jwtDecode, { type JwtPayload } from 'jwt-decode';
import { isEmpty } from 'lodash';
import { NavigateFunction } from 'react-router-dom';

export interface decodedUser extends JwtPayload {
  email: string;
  date_of_birth: string;
  user_id: number;
  created_at: string;
}

const getToken = () => {
  const token = localStorage.getItem('accesstoken');
  if (token) {
    return token;
  }
  return null;
};

const removeToken = (navigate?: NavigateFunction) => {
  localStorage.removeItem('accesstoken');
  localStorage.removeItem('authenticated');
  if (navigate) {
    navigate('/auth/login');
  }
};

const setToken = (token: string) => {
  localStorage.setItem('accesstoken', token);
};

const isLoggedIn = (authenticated: boolean) => {
  localStorage.setItem('authenticated', JSON.stringify(authenticated));
};

function isAuthenticated(): boolean {
  try {
    const decodedToken = getDecodedJwt();
    if (!isEmpty(decodedToken)) {
      const { exp } = decodedToken;
      const currentTime = Date.now() / 1000;
      if (exp) {
        return exp > currentTime;
      }
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
}

function getDecodedJwt(tkn = ''): decodedUser {
  try {
    const token = tkn || getToken();
    const decoded = jwtDecode<decodedUser>(token as string);
    return decoded;
  } catch (error) {
    return {} as decodedUser;
  }
}

export const authUtils = {
  getDecodedJwt,
  removeToken,
  setToken,
  getToken,
  isLoggedIn,
  isAuthenticated,
};
