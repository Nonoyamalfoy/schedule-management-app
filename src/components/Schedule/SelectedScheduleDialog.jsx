import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Grid,
  Typography
} from "@material-ui/core";
import {LocationOnOutlined, NotesOutlined } from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import {closeDialog} from "../../reducks/selectedSchedule/operations"
import { getSelectedScheduleItem, getSelectedScheduleIsDialogOpen } from "../../reducks/selectedSchedule/selectors";
import dayjs from "dayjs";
import {getUserId} from "../../reducks/users/selectors";
import {openAddScheduleDialog} from "../../reducks/addSchedule/operation";
import { MoreButton, CloseButton } from "../Uikit";
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
  icon: {
    color: "white"
  },
  title: {
    wordWrap: "break-word",
    
  }
});

const SelectedScheduleDialog = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const item = getSelectedScheduleItem(selector);
  const isDialogOpen = getSelectedScheduleIsDialogOpen(selector);
  const uid = getUserId(selector);
  const scheduleColor = item ? setScheduleColor(item.color) : ""

  return (
    <Dialog open={isDialogOpen} onClose={() => dispatch(closeDialog())} maxWidth="xs" fullWidth>
      <div className="dialogHeader">
        <DialogActions>
          <MoreButton
            size="small"
            className={classes.icon}
            onClickEdit={() => {
              dispatch(openAddScheduleDialog(dayjs(item.date), item.color, item.scheduleId, item.title, item.description, item.location))
              dispatch(closeDialog())
            }}
            onClickRemove={() => {
              removeSchedule(uid, item.scheduleId)
              dispatch(closeDialog())
            }}
          />
          <CloseButton onClick={() => dispatch(closeDialog())}/>
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
                  <Typography variant="h5" component="h2" className={classes.title}>
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

export default SelectedScheduleDialog;