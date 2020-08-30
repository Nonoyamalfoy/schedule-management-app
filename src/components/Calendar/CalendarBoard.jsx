import React from "react";
import { GridList, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CalendarElement from "./CalendarElement";
import { createCalendar } from "../../services/calendar";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentDate } from "../../reducks/calendar/selectors";
import { setSchedules } from "../../services/schedule";
import { getSchedules } from "../../reducks/users/selectors";
import { setDate } from "../../reducks/calendar/oeprations";


const useStyles = makeStyles({
  grid: {
    borderLeft: "1px solid #ccc",
    borderTop: "1px solid #ccc",
  },
  days: {
    borderRight: "1px solid #ccc",
    paddingTop: "5px",
    color: "black",
  },
});

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const CalendarBoard = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const currentDate = getCurrentDate(selector);
  const schedules = getSchedules(selector);
  const calendar = setSchedules(createCalendar(currentDate), schedules);

  return (
    <div className={classes.container}>
      <GridList
        className={classes.grid}
        cols={7}
        spacing={0}
        cellHeight={"auto"}
      >
        {days.map((d) => (
          <li key={d}>
            <Typography
              className={classes.days}
              align="center"
              variant="caption"
              component="div"
            >
              {d}
            </Typography>
          </li>
        ))}
        {calendar.map(({ date, schedules }) => (
          <li 
            key={date.toISOString()} 
            onClick={() => {
              dispatch(setDate(date))
              {props.onClick && props.onClick(schedules)}
            }}
          >
            <CalendarElement
              schedulesStyle={props.schedulesStyle}
              schedules={schedules}
              date={date}
              schedules={schedules}
            />
          </li>
        ))}
      </GridList>
    </div>
  );
};

export default CalendarBoard;
