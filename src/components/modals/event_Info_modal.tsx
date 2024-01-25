/// <reference types="vite-plugin-svgr/client" />
import { Avatar, AvatarFallback, AvatarImage } from "@/common/avatar"
import { Badge } from "@/common/badge"
import { Button } from "@/common/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/common/dialog"
import { eventProp } from '@/components/interfaces/calender'
import { Clock, X } from "lucide-react"
import { Dispatch, SetStateAction } from "react"
import { Link } from "react-router-dom"


interface EventProps {
  open: boolean
  handleClose: Dispatch<SetStateAction<boolean>>
  currentEvent: eventProp | null
}
export function EventInfoModal({ open, handleClose, currentEvent }: EventProps) {

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[487px]">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold"> {currentEvent?.title}</DialogTitle>
          <DialogDescription className="flex items-center">
            <div className="flex justify-between items-center mt-2 w-full">
              <Button className="flex justify-between font-generalSans text-ghost w-full text-sm text-nowrap" variant="ghost">
                <Clock size={10} /> Reschedule Appointment
              </Button>
              <Button className="text-alert font-generalSans w-full text-sm" variant="ghost">
                <X size={10} className=" m-1" /> Cancel Appointment
              </Button>
              <Button className="flex justify-center items-center bg-[#34D399] text-light text-sm rounded-[80px] w-44 h-10" variant='outline'>Join call</Button>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="mt-2 flex justify-between items-center">
          <p className="text-sm text-gray-500">Wednesday, June 22 · 2:00PM - 3:30PM</p>
          <Badge className="mt-1" variant="secondary">
            First Call
          </Badge>
        </div>
        <div className="mt-6 p-3">
          <h3 className="text-lg font-semibold">About the Patient</h3>
          <div className="flex justify-between items-center mt-4">
            <div className="flex">
              <Avatar>
                <AvatarImage alt="Kakashi Hatake" src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>User</AvatarFallback>
              </Avatar>
              <div className="flex flex-col ml-4">
                <p className="font-semibold">Kakashi Hatake</p>
                <p className="text-sm text-gray-500">Male, 36</p>
              </div>
            </div>
            <Link className="text-sm text-[#3B82F6] mt-4 block" to="#">
              View full profile
            </Link>
          </div>
          <div className="flex justify-between w-[80%]">
            <div className="mt-4">
              <p className="text-sm font-medium">Preferred Pronouns</p>
              <p className="text-sm text-gray-500">He/him</p>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium">Email Address</p>
              <p className="text-sm text-gray-500">kakashi@konoha.village</p>
            </div>
          </div>
        </div>

        <DialogFooter className="sm:justify-start">
          <div className="mt-6">
            <h3 className="text-lg font-semibold">More Information</h3>
            <p className="text-sm mt-4">
              The patient has provided more information. Learn more about their health conditions to prepare adequately
              ahead of your call.
            </p>
            <Link className="text-sm text-[#3B82F6] mt-4 block" to="#">
              View intake form
            </Link>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}