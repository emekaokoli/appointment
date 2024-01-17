import { Loader2 } from 'lucide-react';

export const Loading = () => (
	<div className='flex justify-center items-center h-min'>
		<Loader2 className='flex justify-center items-center mr-2 w-5 h-5 md:h-12 md:w-12 animate-spin bg-black' />
	</div>
);
