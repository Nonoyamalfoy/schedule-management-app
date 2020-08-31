import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import dayjs from "dayjs";
import { openAddToDoDialog } from "../../reducks/addToDo/operation";
import Checkbox from "@material-ui/core/Checkbox";
import MoreVertButton from "../Uikit/MoreButton";
import { getUserId } from "../../reducks/users/selectors";
import { toggleCompleted, removeToDo } from "../../services/ToDo";
import { ListItemSecondaryAction } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  ToDoList: {
    backgroundColor: "white",
    border: "1px solid #20295f",
    boxShadow: "0 3px 5px rgba(0,0,0,0.5)",
    width: "90%",
    margin: "0 auto",
  },
  ToDoListItem: {
    minHeight: 70,
    padding: "0 10px 0 18px",
    width: "100%",
    borderBottom: "1px solid #ccc",
  },
  checkBox: {
    padding: 12,
  },
  doneText: {
    textDecoration: "line-through",
    color: "rgba(0, 0, 0, 0.54)",
    wordWrap: "break-word",
    marginRight: 48
  },
  text: {
    wordWrap: "break-word",
    marginRight: 48
  }
}));

const ToDoItem = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  const ToDo = props.ToDo;
  const Text = ToDo.text;
  const ToDoId = ToDo.ToDoId;
  const completed = ToDo.completed;
  const deadline = ToDo.deadline;
  const screenDeadline = deadline
    ? dayjs(deadline).format("YYYY/MM/DD HH:mm")
    : "";

  return (
    <>
      <div className={classes.ToDoList}>
        <ListItem
          className={classes.ToDoListItem}
          role={undefined}
          dense
          button
          onClick={() => toggleCompleted(uid, ToDoId, completed)}
        >
          <ListItemIcon>
            <Checkbox
              className={classes.checkBox}
              size="medium"
              color="primary"
              edge="start"
              checked={completed}
            />
          </ListItemIcon>
          <ListItemText
            className={completed ? classes.doneText : classes.text}
            primary={Text}
            secondary={screenDeadline}
          />
          <ListItemSecondaryAction>
            <MoreVertButton
              onClickEdit={() => {
                dispatch(
                  openAddToDoDialog(
                    ToDoId,
                    Text,
                    deadline
                  )
                );
              }}
              onClickRemove={() => removeToDo(uid, ToDoId)}
            />
          </ListItemSecondaryAction>
        </ListItem>
      </div>
      <div className="module-spacer--extra-small" />
    </>
  );
};

export default ToDoItem;
