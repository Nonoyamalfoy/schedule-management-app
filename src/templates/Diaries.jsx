import React, {useEffect} from 'react';
import {Diary} from "../components/Diaries";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { useDispatch, useSelector } from 'react-redux';
import {getDiaries} from "../reducks/users/selectors";
import { fetchDiaries } from '../reducks/users/operations';
import {AddDiaryDialog} from "../components/DiaryContainer";
import { getCurrentDate } from '../reducks/calendar/selectors';
import {db} from "../firebase/index";
import {getUserId} from "../reducks/users/selectors";
import {CurrentDiaryDialog} from "../components/Diaries"

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
    width: '90%',
    maxWidth: '1000px',
  }
}));

const Diaries = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state)

  const diaries = getDiaries(selector);
  const date = getCurrentDate(selector);

  const uid = getUserId(selector);

  useEffect(() => {
    console.log(date);
    dispatch(fetchDiaries())
  }, [date]);

  useEffect(() => {
    const unsubscribe = db.collection("users").doc(uid).collection("diaries")
      .onSnapshot(() => {
        console.log(uid);
        dispatch(fetchDiaries())
      });
      return () => unsubscribe()
  }, []);


  return (
    <div className="p-diaries">
      <List  className={classes.root}>
        {diaries.length > 0 && (
            diaries.map(diary => <Diary diary={diary} key={diary.diaryId} />)
          )}
      </List>
      <div className="dialog">
        <AddDiaryDialog />
      </div>
      <div>
        <CurrentDiaryDialog/>
      </div>
    </div>
  );
}

export default Diaries;