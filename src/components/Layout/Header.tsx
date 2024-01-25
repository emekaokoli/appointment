import { Avatar } from '@/components/Avatar';
import { titleContext } from '@/context/PageTitleContext';
import { useContext } from 'react';

export const Header = () => {
	const { title } = useContext(titleContext);
	const user = 'Pelumi Alesh' || 'User'
	return (
		<nav className='sticky top-0 left-0 right-0 z-10 bg-neutral-greyBg h-16 flex items-center border-b border-gray-300 justify-between px-5 w-full'>
			<div className='relative flex items-center'>
				<span className='font-[500] text-[18px] uppercase font-poppins'>
					{title || 'Appointment'}
				</span>
			</div>
			<div className='flex justify-end items-center gap-8'>
				<div className='flex gap-2 items-center'>
					<div className='flex gap-2 items-center cursor-pointer'>
						<Avatar name={user} />
						<p className='text-black text-[14px] font-[400] font-poppins'>
							{user}
							<span className='text-sm flex items-start justify-start font-poppins capitalize'>
								{'pelumi.al@mail.com'}
							</span>
						</p>
					</div>
				</div>
			</div>
		</nav>
	);
};
