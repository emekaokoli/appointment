import { useToast } from '@/common/use-toast';
import { BookingPayload, BookingResponse } from '@/components/interfaces/book-appointment';
import { postRequest } from '@/utils/http-actions.helpers';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useBookAppointment = () => {
  const { toast } = useToast();

  const queryClient = useQueryClient();

  const { mutateAsync, ...rest } = useMutation({
    mutationFn: async ({ payload }: { payload: BookingPayload }) => {
      const data = await postRequest<BookingPayload, BookingResponse>({
        url: '/appointments',
        payload,
      });
      return data;
    },
    onSuccess: (data) => {
      if (data) {
        return toast({
          variant: 'default',
          title: 'Success',
          description: JSON.stringify(data.results) || 'Appointment successfully created',
        });
      }
    },
    onError: (error) => {
      if (error && error instanceof AxiosError) {
        return toast({
          variant: 'destructive',
          title: 'Error',
          description: error?.response?.data?.message || 'An unexpected error occurred',
        });
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['booking'] });
    },

  });

  return {
    createAppointment: mutateAsync,
    ...rest,
  };
}