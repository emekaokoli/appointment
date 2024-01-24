export enum VisitReason {
  FollowUp = "Follow-up on recent blood test results",
  Consultation = "Consultation",
  General = "I am not sure",
  Others = "Others"
}

export type BookingPayload = {
  provider_id: number,
  user_id: number,
  start_time: string
  end_time: string,
  reason_for_visit: VisitReason
  remark: string
}

export type BookingResponse = {
  data: {
    message: string
  }
}