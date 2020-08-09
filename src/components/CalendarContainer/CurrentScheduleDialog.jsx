import React from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  DialogActions,
  Grid,
  Typography
} from "@material-ui/core";
import {Close, LocationOnOutlined, NotesOutlined } from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import {closeDialog} from "../../reducks/currentSchedule/operations"
import { getCurrentScheduleItem, getCurrentScheduleIsDialogOpen } from "../../reducks/currentSchedule/selectors";
import dayjs from "dayjs";
import {getUserId} from "../../reducks/users/selectors";
import {openAddScheduleDialog} from "../../reducks/addSchedule/operation";
import { MoreButton } from "../Uikit";
import {setScheduleColor} from "../../services/schedule";
import {removeSchedule} from "../../services/schedule";


const spacer = (top, bottom) => ({
  margin: `${top}px 0 ${bottom}px 0`
});

const useStyles = makeStyles({
  box: {
    width: 16,
    height: 16,
    display: "block",
    marginLeft: 6,
    borderRadius: 4
  },
  dialogHeader: {
    display: "flex",
    justifyContent: "flex-end",
    minHeight: 48,
    backgroundColor: "#3f51b5",
    color: "white",
    alignItems:"center"
  },
  icon: {
    color: "white"
  }
})

const CurrentScheduleDialog = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const item = getCurrentScheduleItem(selector);
  const isDialogOpen = getCurrentScheduleIsDialogOpen(selector);
  const uid = getUserId(selector);
  const scheduleColor = item ? setScheduleColor(item.color) : ""

  return (
    <Dialog open={isDialogOpen} onClose={() => dispatch(closeDialog())} maxWidth="xs" fullWidth>
      <div className={classes.dialogHeader}>
        <DialogActions>
          <MoreButton
            size="small"
            className={classes.icon}
            onClickEdit={() => {
              dispatch(openAddScheduleDialog(dayjs(item.date), item.scheduleId, item.title, item.description, item.location, item.color))
              dispatch(closeDialog())
            }}
            onClickRemove={() => {
              removeSchedule(uid, item.scheduleId)
              dispatch(closeDialog())
            }}
          />
          <IconButton onClick={() => dispatch(closeDialog(closeDialog()))} size="small">
            <Close className={classes.icon} />
          </IconButton>
        </DialogActions>

      </div>

      <DialogContent>
        {item && (
          <>
            <div>
              <Grid
                container
                spacing={1}
                alignItems="center"
                justify="space-between"
                style={spacer(0, 30)}
              >
                <Grid item>
                  <span style={{backgroundColor: scheduleColor}} className={classes.box}></span>
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography color="textSecondary">
                    {dayjs(item.date).format("YYYY/MM/DD")}
                  </Typography>
                </Grid>
              </Grid>
            </div>

            {item.location && (
              <Grid
                container
                spacing={1}
                alignItems="center"
                justify="space-between"
                style={spacer(0, 4)}
              >
                <Grid item>
                  <LocationOnOutlined />
                </Grid>
                <Grid item xs={10}>
                  <Typography>{item.location}</Typography>
                </Grid>
              </Grid>
            )}
            {item.description && (
              <Grid
                container
                spacing={1}
                alignItems="center"
                justify="space-between"
                style={spacer(0, 4)}
              >
                <Grid item>
                  <NotesOutlined />
                </Grid>
                <Grid item xs={10}>
                  <Typography>{item.description}</Typography>
                </Grid>
              </Grid>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default CurrentScheduleDialog;