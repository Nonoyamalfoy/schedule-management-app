import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { closeDialog } from "../../reducks/selectedDateSchedules/operations";
import { getSelectedDateSchedulesIsDialogOpen } from "../../reducks/selectedDateSchedules/selectors";
import { CloseButton, CreateButton } from "../Uikit";
import { ScheduleItem } from "../Schedule";
import List from "@material-ui/core/List";
import { getCurrentDate } from "../../reducks/calendar/selectors";
import { openAddScheduleDialog } from "../../reducks/addSchedule/operation";
import { getSchedules } from "../../reducks/users/selectors";

const useStyles = makeStyles({
  box: {
    width: 16,
    height: 16,
    display: "block",
    marginLeft: 6,
    borderRadius: 4,
  },
  dialogHeader: {
    display: "flex",
    justifyContent: "space-between",
    minHeight: 48,
    backgroundColor: "#20295f",
    color: "white",
    alignItems: "center",
  },
  diaryDate: {
    position: "relative",
    paddingLeft: "24px",
  },
  dialogContent: {
    minHeight: 100,
    padding: 0,
  },
  icon: {
    color: "white",
  },
});

const SelectedScheduleDialog = () => {
  const classes = useStyles();
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const currentDate = getCurrentDate(selector);
  const formatCurrentDate = currentDate.format("YYYY/MM/DD");
  const schedules = getSchedules(selector);
  const currentDateSchedules = schedules
    ? schedules.filter((s) => s.date === currentDate.format("YYYYMMDD"))
    : "";
  const isDialogOpen = getSelectedDateSchedulesIsDialogOpen(selector);

  return (
    <Dialog
      open={isDialogOpen}
      onClose={() => dispatch(closeDialog())}
      maxWidth="xs"
      fullWidth
    >
      <div className={classes.dialogHeader}>
        <Typography className={classes.diaryDate} variant="h5" component="h2">
          {formatCurrentDate}
        </Typography>
        <DialogActions>
          <CreateButton
            className={classes.icon}
            size="small"
            onClick={() => {
              dispatch(
                openAddScheduleDialog(currentDate, "default", "", "", "", "")
              );
            }}
          />
          <CloseButton onClick={() => dispatch(closeDialog())} />
        </DialogActions>
      </div>
      <DialogContent className={classes.dialogContent}>
        {currentDateSchedules.length > 0 ? (
          <List>
            {currentDateSchedules.map((schedule) => (
              <ScheduleItem schedule={schedule} key={schedule.scheduleId} />
            ))}
          </List>
        ) : (
          <p className="empty-item">There are no schedules yet.</p>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SelectedScheduleDialog;
