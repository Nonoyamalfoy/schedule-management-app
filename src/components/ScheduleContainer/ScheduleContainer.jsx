import React from "react";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getSchedules } from "../../reducks/users/selectors";
import {TodaySchedule, AddScheduleDialog} from "./index";
import {getCurrentDate} from "../../reducks/calendar/selectors";
import {getDate} from "../../services/calendar";
import CreateIcon from '@material-ui/icons/Create';
import { IconButton } from "@material-ui/core";
import {openAddScheduleDialog} from "../../reducks/addSchedule/operation";

const useStyles = makeStyles((theme) => ({
  scheduleList: {
    [theme.breakpoints.up(600)]: {
      position: "absolute",
      bottom: 0,
      top: 40,
    },
    width: "100%",
    // margin : "0 auto",
    // boxSizing: "border-box",
    // padding: 0,
    overflow: "scroll",
  },
  icon: {
    color: "white",
  },
}))

const SchedulesContainer = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const selector = useSelector((state) => state);
  const schedules = getSchedules(selector);
  const date = getCurrentDate(selector);
  const currentDate = getDate(date)
  const todaysSchedules = schedules ? schedules.filter(s => s.date === currentDate.format("YYYYMMDD")): ""

  return(
    <>
      <div className="container__header">
        <h2 >Schedules</h2>
        <IconButton className={classes.icon}  size="small" onClick={() => dispatch(openAddScheduleDialog(currentDate, "", "", "", "", "default"))}>
            <CreateIcon />
        </IconButton>
      </div>

      <List className={classes.scheduleList} >
        {todaysSchedules.length > 0 && (
          todaysSchedules.map(todaysSchedule => <TodaySchedule todaysSchedule={todaysSchedule} key={todaysSchedule.scheduleId} />)
        )}
      </List>
      <div className="dialog" >
        <AddScheduleDialog />
      </div>
    </>
  )
}

export default SchedulesContainer;
