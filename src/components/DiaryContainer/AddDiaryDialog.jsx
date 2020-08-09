import React from 'react';
import {Dialog, DialogActions, DialogContent, IconButton} from '@material-ui/core';
import {Close} from "@material-ui/icons";
import { addDiary} from '../../reducks/users/operations';
import { useDispatch, useSelector } from 'react-redux';
import { setAddDiary, closeAddDiaryDialog, setIsEditStart } from '../../reducks/addDiary/operations';
import {getForm} from "../../reducks/addDiary/selector";
import {getIsDialogOpen, getIsStartEdit} from "../../reducks/addDiary/selector";
import { SaveButton, ValidationTextInput } from '../Uikit';
import {makeStyles } from "@material-ui/styles";
import {isCloseDialog} from "../../services/diary";

const useStyles = makeStyles({
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
  },
  validation: {
    height: 20
  }
});

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
        className="dialg" 
        open={open} 
        onClose={() => {
          if(isCloseDialog(form)){
            dispatch(closeAddDiaryDialog())
          }
        }} 
        fullWidth 
      >
        <div className={classes.dialogHeader}>
          <DialogActions>
              <IconButton 
              onClick={() => {
                if(isCloseDialog(form)){
                  dispatch(closeAddDiaryDialog())
                }
              }} 
              size="small">
                <Close className={classes.icon} />
              </IconButton>
          </DialogActions>
        </div>
        
        <DialogContent>
          <ValidationTextInput
            autoFocus={true}
            label="Diary"
            multiline={true}
            rows={18}
            value={form.text}
            onChange={e => dispatch(setAddDiary({text: e.target.value}))}
            onBlur={() => dispatch(setIsEditStart())}
            error={isTextInvalid}
            validationText="Text is required"
          />
        </DialogContent>
        <DialogActions>
          <SaveButton 
            onClick={() => {
              dispatch(addDiary())
            }} 
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddDiaryDialog;