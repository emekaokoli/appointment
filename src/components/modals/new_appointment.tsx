import { Button } from "@/common/button";
import { Input } from "@/common/input";
import { Label } from "@/common/label";
import { New_appointment, _new_appointment, initial_new_appointment } from '@/common/schema/create_appointment.schema';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "@/common/sheet";
import { useBookAppointment } from '@/components/hooks/useBookAppointment';
import { authUtils } from "@/utils/auth.util";
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo, useState } from "react";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useForm } from 'react-hook-form';

type CreatProps = {
  open: boolean;
  toggleOpenClose: () => void;
  providerId: string
}

export function CreateAppointment({
  open,
  toggleOpenClose,
  providerId
}: CreatProps) {
  const { getToken, getDecodedJwt } = authUtils;
  const [userId, setUserId] = useState<number>(0)
  const { handleSubmit, register, formState: { errors } } = useForm<New_appointment>({
    defaultValues: initial_new_appointment,
    resolver: zodResolver(_new_appointment),
  });


  const { createAppointment } = useBookAppointment()
  const token = useMemo(() => getToken(), [])
  if (token) {
    const user_id = useMemo(() => getDecodedJwt(token), [token])?.user_id
    if (user_id) {
      setUserId(user_id)
    }
  }

  const onSubmit = (data: New_appointment) => {
    createAppointment({
      payload: {
        ...data,
        reason_for_visit: [data.reason_for_visit],
        provider_id: Number(providerId),
        user_id: userId,
        start_time: data.start_date,
        end_time: data.end_date,
      }
    })
  };

  return (
    <Sheet open={open} onOpenChange={toggleOpenClose}>
      <SheetContent >
        <SheetHeader>
          <SheetTitle>Create appointment</SheetTitle>
          <SheetDescription>
            Give details of your why you want to see a doctore.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="reason_for_visit" className="text-right">Reason for Visit:</Label>
            <Input
              {...register('reason_for_visit', { required: true })}
              type="text"
              id="reason_for_visit"
              name="reason_for_visit"
              className="col-span-3"
              placeholder="Reason for Visit"
            />
            {errors?.reason_for_visit ? <p className='relative text-red-500 font-normal text-xl font-microGrotesk tracking-tight'>
              {errors?.reason_for_visit.message}
            </p> : null}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="remark" className="text-right">Remark:</Label>
            <Input
              {...register('remark')}
              type="text"
              id="remark"
              className="col-span-3"
            />
            {errors?.remark ? <p className='relative text-red-500 font-normal text-xl font-microGrotesk tracking-tight'>
              {errors?.remark.message}
            </p> : null}
          </div>
          <div className=" p-10 h-40">
            <div className="grid gap-5 mb-3">
              <Label id="start_date" htmlFor="start_date" className=" m-3">Start date and time</Label>
              <Input type="datetime-local" {...register('start_date', { valueAsDate: true })} placeholder="start date" />
              {errors?.start_date ? (
                <p className='relative text-red-500 font-normal text-xl font-microGrotesk tracking-tight'>
                  {errors?.start_date.message}
                </p>
              ) : null}
            </div>
            <div className="grid gap-5">
              <Label htmlFor="end_date" className=" m-3">Start date and time</Label>
              <Input id="end_date" type="datetime-local" {...register('end_date', { valueAsDate: true })} placeholder="end date" />
              {errors?.end_date ? (
                <p className='relative text-red-500 font-normal text-xl font-microGrotesk tracking-tight'>
                  {errors?.end_date.message}
                </p>
              ) : null}
            </div>
          </div>
        </div>
        <SheetFooter className=" absolute bottom-10 justify-center items-center right-5">
          <SheetClose asChild>
            <Button type="submit" onClick={handleSubmit(onSubmit)} variant="default" className=" text-light bg-darkprimary">Book appointment</Button>
          </SheetClose>
        </SheetFooter>

      </SheetContent>
    </Sheet>
  )
}
