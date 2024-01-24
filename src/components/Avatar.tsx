import React from 'react';

interface AvatarProps {
  name: string;
  size?: number;
  backgroundColor?: string;
  textColor?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ name }) => {
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
