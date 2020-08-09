import React from "react";
import {CalendarBoard, CurrentScheduleDialog} from "./index";

const CalendarContainer = (props) => {
  return (
    <>
      <CalendarBoard schedulesStyle={props.schedulesStyle} />
      <CurrentScheduleDialog />
    </>
  )
}

export default CalendarContainer