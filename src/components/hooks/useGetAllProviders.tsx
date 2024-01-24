import { getRequest } from '@/utils/http-actions.helpers';
import { useQuery } from '@tanstack/react-query';
import { ProvidersResponse } from '../interfaces/providers';



export function useGetAllProviders() {
  const { data, ...rest } = useQuery({
    queryKey: ["providers"],
    queryFn: () => getRequest<ProvidersResponse>({
      url: '/providers'
    }),
    staleTime: Infinity,
  });
  return {
    providers: data?.data.results,
    ...rest
  }
}