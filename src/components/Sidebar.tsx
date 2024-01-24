import TempleHS from "@/assets/svg/logo.svg?react";
import { sidebars } from '@/components/interfaces/sidebar';
import { SideBarItems } from '@/components/SideBarItems';


const Sidebar = () => (
  <aside className='sticky top-0 bg-brand-default hidden md:flex flex-col w-[250px] h-screen items-center overflow-y-auto justify-start z-[200] gap-5 shadow'>
    <div className='flex items-center gap-2 px-1 py-3'>
      <TempleHS className='flex w-48 h-auto text-primary' />
    </div>

    <div className='font-poppins max-h-full flex flex-1 flex-col  leading-[150%] text-primary'>
      <SideBarItems sidebar={sidebars} />
    </div>

  </aside>
)

export default Sidebar;
