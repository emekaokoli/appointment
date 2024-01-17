import { Link, useLocation } from 'react-router-dom';

export function NotFound() {
	const { state } = useLocation();
	const from = state?.path || '/';
	return (
		<div className='p-[100px] font-poppins flex flex-col justify-center items-center'>
			<h1 className='font-poppins'>Oops...</h1>
			<p>Page Not Found!</p>
			<div className='flex justify-center items-center'>
				<Link
					to={from}
					style={{ textDecoration: 'none', fontSize: '1.5rem' }}
					className=' font-poppins'
				>
					Go back
				</Link>
			</div>
		</div>
	);
}
