import { Booked, BookedResponse } from '@/components/interfaces/book-appointment';
import fetchApi from '@/utils/api.utils';
import { useQuery } from '@tanstack/react-query';

export function useGetAllProvidersById(providerId: number) {
  const { data, ...rest } = useQuery<BookedResponse>({
    queryKey: ['bookedSlots', providerId],
    queryFn: () => fetchApi.get(`/appointments/booked/${providerId}`),
    staleTime: 30 * 1000,
  });
  return {
    bookedSlots: data?.data?.data?.results as Booked[],
    ...rest
  }
}