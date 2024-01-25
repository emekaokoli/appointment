import { date, object, string, z } from 'zod';

export const initial_new_appointment = {
  start_date: new Date(),
  end_date: new Date(),
  reason_for_visit: '',
  remark: '',
} as const;

export const _new_appointment = object({
  start_date: date({
    required_error: 'start date is required',
  }),
  end_date: date({
    required_error: 'end date is required',
  }),
  reason_for_visit: string({
    required_error: 'reason for visit is required',
  }),
  remark: string().optional(),
});

export type New_appointment = z.infer<typeof _new_appointment>;
