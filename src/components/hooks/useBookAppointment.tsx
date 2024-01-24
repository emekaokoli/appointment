import { useToast } from '@/common/use-toast';
import { BookingPayload, BookingResponse } from '@/components/interfaces/book-appointment';
import { postRequest } from '@/utils/http-actions.helpers';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';

export const useBookAppointment = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { state } = useLocation();

  const from = state?.path || '/appointments';
  const queryClient = useQueryClient();

  const { mutateAsync, ...rest } = useMutation({
    mutationFn: async ({ payload }: { payload: BookingPayload }) => {
      const { data } = await postRequest<BookingPayload, BookingResponse>({
        url: '/appointments',
        payload,
      });
      return data;
    },
    onSuccess: ({ message }) => {
      toast({
        variant: 'default',
        title: 'Success',
        description: message || 'Appointment successfully created',
      });
      navigate(from, { replace: true });
    },
    onError: (error) => {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message || 'An unexpected error occurred',
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['booking'] });
    },
    onMutate: () => {
      navigate(from, { replace: true });
    },
  });

  return {
    createAppointment: mutateAsync,
    ...rest,
  };
}