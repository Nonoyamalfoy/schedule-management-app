import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { DiaryTextContent } from "./index";
import AddDiaryDialog from "./AddDiaryDialog";
import { openAddDiaryDialog } from "../../reducks/addDiary/operations";
import { useDispatch, useSelector } from "react-redux";
import { getDiaries, getUserId } from "../../reducks/users/selectors";
import { getCurrentDate } from "../../reducks/calendar/selectors";
import { getDate } from "../../services/calendar";
import { db } from "../../firebase/index";
import { fetchDiaries } from "../../reducks/users/operations";
import { MoreButton } from "../Uikit";
import {removeDiary} from "../../services/diary";
import {IconButton} from "@material-ui/core";
import CreateIcon from '@material-ui/icons/Create';



const useStyles = makeStyles({
  icon: {
    color: "white"
  },
});

const DiaryContainer = () => {
  const classes = useStyles();
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const diaries = getDiaries(selector);
  const date = getCurrentDate(selector);
  const currentDate = getDate(date).format("YYYYMMDD");
  const currentDiary = diaries.filter((d) => d.date === currentDate);
  const currentDiaryText = currentDiary.length > 0 ? currentDiary[0].text : "";
  const currentDiaryId = currentDiary.length > 0 ? currentDiary[0].diaryId : "";
  const uid = getUserId(selector);

  useEffect(() => {
    const unsubscribe = db.collection("users").doc(uid).collection("diaries")
      .onSnapshot(() => {
        dispatch(fetchDiaries())
      })
      return () => unsubscribe()
  }, []);

  return (
    <div>
      <div className="container__header">
        <h2 >Diary</h2>
        {currentDiary[0] && (
          <MoreButton
            size="small"
            className={classes.icon}
            onClickEdit={() => {
              dispatch(openAddDiaryDialog(currentDate, currentDiaryId, currentDiaryText));
            }}
            onClickRemove={() => {
              removeDiary(uid, currentDiaryId);
            }}
          />
        )}
        {!currentDiary[0] && (
          <IconButton className={classes.icon}  size="small" onClick={() => dispatch(openAddDiaryDialog(currentDate))}>
            <CreateIcon />
          </IconButton>
        )}
      </div>
      <DiaryTextContent />
      <div className="dialog">
        <AddDiaryDialog />
      </div>
    </div>
  );
};

export default DiaryContainer;
