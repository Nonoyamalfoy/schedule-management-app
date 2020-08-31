import React from "react";
import { CalendarBoard } from "../components/Calendar";
import { DiaryHeader, DiaryTextContent, AddDiaryDialog } from "../components/Diary";
import { makeStyles } from "@material-ui/styles";
import {
  ScheduleHeader,
  SelectedScheduleDialog,
  ScheduleList,
  AddScheduleDialog
} from "../components/Schedule";

const useStyles = makeStyles((theme) => ({
  schedules: {
    [theme.breakpoints.down(600)]: {
      display: "none",
    },
    overflow: "scroll",
    height: "calc(8vh - 40px)",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className="home">
      <div className="calendar">
        <div className="calendar__container">
          <CalendarBoard schedulesStyle={classes.schedules} />
        </div>
      </div>
      <div className="schedule">
        <div className="schedule__container">
          <ScheduleHeader />
          <ScheduleList />
          <AddScheduleDialog />
          <SelectedScheduleDialog />
        </div>
      </div>
      <div className="diary">
        <div className="diary__container">
          <DiaryHeader />
          <DiaryTextContent />
          <AddDiaryDialog />
        </div>
      </div>
    </div>
  );
};

export default Home;
