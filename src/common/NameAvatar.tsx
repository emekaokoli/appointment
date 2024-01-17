interface AvatarProps {
	name: string;
}

export const NameAvatar = ({ name }: AvatarProps) => {
	const initials = name
		?.split(' ')
		.map((part) => part[0])
		.join('')
		.toUpperCase();

	return (
		<div className='w-[40px] h-[40px] bg-[#029aec] text-white flex justify-center items-center font-medium font-poppins text-sm uppercase rounded-full m-1'>
			<p className='m-2 p-2'>{initials}</p>
		</div>
	);
};
