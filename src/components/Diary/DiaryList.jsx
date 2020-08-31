import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import { openSelectedDiaryDialog } from "../../reducks/selectedDiary/operations";
import dayjs from "dayjs";

const useStyles = makeStyles((theme) => ({
  diaryListItem: {
    backgroundColor: "white",
    border: "1px solid #3f51b5",
    boxShadow: "0 3px 5px rgba(0,0,0,0.5)",
    width: "90%",
    margin: "0 auto"
  },
  listItemText: {
    marginRight: 20,
  },
}));

const DiaryList = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const diaryText = props.diary.text;
  const displayText = diaryText.length > 120 ? diaryText.substr(0, 120) + "..." : diaryText;

  return (
    <>
      <div
        className={classes.diaryListItem}
        onClick={(e) => dispatch(openSelectedDiaryDialog(props.diary, e))}
      >
        <ListItem button alignItems="flex-start">
          <ListItemText
            className={classes.listItemText}
            primary={dayjs(props.diary.date).format("YYYY/MM/DD")}
            secondary={displayText}
          />
        </ListItem>
      </div>
      {/* <Divider /> */}
      <div className="module-spacer--extra-small" />
    </>
  );
};

export default DiaryList;
