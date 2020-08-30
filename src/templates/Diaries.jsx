import React from "react";
import {
  DiaryList,
  CurrentDiaryDialog,
  AddDiaryDialog,
} from "../components/Diary";
import List from "@material-ui/core/List";
import { useSelector, useDispatch } from "react-redux";
import { getDiaries } from "../reducks/users/selectors";
import { getCurrentDate } from "../reducks/calendar/selectors";
import { openAddDiaryDialog } from "../reducks/addDiary/operations";
import { CreateButton } from "../components/Uikit";

const Diaries = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const diaries = getDiaries(selector);
  const currentDate = getCurrentDate(selector);
  const formatCurrentDate = currentDate.format("YYYYMMDD");
  const screenDiaries = diaries
    .filter((diary) => diary.date <= formatCurrentDate)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 6);
  const currentDateDiary = diaries.filter(
    (diary) => diary.date === formatCurrentDate
  );

  return (
    <div className="p-diaries">
      {!currentDateDiary.length > 0 && (
        <CreateButton onClick={() => dispatch(openAddDiaryDialog())} />
      )}
      <div className="p-diaries__container">
        {screenDiaries.length > 0 ? (
          <List>
            {screenDiaries.map(diary => (
              <DiaryList diary={diary} key={diary.diaryId} />
            ))}
          </List>
        ) : (
          <h2 className="empty-item">There is no diary before currentDate.</h2>
        )}
        <AddDiaryDialog />
        <CurrentDiaryDialog />
      </div>
    </div>
  );
};

export default Diaries;
