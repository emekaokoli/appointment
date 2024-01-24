import { z } from 'zod';

export const initialCreateData = {
  email: '',
  date_of_brith: '',
  password: '',
} as const;

export const createUserAccount = z.object({
  email: z
    .string()
    .email('email must be a valid email')
    .refine((val) => val !== undefined, { message: 'Email field is required' }),
  date_of_brith: z.string(),
  password: z.string().min(6, 'password must be at least 6 characters long'),
});

export type Register = z.infer<typeof createUserAccount>;
