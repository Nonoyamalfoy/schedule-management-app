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
    padding: "0 16px",
    overflow: "scroll",
  }
}));

const DiaryTextContent = () => {
  const classes = useStyles();
  const selector = useSelector((state) =>  state);
  const diaries = getDiaries(selector);
  const date = getCurrentDate(selector);
  const currentDate = getDate(date).format("YYYYMMDD");
  const currentDiary = diaries.filter(d => d.date === currentDate);
  
  return (
    <div  className={classes.diaryTextContent}>
      {currentDiary.length > 0 && (
        <div>
          {returnCodeToBr(currentDiary[0].text)}
        </div>
      )}
    </div>
  )
}

export default DiaryTextContent;

