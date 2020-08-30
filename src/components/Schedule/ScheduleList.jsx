import React from "react";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { getSchedules } from "../../reducks/users/selectors";
import { ScheduleItem } from "./index";
import { getCurrentDate } from "../../reducks/calendar/selectors";
import { getDate } from "../../services/calendar";

const useStyles = makeStyles((theme) => ({
  scheduleList: {
    [theme.breakpoints.up(600)]: {
      position: "absolute",
      bottom: 0,
      top: 40,
      left: "50%",
      transform: " translateX(-50%)",
    },
    width: "100%",
    maxWidth: 800,
    overflow: "scroll",
    margin: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  icon: {
    color: "white",
  },
}));

const SchedulesList = () => {
  const classes = useStyles();
  const selector = useSelector((state) => state);
  const schedules = getSchedules(selector);
  const currentDate = getCurrentDate(selector);
  const dayjsCurrentDate = getDate(currentDate);
  const currentDateSchedules = schedules ? schedules.filter((s) => s.date === dayjsCurrentDate.format("YYYYMMDD"))
    : "";

  return (
    <>
        {currentDateSchedules.length > 0 ? (
      <List className={classes.scheduleList}>
          {currentDateSchedules.map((todaySchedule) => (
            <ScheduleItem
              schedule={todaySchedule}
              key={todaySchedule.scheduleId}
            />
          ))}
          </List>
        ) : (
          <p className="empty-item">
            There are no schedules for today.
          </p>
        )}
          
    </>
  );
};

export default SchedulesList;
