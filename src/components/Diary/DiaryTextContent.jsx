import React from "react";
import {useSelector} from "react-redux";
import { getDiaries} from "../../reducks/users/selectors";
import {getDate} from "../../services/calendar";
import {getCurrentDate} from "../../reducks/calendar/selectors";
import { returnCodeToBr} from "../../services/diary";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles( (theme) => ({
  diaryTextContent :{
    [theme.breakpoints.up(600)]: {
      position: "absolute",
      bottom: 0,
      top: 40,
    },
    width: "100%",
    boxSizing: "border-box",
    padding: "16px 16px",
    overflow: "scroll",
  }
}));

const DiaryTextContent = () => {
  const classes = useStyles();
  const selector = useSelector((state) =>  state);
  const diaries = getDiaries(selector);
  const currentDate = getCurrentDate(selector);
  const formatCurrentDate = getDate(currentDate).format("YYYYMMDD");
  const currentDiary = diaries.find(d => d.date === formatCurrentDate);
  
  return (
    <div className={classes.diaryTextContent}>
      {currentDiary ? (
        <div>
          {returnCodeToBr(currentDiary.text)}
        </div>
      ) : (
        <p className="empty-item">
          There is no diary for today.
        </p>
      )}
    </div>
  )
}

export default DiaryTextContent;

