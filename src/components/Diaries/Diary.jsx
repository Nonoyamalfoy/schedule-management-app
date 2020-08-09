import React from "react";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import { openCurrentDiaryDialog } from "../../reducks/currentDiary/operations";
import dayjs from "dayjs";

const useStyles = makeStyles((theme) => ({
  listItem: {
    backgroundColor: "white",
    border: "1px solid #3f51b5",
    boxShadow: "0 3px 5px rgba(0,0,0,0.5)",
  },
  listItemText: {
    marginRight: 20,
  },
}));

const Diary = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const diaryText = props.diary.text;
  const displayText = diaryText.length > 120 ? diaryText.substr(0, 120) + "..." : diaryText;

  return (
    <>
      <div
        className={classes.listItem}
        onClick={(e) => dispatch(openCurrentDiaryDialog(props.diary, e))}
      >
        <ListItem button alignItems="flex-start">
          <ListItemText
            className={classes.listItemText}
            primary={dayjs(props.diary.date).format("YYYY/MM/DD")}
            secondary={<React.Fragment>{displayText}</React.Fragment>}
          />
        </ListItem>
      </div>
      <Divider />
      <div className="module-spacer--small" />
    </>
  );
};

export default Diary;
