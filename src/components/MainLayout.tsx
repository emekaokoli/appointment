import { Header } from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div className='bg-neutral-default flex flex-row w-full grow'>
    <Sidebar />
    <div className='flex flex-1 flex-col'>
      <Header />
      <main className='flex-1'>
        <Outlet />
      </main>
    </div>
  </div>
);

export default Layout;
