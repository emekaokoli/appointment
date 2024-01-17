import { z } from 'zod';

export const initialLoginData = {
	staff_id: '',
	password: '',
} as const;

export const loginForm = z.object({
	staff_id: z
		.string()
		.nonempty('Must not be empty')
		.min(3, 'staff id must be at least 3 characters long'),
	password: z.string().min(6, 'password must be at least 6 characters long'),
});
