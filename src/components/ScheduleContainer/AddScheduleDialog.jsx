import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import {
  getIsDialogOpen,
  getIsStartEdit,
  getForm,
} from "../../reducks/addSchedule/selector";
import {
  closeAddScheduledialog,
  setIsEditStart,
} from "../../reducks/addSchedule/operation";
import {
  LocationOnOutlined,
  NotesOutlined,
  AccessTime,
  Close,
} from "@material-ui/icons";
import { DatePicker } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/styles";
import { setAddSchedule } from "../../reducks/addSchedule/operation";
import { addSchedule } from "../../reducks/users/operations";
import { TextInput, SaveButton, SelectBox, ValidationTextInput } from "../Uikit";
import { setScheduleColor } from "../../services/schedule";
import { isCloseDialog } from "../../services/schedule";

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
    justifyContent: "flex-end",
    minHeight: 48,
    backgroundColor: "#3f51b5",
    color: "white",
    alignItems: "center",
  },
  icon: {
    color: "white",
  },
  validation: {
    height: 20,
  },
});

const AddScheduleDialog = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const form = getForm(selector);
  const isDialogOpen = getIsDialogOpen(selector);
  const isStartEdit = getIsStartEdit(selector);
  const isTitleInvalid = !form.title && isStartEdit;
  const scheduleColor = setScheduleColor(form.color);

  const colors = [
    { id: "default", name: "default" },
    { id: "red", name: "red" },
    { id: "orange", name: "orange" },
    { id: "green", name: "green" },
  ];

  return (
    <Dialog
      className="dialog"
      open={isDialogOpen}
      onClose={() => {
        if (isCloseDialog(form)) {
          dispatch(closeAddScheduledialog());
        }
      }}
      maxWidth="xs"
      fullWidth
    >
      <div className={classes.dialogHeader}>
        <DialogActions>
          <IconButton
            onClick={() => {
              if (isCloseDialog(form)) {
                dispatch(closeAddScheduledialog());
              }
            }}
            size="small"
          >
            <Close className={classes.icon} />
          </IconButton>
        </DialogActions>
      </div>

      <DialogContent>
        <ValidationTextInput
          autoFocus={true}
          label="Title"
          value={form.title}
          onChange={(e) => dispatch(setAddSchedule({ title: e.target.value }))}
          onBlur={() => dispatch(setIsEditStart())}
          error={isTitleInvalid}
          validationText="Title is required"
        />
        <Grid container spacing={1} alignItems="center" justify="space-between">
          <Grid item>
            <span
              style={{ backgroundColor: scheduleColor }}
              className={classes.box}
            ></span>
          </Grid>

          <Grid item xs={10}>
            <SelectBox
              label="Color"
              required={true}
              options={colors}
              select={(c) => dispatch(setAddSchedule({ color: c }))}
              value={form.color}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center" justify="space-between">
          <Grid item>
            <AccessTime />
          </Grid>
          <Grid item xs={10}>
            <DatePicker
              value={form.date}
              onChange={(d) =>
                dispatch(setAddSchedule({ date: d.format("YYYYMMDD") }))
              }
              variant="inline"
              format="YYYY/MM/DD"
              animateYearScrolling
              disableToolbar
              fullWidth
              inputProps={{ style: { fontSize: 17 } }}
              InputLabelProps={{ style: { fontSize: 17 } }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center" justify="space-between">
          <Grid item>
            <LocationOnOutlined />
          </Grid>
          <Grid item xs={10}>
            <TextInput
              label="Location"
              value={form.location}
              onChange={(e) =>
                dispatch(setAddSchedule({ location: e.target.value }))
              }
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center" justify="space-between">
          <Grid item>
            <NotesOutlined />
          </Grid>
          <Grid item xs={10}>
            <TextInput
              label="Description"
              value={form.description}
              onChange={(e) =>
                dispatch(setAddSchedule({ description: e.target.value }))
              }
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <SaveButton
          onClick={() => {
            dispatch(addSchedule());
          }}
        />
      </DialogActions>
    </Dialog>
  );
};

export default AddScheduleDialog;
