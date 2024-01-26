

export type BookingPayload = {
  provider_id: number,
  user_id: number,
  start_time: Date
  end_time: Date,
  reason_for_visit: string | string[]
  remark?: string
}

export type BookingResponse = {
  data: {
    results: string
  }
}

export type Booked = {
  appointment_id: number,
  user_id: number
  email: string
  start_time: Date
  end_time: Date
  reason_for_visit: string | string[]
  remark?: string
}

export type BookedResponse = {
  data: {
    data: {
      results: Booked[]
    }
  }
}