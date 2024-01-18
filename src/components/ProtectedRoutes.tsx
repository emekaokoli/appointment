import useAuth from '@/components/hooks/useAuth';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoutes = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { pathname } = useLocation();
  const { isLoggedIn } = useAuth()

  if (!isLoggedIn) {
    return <Navigate to='/login' state={{ from: pathname }} replace />;
  }

  return children;
};

export default ProtectedRoutes;
