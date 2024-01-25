import { type Event } from "react-big-calendar"
import { Booked } from "./book-appointment"


export type DatePickerEventFormData = {
  description: string
  provider_id?: number
  allDay: boolean
  start?: Date
  end?: Date
}

export type EventFormData = {
  description: string
  provider_id?: string
}

export const initialEventFormState: EventFormData = {
  description: "",
  provider_id: undefined,
}

export const initialDatePickerEventFormData: DatePickerEventFormData = {
  description: "",
  provider_id: undefined,
  allDay: false,
  start: undefined,
  end: undefined,
}

export interface EventInfo extends Event {
  provider_id: number
  user_id: number
  remark: string
  end_time: string
  reason_for_visit: string
}

export interface eventProp extends Event {
  title: string
  start: Date
  end: Date
}
export type FreeSlot = {
  start: Date
  end: Date
}

export function buildEvents(event: Booked[]) {
  return event.map(({ reason_for_visit, start_time, end_time }) => ({
    title: reason_for_visit.toString(),
    start: new Date(start_time),
    end: new Date(end_time),
  }))

}