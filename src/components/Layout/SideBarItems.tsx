import { SidebarProps } from '@/components/interfaces/sidebar';
import { NavLink } from "react-router-dom";

type Props = {
  sidebar: SidebarProps[];
};

export const SideBarItems = ({ sidebar }: Props) => (
  <div className="text-neutral-white flex flex-col gap-1 text-sm font-poppins h-full">
    {sidebar.map(
      (
        { title, pathUrl, icon: Icons },
        index,
      ) => (<li
        key={index}
        className="font-poppins font-light flex items-center justify-start w-full h-10 rounded-lg hover:shadow-md  hover:bg-opacity-100 text-neutral-white text-primary"
      >
        <NavLink
          to={pathUrl}
          className={({ isActive }) =>
            `w-[200px] h-8 p-2 font-light flex items-center justify-start rounded-lg ${isActive
              ? "bg-lightprimary text-primary  rounded-sm"
              : "text-black"
            }`
          }
        >
          <Icons className="w-6 h-6 mr-5" />
          <span className="mx-auto items-center md:mx-0 md:items-left capitalize  md:justify-start text-inherit bg-inherit">
            {title}
          </span>
        </NavLink>
      </li>)
    )}
  </div>
);
