import { Register } from '@/common/schema/register.schema';
import { useToast } from '@/common/use-toast';
import { SuccessPayload } from '@/components/interfaces/success';
import { postRequest } from '@/utils/http-actions.helpers';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';

export const useRegister = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { state } = useLocation();

  const from = state?.path || '/auth/login';
  const queryClient = useQueryClient();

  const { mutateAsync, ...rest } = useMutation({
    mutationFn: async ({ payload }: { payload: Register }) => {
      const response = await postRequest<Register, SuccessPayload>({
        url: '/auth/register',
        payload,
      });
      return response;
    },
    onSuccess: () => {
      navigate(from, { replace: true });
      toast({
        variant: 'default',
        title: 'Registration successful',
        description: 'successful',
      });
    },
    onError: (error) => {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error?.message || 'An unexpected error occurred',
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['register'] });
    },

  });

  return {
    create: mutateAsync,
    ...rest,
  };
}