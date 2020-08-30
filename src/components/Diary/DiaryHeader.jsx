import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { MoreButton, CreateButton } from "../Uikit";
import {removeDiary} from "../../services/diary";
import { openAddDiaryDialog } from "../../reducks/addDiary/operations";
import {makeStyles} from "@material-ui/styles";
import { getDate } from "../../services/calendar";
import { getCurrentDate } from "../../reducks/calendar/selectors";
import { getDiaries, getUserId } from "../../reducks/users/selectors";

const useStyles = makeStyles({
  icon: {
    color: "white"
  },
});

const DiaryHeader = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const currentDate = getCurrentDate(selector);
  const formatCurrentDate = getDate(currentDate).format("YYYYMMDD");
  const diaries = getDiaries(selector);
  const currentDiary = diaries.find((d) => d.date === formatCurrentDate);
  const currentDiaryText = currentDiary ? currentDiary.text : "";
  const currentDiaryId = currentDiary ? currentDiary.diaryId : "";
  const uid = getUserId(selector);

  return(
    <div className="container__header">
        <h2 >DIARY</h2>
        {currentDiary ? (
          <MoreButton
            size="small"
            className={classes.icon}
            onClickEdit={() => {
              dispatch(openAddDiaryDialog(formatCurrentDate, currentDiaryId, currentDiaryText));
            }}
            onClickRemove={() => {
              removeDiary(uid, currentDiaryId);
            }}
          />
        ) : (
          <CreateButton
            className={classes.icon}
            size="small"
            onClick={() => dispatch(openAddDiaryDialog(formatCurrentDate))}
          />
        )}
    </div>
  )
}

export default DiaryHeader;