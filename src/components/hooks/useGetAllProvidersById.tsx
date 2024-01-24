import { getRequestWithParams } from '@/utils/http-actions.helpers';
import { useQuery } from '@tanstack/react-query';



export function useGetAllProvidersById(providerId: number) {
  const { data: providers, ...rest } = useQuery({
    queryKey: [{ providerId }],
    queryFn: () => getRequestWithParams({
      url: '/providers',
      params: providerId
    }),
    staleTime: Infinity,
  });
  return {
    providers,
    rest
  }
}