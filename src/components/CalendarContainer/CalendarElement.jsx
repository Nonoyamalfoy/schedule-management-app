import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Typography, ListItem} from "@material-ui/core";
import dayjs from "dayjs";
import { isSameMonth, isFirstDay, isSameDay, getMonth, getDate } from "../../services/calendar";
import {Schedule} from "./index";


const useStyles = makeStyles((theme) => ({
  element: {
    display: "inline-block",
    borderRight: "1px solid #ccc",
    borderBottom: "1px solid #ccc",
    padding: 0,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.04)"
    }
  },
  date: {
    padding: "3.5px 0",
    fontSize: "13px"
  },
  today: {
    display: "inline-block",
    lignHeight: "28px",
    width: "28px",
    backgroundColor: "#ccc",
    borderRadius: "50%"
  },
  currentDate: {
    display: "inline-block",
    lignHeight: "28px",
    width: "28px",
    backgroundColor: "#3f51b5",
    color: "#fff",
    borderRadius: "50%"
  },
}))

const CalendarElement = (props) => {
  const classes = useStyles();
  // {year: 2020, month: 8, date: 4}形式
  const CD = props.currentDate;
  // dayjsインスタンスのcurrentday
  const currentDate = getDate(CD);
  const today = dayjs();
  const format = isFirstDay(props.date) ? "M/D" : "D";
  const currentMonth = getMonth(CD);
  const isCurrentMonth = isSameMonth(props.date, currentMonth) ? "textPrimary" : "textSecondary";
  
  let date = "";
  if(isSameDay(props.date, currentDate)) {
    date = classes.currentDate
  } else if(isSameDay(props.date, today)) {
    date = classes.today
  } else {
    date = ""
  }
  
  return(
    <ListItem button className={classes.element} >
      <Typography 
        className={classes.date}
        color={isCurrentMonth}
        align="center"
        variant="caption"
        component="div"
      >
        <span className={date}>
          {props.date.format(format)}
        </span>
      </Typography>
      <div className={props.schedulesStyle} >
        {props.schedules.map(schedule => (
          <Schedule key={schedule.scheduleId} schedule={schedule}/>
        ))}
      </div>
    </ListItem >
  )
}

export default CalendarElement;