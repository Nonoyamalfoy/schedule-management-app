import React from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  DialogActions,
  Grid,
  Typography,
} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import {closeDialog} from "../../reducks/currentDiary/operations"
import { getCurrentDiaryItem, getCurrentDiaryIsDialogOpen } from "../../reducks/currentDiary/selectors";
import dayjs from "dayjs";
import {getUserId} from "../../reducks/users/selectors";
import {openAddDiaryDialog} from "../../reducks/addDiary/operations";
import { MoreButton } from "../Uikit";
import {removeDiary, returnCodeToBr} from "../../services/diary";




const spacer = (top, bottom) => ({
  margin: `${top}px 0 ${bottom}px 0`
});

const useStyles = makeStyles((theme) => ({
  dialog: {
    [theme.breakpoints.up(600)]:{
      width: "calc(100% - 64px)",
      maxWidth: "600px",
      margin: "100px auto",
      height: "auto"
    }
  },
  dialogHeader: {
    display: "flex",
    justifyContent: "space-between",
    minHeight: 48,
    backgroundColor: "#3f51b5",
    color: "white",
    alignItems:"center"
  },
  diaryDate: {
    paddingLeft: "24px",
  },
  diaryItem: {
    flexBasis: "100%",
    maxWidth: "100%",
  },
  icon: {
    color: "white"
  }
}));

const CurrentDiaryDialog = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const item = getCurrentDiaryItem(selector);
  const isDialogOpen = getCurrentDiaryIsDialogOpen(selector);
  const uid = getUserId(selector);
  
  return (
    <Dialog  fullScreen className={classes.dialog}  open={isDialogOpen} onClose={() => dispatch(closeDialog())} fullWidth>
      {item && (
        <>
          <div className={classes.dialogHeader}>
            <Typography className={classes.diaryDate} variant="h5" component="h2">
              {dayjs(item.date).format("YYYY/MM/DD")}
            </Typography>
            <DialogActions>
                <MoreButton
                  size="small"
                  className={classes.icon}
                  onClickEdit={() => {
                    dispatch(openAddDiaryDialog(item.date, item.diaryId, item.text ))
                    dispatch(closeDialog())
                  }}
                  onClickRemove={() => {
                    removeDiary(uid, item.diaryId)
                    dispatch(closeDialog())
                  }}
                />
                <IconButton size="small" onClick={() => dispatch(closeDialog(closeDialog()))} >
                  <Close className={classes.icon} />
                </IconButton>
            </DialogActions>

          </div>

          <DialogContent className={classes.dialogContent}>
              <>
                <div>
                  <Grid
                    container
                    spacing={1}
                    alignItems="center"
                    justify="space-between"
                    style={spacer(0, 30)}
                  >
                    <Grid className={classes.diaryItem} item xs={10}>
                      <Typography color="textSecondary">
                        {returnCodeToBr(item.text)}
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
                
              </>
          </DialogContent>
        </>
      )}
    </Dialog>
  )
}

export default CurrentDiaryDialog;