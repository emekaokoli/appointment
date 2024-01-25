import { useToast } from '@/common/use-toast';
import { loginPayload } from '@/components/interfaces/login';
import { SuccessPayload } from '@/components/interfaces/success';
import { authUtils } from '@/utils/auth.util';
import handleApiError from '@/utils/handle-api-errors.helper';
import { postRequest } from '@/utils/http-actions.helpers';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';

export const useLogin = () => {
	const { toast } = useToast();
	const { setToken } = authUtils;
	const navigate = useNavigate();
	const { state } = useLocation();

	const from = state?.path || '/dashboard';
	const queryClient = useQueryClient();

	const { mutateAsync, ...rest } = useMutation({
		mutationFn: async ({ payload }: { payload: loginPayload }) => {
			const { data } = await postRequest<loginPayload, SuccessPayload>({
				url: '/auth/login',
				payload,
			});
			return data;
		},
		onSuccess: (values) => {
			const accessToken = values?.accessToken;
			if (accessToken) {
				setToken(accessToken);
				navigate(from, { replace: true });
			}
		},
		onError: (error: any) => {
			const errors = handleApiError(error)
			console.log({ errors });

			if (error) {
				toast({
					variant: 'destructive',
					title: 'Login failed',
					description: error.message || 'An unexpected error occurred',
				});
			}
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ['login'] });
		},
		// onMutate: () => {
		// 	navigate(from, { replace: true });
		// },
	});

	return {
		signIn: mutateAsync,
		...rest,
	};
}