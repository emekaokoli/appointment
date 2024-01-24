import Layout from '@/components/MainLayout';
import ErrorPage from '@/components/NotFound';
import { Appointment } from '@/modules/appointment/appointment';
import { AppointmentDetails } from '@/modules/appointment/appointment_details';
import { NewAppointment } from '@/modules/appointment/new_appointment';
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
      { path: 'appointments', element: <Appointment /> },
      { path: 'appointments/:id', element: <AppointmentDetails /> },
      { path: 'appointments/schedule-appointment', element: <NewAppointment /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
  { path: 'auth/login', element: <UserLogin /> },
  { path: 'auth/register', element: <CreateAccount /> },
  { path: '*', element: <Navigate to="/auth/login" /> },
];