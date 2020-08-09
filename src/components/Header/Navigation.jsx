import React from "react";
import { IconButton, Toolbar} from "@material-ui/core";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import { useDispatch, useSelector} from "react-redux";
import {  setPreviousMonth, setNextMonth } from "../../reducks/calendar/oeprations";
import {DatePicker} from "@material-ui/pickers";
import { getDate } from "../../services/calendar";
import { getCurrentDate } from "../../reducks/calendar/selectors";
import {setDate} from "../../reducks/calendar/oeprations";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  toolBar: {
    padding: 0
  },
  datePicker: {
    width: 110,
    transform: "scale(0.9)",
    cursor: "pointer",
  },
  arrowButton: {
    color: "white"
  }
})

const Navigation = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const date = getCurrentDate(selector);
  const dayjsDate = getDate(date);

  return(
      <Toolbar className={classes.toolBar}>
        <IconButton onClick={() => dispatch(setPreviousMonth())}>
          <ArrowBackIos className={classes.arrowButton} />
        </IconButton>
        <DatePicker
          InputProps={{style: {fontSize: 20, color: "white"}, disableUnderline: true}}
          InputLabelProps={{style: {fontSize: 20, color: "white", }}}
          className={classes.datePicker}
          value={dayjsDate}
          onChange={(e) => dispatch(setDate(e))}
          variant="inline"
          format="YYYY/MM/DD"
          animateYearScrolling
          disableToolbar
        />
        <IconButton onClick={() => dispatch(setNextMonth())}>
          <ArrowForwardIos className={classes.arrowButton}/>
        </IconButton>
      </Toolbar>
  )
};

export default Navigation;