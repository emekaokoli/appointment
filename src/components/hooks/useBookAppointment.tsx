import { useToast } from '@/common/use-toast';
import { BookingPayload, BookingResponse } from '@/components/interfaces/book-appointment';
import { postRequest } from '@/utils/http-actions.helpers';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useBookAppointment = () => {
  const { toast } = useToast();

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
      return toast({
        variant: 'default',
        title: 'Success',
        description: message || 'Appointment successfully created',
      });
    },
    onError: (error) => {
      return toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message || 'An unexpected error occurred',
      });
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