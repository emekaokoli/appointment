export type User = {
  email: string;
  date_of_birth: string;
  user_id: number;
  created_at: string;
};

export type UserWithPassword = {
  email: string;
  date_of_birth: string;
  password: string;
  user_id: number;
  created_at: string;
};