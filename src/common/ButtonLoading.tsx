import { Loader2 } from 'lucide-react';

export function LoadingButton() {
	return (
		<div>
			<Loader2 className='flex justify-center items-center mr-2 w-5 h-5 animate-spin ' />
		</div>
	);
}
