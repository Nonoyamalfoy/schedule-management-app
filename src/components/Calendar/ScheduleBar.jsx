import React from "react";
import { makeStyles } from "@material-ui/styles";
import { openSelectedScheduleDialog } from "../../reducks/selectedSchedule/operations";
import { useDispatch } from "react-redux";
import { setScheduleColor } from "../../services/schedule";

const useStyles = makeStyles({
  schedule: {
    width: "80%",
    color: "white",
    borderRadius: "4px",
    fontSize: "11px",
    padding: "0 3px",
    margin: "1px 0",
    cursor: "pointer",
    fontWeight: 50,
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
});

const ScheduleBar = (props) => {
  const classes = useStyles();
  const schedule = props.schedule;
  const dispatch = useDispatch();
  const scheduleColor = setScheduleColor(schedule.color);

  return (
    <div
      style={{ backgroundColor: scheduleColor }}
      className={classes.schedule}
      onClick={(e) => dispatch(openSelectedScheduleDialog(schedule, e))}
    >
      {schedule.title}
    </div>
  );
};

export default ScheduleBar;
