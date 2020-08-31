import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Grid,
  Typography,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import {closeDialog} from "../../reducks/selectedDiary/operations"
import { getSelectedDiaryItem, getSelectedDiaryIsDialogOpen } from "../../reducks/selectedDiary/selectors";
import dayjs from "dayjs";
import {getUserId} from "../../reducks/users/selectors";
import {openAddDiaryDialog} from "../../reducks/addDiary/operations";
import { MoreButton, CloseButton } from "../Uikit";
import {removeDiary, returnCodeToBr} from "../../services/diary";

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
    backgroundColor: "#20295f",
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

const SelectedDiaryDialog = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const item = getSelectedDiaryItem(selector);
  const isDialogOpen = getSelectedDiaryIsDialogOpen(selector);
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
                <CloseButton onClick={() => dispatch(closeDialog())} />
            </DialogActions>

          </div>

          <DialogContent className={classes.dialogContent}>
                <div>
                  <Grid
                    container
                    spacing={1}
                    alignItems="center"
                    justify="space-between"
                    // style={spacer(0, 30)}
                  >
                    <Grid className={classes.diaryItem} item xs={10}>
                      <Typography >
                        {returnCodeToBr(item.text)}
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
          </DialogContent>
        </>
      )}
    </Dialog>
  )
}

export default SelectedDiaryDialog;