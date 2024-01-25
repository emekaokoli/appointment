import { eventProp } from '../interfaces/calender';


type Props = {
  event: eventProp
}
export function EventInfo({ event }: Props) {
  return (
    <>
      <div>{event.start.toDateString()}</div>
      <div>{event.end.toDateString()}</div>
      <div>{event.title}</div>
    </>
  )
}
