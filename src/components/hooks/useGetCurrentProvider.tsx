import { authUtils } from "@/utils/auth.util";
import jwtDecode from "jwt-decode";
import { useState } from 'react';

export default function useGetCurrentProvider() {
  const [decodedToken, setDecodedToken] = useState({})
  const { getToken } = authUtils;

  const token = getToken();
  if (token !== null) {
    const decodedToken = jwtDecode(token);
    setDecodedToken(decodedToken as {})
  }


  return {
    decodedToken
  }
}
