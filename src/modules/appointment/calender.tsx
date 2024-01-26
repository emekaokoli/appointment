import { Button } from "@/common/button";
import { useToast } from "@/common/use-toast";
import { useGetAllProvidersById } from "@/components/hooks/useGetAllProvidersById";
import { FreeSlot, eventProp } from "@/components/interfaces/calender";
import { EventInfoModal } from "@/components/modals/event_Info_modal";
import { EventInfo } from "@/components/modals/event_info";
import { CreateAppointment } from "@/components/modals/new_appointment";
import DisplayError from "@/errors/DisplayError";
import { localizer } from '@/utils/date.util';
import { Plus } from "lucide-react";
import { useState } from "react";
import { Calendar, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useParams } from "react-router-dom";



export function Scheduler() {
  const { provider_id } = useParams();
  const { toast } = useToast();
  // const [openBookingDialog, setOpenBookingDialog] = useState<FreeSlot | null>(null);
  const [eventData, setSetEventData] = useState<eventProp>({} as eventProp);
  const [eventInfoModal, setEventInfoModal] = useState(false)
  const [openSlot, setOpenSlot] = useState<boolean>(false)

  const { bookedSlots, isError, error } = useGetAllProvidersById(Number(provider_id))


  const handleSlotSelect = (slotInfo: { start: Date; end: Date }) => {
    const clickedSlot: FreeSlot = {
      start: slotInfo.start,
      end: slotInfo.end,
    };
    // setSelectedSlot(clickedSlot);
    handleSlotClick(clickedSlot);
  };

  const handleSlotClick = (selectedSlot: FreeSlot) => {
    // Handle logic for showing the modal or triggering appointment creation
    const isSlotAvailable = !bookedSlots.some(
      (ap) =>
        (selectedSlot.start >= new Date(ap.start_time) &&
          selectedSlot.start < new Date(ap.end_time)) ||
        (selectedSlot.end > new Date(ap.start_time) &&
          selectedSlot.end <= new Date(ap.end_time))
    );

    if (isSlotAvailable) {
      // Open the dialog box for booking
      setOpenSlot(true)
    } else {
      return toast({
        variant: 'default',
        title: 'Error',
        description: 'The selected time slot is not available',
      });
    }
  };


  const handleEventSelect = (selectedEvent: eventProp) => {
    setEventInfoModal(true)
    setSetEventData(selectedEvent)

  };

  const handleCloseSlots = () => setOpenSlot(false)

  const allViews = Object.keys(Views).map(k => Views[k as keyof typeof Views]);


  return (
    <div className="bg-white p-4 shadow rounded-lg" style={{ height: 700 }}>
      <div className="flex items-center justify-end mb-4">
        <Button variant="default" className=' text-light bg-primary gap-2 font-microGrotesk'><Plus size={15} />Schedule appointment</Button>

      </div>
      <EventInfoModal open={eventInfoModal} handleClose={() => setEventInfoModal(false)} currentEvent={eventData} />
      <Calendar
        localizer={localizer}
        events={bookedSlots && bookedSlots.map((appointment) => ({
          start: new Date(appointment.start_time),
          end: new Date(appointment.end_time),
          title: appointment.reason_for_visit.toString(),
        }))}
        onSelectEvent={handleEventSelect}
        onSelectSlot={handleSlotSelect}
        selectable
        startAccessor="start"
        components={{ event: EventInfo }}
        endAccessor="end"
        defaultView="month"
        views={allViews}
        eventPropGetter={(event) => {
          const hasAppointments = bookedSlots && bookedSlots.find((ap) => ap.start_time === event.start)
          return {
            style: {
              backgroundColor: hasAppointments ? "" : "#fff",
              borderColor: hasAppointments ? "" : "#58594C",
              color: hasAppointments ? "" : "#000",
            },
          }
        }}
        className="bottom-[0.5px] text-black"
      />
      {isError ? <DisplayError error={error} title="Error" /> : null}
      <CreateAppointment open={openSlot} toggleOpenClose={handleCloseSlots} providerId={provider_id!} />

    </div>
  )
}
