import React from "react";
import {CalendarContainer} from "../components/CalendarContainer/index";
import {makeStyles} from "@material-ui/styles";
import CreateIcon from '@material-ui/icons/Create';
import { IconButton } from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {openAddScheduleDialog} from "../reducks/addSchedule/operation";
import {getCurrentDate} from "../reducks/calendar/selectors";
import {getDate} from "../services/calendar";
import {AddScheduleDialog} from "../components/ScheduleContainer"

const useStyles = makeStyles((theme) => ({
  schedules: {
    overflow: "scroll",
    height: "calc(15vh - 40px)"
  },
  create: {
    backgroundColor: "#3f51b5",
    color: "white",
    position: "absolute",
    bottom: "20px",
    right: "20px",
    zIndex: "10",
    boxShadow: "0 3px 5px rgba(0,0,0,0.5)",
    "&:hover": {
      backgroundColor: "#3f51b5",
      color: "grey"
    }
  },
}))

const Calendar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const date = getCurrentDate(selector);
  const currentDate = getDate(date);

  return(
    <div className="p-calendar">
      <IconButton 
        className={classes.create}  
        size="medium" 
        onClick={() => dispatch(openAddScheduleDialog(currentDate, "", "", "", "", "default"))}
      >
          <CreateIcon />
      </IconButton>
      <CalendarContainer schedulesStyle={classes.schedules} />
      <div className="dialog" >
        <AddScheduleDialog />
      </div>
    </div>
  )
}

export default Calendar;