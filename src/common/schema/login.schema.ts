import { z } from 'zod';

export const initialLoginData = {
  email: '',
  password: '',
} as const;

export const loginForm = z.object({
  email: z
    .string()
    .email('email must be a valid email')
    .refine((val) => val !== undefined, { message: 'Email field is required' }),
  password: z.string().min(6, 'password must be at least 6 characters long'),
});
