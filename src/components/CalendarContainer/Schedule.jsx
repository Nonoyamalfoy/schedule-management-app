import React from "react";
import {makeStyles} from "@material-ui/styles";
import {openCurrentScheduleDialog} from "../../reducks/currentSchedule/operations";
import { useDispatch } from "react-redux";
import {setScheduleColor} from "../../services/schedule";


const useStyles = makeStyles({
  schedule: {
    width: "80%",
    backgroundColor: "#6274da",
    color: "white",
    borderRadius: "4px",
    fontSize: "11px",
    padding: "0 3px",
    margin: "1px 0",
    cursor: "pointer",
    fontWeight: 50,
  }
})

const Schedule = (props) => {
  const classes = useStyles();
  const schedule = props.schedule
  const dispatch = useDispatch();
  const scheduleColor = setScheduleColor(schedule.color);

  return (
    <div
      style={{backgroundColor: scheduleColor}}
      className={classes.schedule}
      onClick={e => dispatch(openCurrentScheduleDialog(schedule, e))}
    >
      {schedule.title}
    </div>
  )
}

export default Schedule;