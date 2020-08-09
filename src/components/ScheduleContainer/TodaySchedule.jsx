import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import { getUserId } from "../../reducks/users/selectors";
import { makeStyles } from "@material-ui/styles";
import { removeSchedule, toggleCompleted } from "../../services/schedule";
import MoreVertButton from "../Uikit/MoreButton";
import { openAddScheduleDialog } from "../../reducks/addSchedule/operation";
import { openCurrentScheduleDialog } from "../../reducks/currentSchedule/operations";
import dayjs from "dayjs";

const useStyles = makeStyles({
  schedule: {
    padding: "0 10px 0 18px",
    borderBottom: "1px solid #ccc",
  },
  checkBox: {
    padding: 12,
  },
  text: {
    boxSizing: "border-box",
    paddingTop: "8px",
    paddingLeft: "20px",
    margin: 0,
    height: 60,
    verticalAlign: "center",
  },
});

const TodaySchedule = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  const todaysSchedule = props.todaysSchedule;
  const date = todaysSchedule.date;
  const scheduleId = todaysSchedule.scheduleId;
  const completed = todaysSchedule.completed;
  const title = todaysSchedule.title;
  const description = todaysSchedule.description;
  const location = todaysSchedule.location;
  const color = todaysSchedule.color;

  return (
    <ListItem className={classes.schedule} role={undefined} dense button>
      <Checkbox
        className={classes.checkBox}
        size="medium"
        onClick={() => toggleCompleted(uid, scheduleId, completed)}
        color="primary"
        edge="start"
        checked={completed}
      />
      <ListItemText
        className={classes.text}
        onClick={(e) => dispatch(openCurrentScheduleDialog(todaysSchedule, e))}
        primary={todaysSchedule.title}
        secondary={todaysSchedule.description}
      />
      <MoreVertButton
        onClickEdit={() => {
          dispatch(
            openAddScheduleDialog(
              dayjs(date),
              scheduleId,
              title,
              description,
              location,
              color
            )
          );
        }}
        onClickRemove={() => removeSchedule(uid, scheduleId)}
      />
    </ListItem>
  );
};

export default TodaySchedule;
