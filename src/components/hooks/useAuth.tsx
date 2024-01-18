import { authUtils } from '@/utils/auth.util';

export default function useAuth() {
  const isLoggedIn = authUtils.isAuthenticated()
  const logOut = authUtils.removeToken;

  return {
    logOut,
    isLoggedIn,
  };
}