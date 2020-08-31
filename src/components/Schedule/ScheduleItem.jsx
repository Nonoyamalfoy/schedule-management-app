import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useSelector, useDispatch } from "react-redux";
import { getUserId } from "../../reducks/users/selectors";
import { makeStyles } from "@material-ui/styles";
import { removeSchedule } from "../../services/schedule";
import MoreVertButton from "../Uikit/MoreButton";
import { openAddScheduleDialog } from "../../reducks/addSchedule/operation";
import { openSelectedScheduleDialog } from "../../reducks/selectedSchedule/operations";
import dayjs from "dayjs";
import { ListItemSecondaryAction, Grid } from "@material-ui/core";
import { setScheduleColor } from "../../services/schedule";

const useStyles = makeStyles({
  schedule: {
    padding: "0 10px 0 18px",
    width: "95%",
    margin: "8px auto",
    border: "1px solid #20295f",
    boxShadow: "0 3px 5px rgba(0,0,0,0.5)",
    minHeight: 52,
    // borderRadius: 5
  },
  box: {
    width: 16,
    height: 16,
    display: "block",
    marginLeft: 6,
    borderRadius: 4,
  },
  text: {
    boxSizing: "border-box",
    paddingLeft: "20px",
    width: "100%",
    wordWrap: "break-word",
    marginRight: 40,
  },
});

const ScheduleItem = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  const schedule = props.schedule;
  const date = schedule.date;
  const scheduleId = schedule.scheduleId;
  const title = schedule.title;
  const description = schedule.description;
  const location = schedule.location;
  const scheduleColor = schedule ? setScheduleColor(schedule.color) : "";
  const color = schedule.color;

  return (
    <ListItem
      onClick={(e) => dispatch(openSelectedScheduleDialog(schedule, e))}
      className={classes.schedule}
      role={undefined}
      dense
      button
    >
      <Grid item>
        <span
          style={{ backgroundColor: scheduleColor }}
          className={classes.box}
        ></span>
      </Grid>
      <ListItemText
        className={classes.text}
        primary={title}
        secondary={description}
      />
      <ListItemSecondaryAction>
        <MoreVertButton
          onClickEdit={() => {
            dispatch(
              openAddScheduleDialog(
                dayjs(date),
                color,
                scheduleId,
                title,
                description,
                location
              )
            );
          }}
          onClickRemove={() => removeSchedule(uid, scheduleId)}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ScheduleItem;
