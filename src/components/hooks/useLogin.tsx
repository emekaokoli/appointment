import { useToast } from '@/common/use-toast';
import { authUtils } from '@/utils/auth.util';
import handleApiError from '@/utils/handle-api-errors.helper';
import { postRequest } from '@/utils/http-actions.helpers';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginPayload } from '../interfaces/loginPayload';
import { SuccessPayload } from '../interfaces/success';

export const useLogin = () => {
	const { toast } = useToast();
	const { setToken } = authUtils;
	const navigate = useNavigate();
	const { state } = useLocation();

	const from = state?.path || '/appointments';
	const queryClient = useQueryClient();

	const { mutate, ...rest } = useMutation({
		mutationFn: async ({ payload }: { payload: loginPayload }) => {
			const response = await postRequest<loginPayload, SuccessPayload>({
				url: '/login',
				payload,
			});
			return response;
		},
		onSuccess: ({ token }) => {
			setToken(token);
			navigate(from, { replace: true });
		},
		onError: (error) => {
			const errors = handleApiError(error);
			console.log({ errors });

			toast({
				variant: 'destructive',
				title: 'Login failed',
				description: errors?.message || 'An unexpected error occurred',
			});
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ['login'] });
		},
		// optimisticUpdate: (variables) => {
		// 	// Simulate successful login before server response
		// 	setToken(...variables);
		// },
	});

	return {
		signIn: mutate,
		...rest,
	};
}