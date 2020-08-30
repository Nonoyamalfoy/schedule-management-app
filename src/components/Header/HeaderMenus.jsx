import React, {useEffect} from "react"
import IconButton from "@material-ui/core/IconButton";
import MenuIcoon from "@material-ui/icons/Menu";
import TodayIcon from '@material-ui/icons/Today';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import {makeStyles} from "@material-ui/styles";
import {Navigation} from "../Header/index";
import { getSchedules, getDiaries, getUserId, getToDoList } from "../../reducks/users/selectors";
import { useSelector, useDispatch } from "react-redux";
import { fetchSchedules, fetchDiaries, fetchToDoList } from "../../reducks/users/operations";
import { db } from "../../firebase/index";
import Badge from "@material-ui/core/Badge";
import {push} from "connected-react-router";


const useStyles = makeStyles({
  headerMenus:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconButton: {
    marginRight: "10px",
    display: "flex",
  },
  icon: {
    color: "white"
  }
})

const HeaderMenus = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  let schedules = getSchedules(selector);
  let diaries = getDiaries(selector);
  let ToDoList = getToDoList(selector) ? getToDoList(selector) : [];
  const notCompletedToDoList = ToDoList.filter(ToDo => ToDo.completed === false);


  useEffect(() => {
    const unsubscribe = db.collection("users").doc(uid).collection("schedules")
      .orderBy("updated_at", "asc")
      .onSnapshot(snapshots => {
        snapshots.docChanges().forEach( change => {
          const schedule = change.doc.data();
          const changeType = change.type;
          switch (changeType) {
            case "added": 
              schedules.push(schedule)
              break;
            case "modified":
              const index = schedules.findIndex(schedule => schedule.scheduleId === change.doc.id)
              schedules[index] = schedule
              break;
            case "removed":
              schedules = schedules.filter(schedule => schedule.scheduleId !== change.doc.id)
              break;
            default: 
              break;    
          }
        })
        dispatch(fetchSchedules(schedules))
      })
      return () =>{
        unsubscribe()
      }
  }, []);
  
  useEffect(() => {
    const unsubscribe = db.collection("users").doc(uid).collection("diaries")
      // .where("date", "<=", formatCurrentDate)
      // .orderBy("date", "desc")
      // .limit(6)
      .onSnapshot(snapshots => {
        snapshots.docChanges().forEach( change => {
          const diary = change.doc.data();
          const changeType = change.type;
          switch (changeType) {
            case "added": 
              diaries.push(diary)
              break;
            case "modified":
              const index = diaries.findIndex(diary => diary.diaryId === change.doc.id)
              diaries[index] = diary
              break;
            case "removed":
              diaries = diaries.filter(diary => diary.diaryId !== change.doc.id)
              break;
            default: 
              break;    
          }
        })
        dispatch(fetchDiaries(diaries))
      })
      return () => unsubscribe()
  }, []);

  useEffect(() => {
    const unsubscribe = db.collection("users").doc(uid).collection("ToDoList")
      // .where("date", "<=", formatCurrentDate)
      .orderBy("deadline", "asc")
      .onSnapshot(snapshots => {
        snapshots.docChanges().forEach( change => {
          const ToDo = change.doc.data();
          const changeType = change.type;
          switch (changeType) {
            case "added": 
              ToDoList.push(ToDo)
              break;
            case "modified":
              const index = ToDoList.findIndex(ToDo => ToDo.ToDoId === change.doc.id)
              ToDoList[index] = ToDo
              break;
            case "removed":
              ToDoList = ToDoList.filter(ToDo => ToDo.ToDoId !== change.doc.id)
              break;
            default: 
              break;    
          }
        })
        dispatch(fetchToDoList(ToDoList))
      })
      return () => unsubscribe()
  }, []);

  return(
    <div className={classes.headerMenus}>
      <Navigation/>
      <div className={classes.iconButton}>
        <IconButton onClick={() => dispatch(push("/todoList")) }>
          <Badge badgeContent={notCompletedToDoList.length} color="secondary">
            <CheckBoxIcon className={classes.icon} />
          </Badge>
        </IconButton>
        <IconButton onClick={(event) => props.handleDrawerToggle(event)}>
          <MenuIcoon className={classes.icon} />
        </IconButton>
      </div>
    </div>
  )
}

export default HeaderMenus;