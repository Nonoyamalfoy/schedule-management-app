export const CALENDAR_SET_DATE = "CALENDAR_SET_DATE";
export const calendarSetDate = payload => {
  return{
    type: "CALENDAR_SET_DATE",
    payload
  }
}