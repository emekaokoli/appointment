
import { useToast } from '@/common/use-toast';
import React, { memo } from 'react';


interface Props {
	error: Error
	title: string
}

const DisplayError = ({ error, title, }: Props) => {
	const { toast } = useToast();

	React.useEffect(() => {
		if (error) {
			// since `toast` returns an object with { id, dismiss, update }
			const toastResult = toast({
				variant: 'destructive',
				title,
				description: error.message
			});

			// Dismiss the toast after 5 seconds
			const timeout = setTimeout(toastResult.dismiss, 5000);

			// Clean up the timeout when the component unmounts
			return () => clearTimeout(timeout);
		}
	}, [error, toast]);

	return null;
};

export default memo(DisplayError);
