import React from "react";
import CreateIcon from '@material-ui/icons/Create';
import { IconButton } from "@material-ui/core";
import {getDate} from "../../services/calendar";
import {getCurrentDate} from "../../reducks/calendar/selectors";
import {openAddScheduleDialog} from "../../reducks/addSchedule/operation";
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from "@material-ui/styles";
import {CreateButton} from "../Uikit"

const useStyles = makeStyles({
  icon :{
    color: "white"
  }
})

const ScheduleHeader = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state)
  const currentDate = getCurrentDate(selector);
  const dayjsCurrentDate = getDate(currentDate);

  return (
    <div className="container__header">
        <h2 >SCHEDULES</h2>
        <CreateButton
            className={classes.icon}
            size="small"
            onClick={() => dispatch(openAddScheduleDialog(dayjsCurrentDate, "", "", "", "", "default"))}
          />
    </div>
  );

}

export default ScheduleHeader;