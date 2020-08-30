import React from "react";
import { CalendarBoard,  } from "../components/Calendar/index";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { openAddScheduleDialog } from "../reducks/addSchedule/operation";
import { getCurrentDate } from "../reducks/calendar/selectors";
import { getDate } from "../services/calendar";
import { AddScheduleDialog, CurrentScheduleDialog } from "../components/Schedule";
import { CreateButton } from "../components/Uikit";
import { CurrentDateSchedulesDialog } from "../components/Calendar";
import {openCurrentDateSchedulesDialog} from "../reducks/currentDateSchedules/operations";

const useStyles = makeStyles((theme) => ({
  schedules: {
    overflow: "scroll",
    height: "calc(15vh - 40px)",
  },
  create: {
    backgroundColor: "#20295f",
    color: "white",
    position: "absolute",
    bottom: "20px",
    right: "20px",
    zIndex: "10",
    boxShadow: "0 3px 5px rgba(0,0,0,0.5)",
    "&:hover": {
      backgroundColor: "#20295f",
      color: "grey",
    },
  },
}));

const Calendar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const currentDate = getCurrentDate(selector);
  const dayjsCurrentDate = getDate(currentDate);

  return (
    <div className="p-calendar">
      <CreateButton
        onClick={() =>
          dispatch(
            openAddScheduleDialog(dayjsCurrentDate, "", "", "", "", "default")
          )
        }
        className={classes.create}
      />
      <CalendarBoard 
        schedulesStyle={classes.schedules} 
        onClick={(schedules) => dispatch(openCurrentDateSchedulesDialog(schedules))}
      />
      <CurrentScheduleDialog />
      <AddScheduleDialog />
      <CurrentDateSchedulesDialog />
    </div>
  );
};

export default Calendar;
