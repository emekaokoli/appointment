import Layout from '@/components/Layout/MainLayout';
import ErrorPage from '@/components/NotFound';
import { Scheduler } from '@/modules/appointment/calender';
import { ProviderList } from '@/modules/appointment/provider_list';
import { CreateAccount } from '@/modules/auth/Register';
import { UserLogin } from '@/modules/auth/login';
import { Dashboard } from '@/modules/dashboard/dashboard';
import { Navigate } from 'react-router-dom';

export const routes = (isAuthenticated: boolean) => [
  {
    path: '/',
    element: isAuthenticated ? <Layout /> : <Navigate to="/auth/login" />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'providers', element: <ProviderList /> },
      { path: 'providers/:provider_id/available-time-slots', element: <Scheduler /> },
      // { path: 'appointments/schedule-appointment', element: <NewAppointment /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
  { path: 'auth/login', element: <UserLogin /> },
  { path: 'auth/register', element: <CreateAccount /> },
  { path: '*', element: <Navigate to="/auth/login" /> },
];