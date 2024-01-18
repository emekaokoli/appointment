/// <reference types="vite-plugin-svgr/client" />
import BrandhS from "@/assets/svg/logo.svg?react";
import { LoadingButton } from "@/common/ButtonLoading";
import { Button } from "@/common/button";
import { Input } from "@/common/input";
import { Label } from "@/common/label";
import { initialLoginData, loginForm } from "@/common/schema/login.schema";
import useAuth from '@/components/hooks/useAuth';
import { zodResolver } from '@hookform/resolvers/zod';
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLogin } from "./hooks/useLogin";
import { loginPayload } from "./interfaces/loginPayload";



export function UserLogin() {
  const { isLoggedIn } = useAuth()
  const { state } = useLocation();
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);

  const { handleSubmit, register, formState: { errors, isSubmitting, isValid } } = useForm<loginPayload>({
    defaultValues: initialLoginData,
    resolver: zodResolver(loginForm),
  });
  const from = state?.path || '/appointments';

  const { signIn, isPending } = useLogin();

  const onSubmit = (data: loginPayload) => {
    signIn({ payload: data })
    navigate(from, { replace: true })
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate(from, { replace: true });
    }
  }, [navigate, from]);

  const revealPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6 ">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <BrandhS />
        </div>
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-2xl font-bold text-center mb-1">Sign In</h1>
          <p className="text-center text-sm mb-8">
            Is this your first time here?
            <Link className="text-green-600 hover:underline" to='/register'>
              Create an account instead
            </Link>
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-6 flex-col justify-start items-center md:items-start gap-2 flex ">
              <div>
                <Label className="block text-sm font-medium text-gray-700" htmlFor="email">
                  Email address
                </Label>
                <div className="mt-1">
                  <Input {...register('email')}
                    id="email" autoCapitalize='none'
                    autoCorrect='off' placeholder="johndoe@xyz.com" type="email" disabled={isSubmitting}
                  />
                </div>
                {errors?.email ? <p className='relative text-red-500 font-normal text-xl font-poppins tracking-tight'>
                  {errors?.email.message}
                </p> : null}
              </div>
              <div >
                <Label className="block text-sm font-medium text-gray-700" htmlFor="password">
                  Password
                </Label>
                <div className="mt-1 relative">
                  <Input 	{...register('password')}
                    autoCapitalize='none'
                    autoCorrect='off'
                    type={showPassword ? 'text' : 'password'}
                    id='password' placeholder="enter password" disabled={isSubmitting}
                  />
                  <div
                    className='absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer self-center'
                    onClick={revealPassword}
                  >
                    {showPassword ? (
                      <EyeOffIcon className='h-5 w-5 text-gray-500' />
                    ) : (
                      <EyeIcon className='h-5 w-5 text-gray-500' />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Link className="text-sm text-gray-600 hover:underline" to='forgot-password'>
                  Forgot Password?
                </Link>
                <Button className="ml-4" variant='secondary'
                  type="submit" disabled={isSubmitting || !isValid}
                >
                  {isPending ? <LoadingButton /> : 'Sign in'}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
