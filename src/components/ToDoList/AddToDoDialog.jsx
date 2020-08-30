import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {Dialog, DialogContent, DialogActions, Grid} from "@material-ui/core";
import {
  getIsDialogOpen,
  getIsStartEdit,
  getForm,
} from "../../reducks/addToDo/selector";
import {
  closeAddToDodialog,
  setIsEditStart,
} from "../../reducks/addToDo/operation";
import {
  Timer,
} from "@material-ui/icons";
import { DateTimePicker } from "@material-ui/pickers";
import { setAddToDo } from "../../reducks/addToDo/operation";
import { addToDo } from "../../reducks/users/operations";
import { SaveButton, ValidationTextInput, CloseButton } from "../Uikit";
import { isCloseDialog } from "../../services/ToDo";

const AddToDoDialog = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const form = getForm(selector);
  const isDialogOpen = getIsDialogOpen(selector);
  const isStartEdit = getIsStartEdit(selector);
  const isTextInvalid = !form.text && isStartEdit;

  return (
    <Dialog
      className="dialog"
      open={isDialogOpen}
      onClose={() => {
        if (isCloseDialog(form)) {
          dispatch(closeAddToDodialog());
        }
      }}
      maxWidth="xs"
      fullWidth
    >
      <div className="dialogHeader">
        <DialogActions>
          <CloseButton onClick={() => {
              if (isCloseDialog(form)) {
                dispatch(closeAddToDodialog());
              }
            }}/>
        </DialogActions>
      </div>

      <DialogContent>
        <ValidationTextInput
          autoFocus={true}
          label="Text"
          value={form.text}
          onChange={(e) => dispatch(setAddToDo({text: e.target.value }))}
          onBlur={() => dispatch(setIsEditStart())}
          error={isTextInvalid}
          validationText="Text is required"
        />
        <Grid container spacing={1} alignItems="center" justify="space-between">
          <Grid item>
            <Timer />
          </Grid>
          <Grid item xs={10}>
            <DateTimePicker
              value={form.deadline}
              placeholder="deadline"
              // label="deadline"
              ampm={false}
              onChange={(d) =>
                dispatch(setAddToDo({ deadline: d.format("YYYYMMDDHHmm") }))
              }
              variant="inline"
              format="YYYY/MM/DD HH:mm"
              animateYearScrolling
              disableToolbar
              fullWidth
              inputProps={{ style: { fontSize: 17 } }}
              InputLabelProps={{ style: { fontSize: 17 } }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <SaveButton
          onClick={() => {
            dispatch(addToDo());
          }}
        />
      </DialogActions>
    </Dialog>
  );
};

export default AddToDoDialog;
