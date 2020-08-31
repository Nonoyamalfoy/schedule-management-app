import React from "react";
import { Dialog, DialogActions, DialogContent } from "@material-ui/core";
import { addDiary } from "../../reducks/users/operations";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddDiary,
  closeAddDiaryDialog,
  setIsEditStart,
} from "../../reducks/addDiary/operations";
import { getForm } from "../../reducks/addDiary/selector";
import {
  getIsDialogOpen,
  getIsStartEdit,
} from "../../reducks/addDiary/selector";
import { SaveButton, ValidationTextInput, CloseButton } from "../Uikit";
import { makeStyles } from "@material-ui/styles";
import { isCloseDialog } from "../../services/diary";

const useStyles = makeStyles((theme) => ({
  dialog: {
    [theme.breakpoints.down(600)]: {
      "& .MuiDialog-paperFullWidth": {
        width: "100%",
      },
      "& .MuiDialog-paperWidthSm": {
        maxWidth: "100%",
      },
      "& .MuiDialog-paper": {
        margin: 0,
      },
      "& .MuiDialog-paperScrollPaper": {
        maxHeight: "100%",
        height: "100%",
      },
    },
  },
}));

const AddDiaryDialog = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const form = getForm(selector);
  const open = getIsDialogOpen(selector);
  const isStartEdit = getIsStartEdit(selector);
  const isTextInvalid = !form.text && isStartEdit;

  return (
    <div>
      <Dialog
        className={classes.dialog}
        open={open}
        onClose={() => {
          if (isCloseDialog(form)) {
            dispatch(closeAddDiaryDialog());
          }
        }}
        fullWidth
        // fullScreen
      >
        <div className="dialogHeader">
          <DialogActions>
            <CloseButton
              onClick={() => {
                if (isCloseDialog(form)) {
                  dispatch(closeAddDiaryDialog());
                }
              }}
            />
          </DialogActions>
        </div>

        <DialogContent>
          <ValidationTextInput
            autoFocus={true}
            label="Diary"
            multiline={true}
            // rows={16}
            value={form.text}
            onChange={(e) => dispatch(setAddDiary({ text: e.target.value }))}
            onBlur={() => dispatch(setIsEditStart())}
            error={isTextInvalid}
            validationText="Text is required"
          />
        </DialogContent>
        <DialogActions>
          <SaveButton
            onClick={() => {
              dispatch(addDiary());
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddDiaryDialog;
