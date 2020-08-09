import React from "react";
import {CalendarContainer} from "../components/CalendarContainer";
import {DiaryContainer} from "../components/DiaryContainer";
import {makeStyles} from "@material-ui/styles";
import {SchedulesContainer} from "../components/ScheduleContainer";

const useStyles = makeStyles((theme) => ({
  schedules: {
    [theme.breakpoints.down(600)]: {
      display: "none"
    },
    overflow: "scroll",
    height: "calc(8vh - 40px)"
  }
}))

const Home =  () => {
  const classes = useStyles()
  return (
    <div className="home">
        <div className="calendar">
          <div className="calendar__container">
            <CalendarContainer schedulesStyle={classes.schedules} />
          </div>
        </div>
        <div className="todo">
          <div className="todo__container">
            <SchedulesContainer />
          </div>
        </div>
        <div className="diary">
          <div className="diary__container"> 
            <DiaryContainer />
          </div>
        </div>
    </div>
  )
}

export default Home;