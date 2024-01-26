/// <reference types="vite-plugin-svgr/client" />
import BrandhS from "@/assets/svg/logo.svg?react";
import { LoadingButton } from "@/common/ButtonLoading";
import { Button } from "@/common/button";
import { Input } from "@/common/input";
import { Label } from "@/common/label";
import { Register, createUserAccount, initialCreateData } from "@/common/schema/register.schema";
import { useRegister } from "@/components/hooks/useRegister";
import { zodResolver } from '@hookform/resolvers/zod';
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from "react-router-dom";


export function CreateAccount() {
  const { state } = useLocation();
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const from = state?.path || '/providers';

  const { handleSubmit, register, formState: { errors, isSubmitting, isValid } } = useForm<Register>({
    defaultValues: initialCreateData,
    resolver: zodResolver(createUserAccount),
  });

  const { create, isPending } = useRegister();


  const onSubmit = (data: Register) => {
    create({ payload: data })
    navigate(from, { replace: true })
  };

  const revealPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center ">
      <div className="flex justify-center flex-col items-center sm:mx-auto sm:w-full sm:max-w-md">
        <BrandhS />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 leading-[42.5px]  font-microGrotesk text-primary">Create an account</h2>
        <p className="mt-2 text-center text-[20px] text-gray-600 flex flex-wrap font-normal leading-[27px] items-center text-primary">
          You are a couple of clicks away from the best access to medical care
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email address
              </Label>
              <div className="mt-1">
                <Input autoComplete="email" id="email" placeholder="name@mail.com" required type="email" {...register('email')} disabled={isSubmitting} />
              </div>
              {errors?.email ? <p className='relative text-red-500 font-normal text-xl font-microGrotesk tracking-tight'>
                {errors?.email.message}
              </p> : null}
            </div>
            <div>
              <Label className="block text-sm font-medium text-gray-700" htmlFor="date_of_brith">
                Date of birth
              </Label>
              <div className="mt-1">
                <Input autoComplete="date_of_brith" id="date_of_brith" placeholder="MM/DD/YYYY" required type="text" {...register('date_of_birth')} disabled={isSubmitting} />
              </div>
              {errors?.date_of_birth ? <p className='relative text-red-500 font-normal text-xl font-microGrotesk tracking-tight'>
                {errors?.date_of_birth.message}
              </p> : null}
            </div>
            <div>
              <Label className="block text-sm font-medium text-gray-700" htmlFor="password">
                Password
              </Label>
              <div className="mt-1 relative">
                <Input
                  {...register('password')}
                  autoCapitalize='none'
                  autoCorrect='off'
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                  type={showPassword ? 'text' : 'password'}
                  disabled={isSubmitting}

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
            <div className=' flex justify-end items-center'>
              <Button className="w-1/2 bg-primary text-light rounded-[70px]" type="submit" disabled={isSubmitting || !isValid}> {isPending ? <LoadingButton /> : 'Create Account'}</Button>
            </div>
          </form>
          <div className="mt-7">
            <div className="relative">
              <div className="flex justify-center items-center gap-10">
                <div className=" w-[300px]  border-t border-gray-300" />
              </div>
              <div className="flex justify-center text-sm my-7">
                <span className="px-2 bg-white text-gray-500 text-primary">Already a member?</span> <Link className="font-medium text-green-600 hover:text-green-500 text-link" to='/login'>
                  Sign in
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}