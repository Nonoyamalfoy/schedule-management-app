import React from "react";
import TextField from "@material-ui/core/TextField";

const TextInput = (props) => {
  return(
    <TextField 
      fullWidth={true}
      label={props.label}
      margin="dense"
      multiline={props.multiline}
      required={props.required}
      rows={props.rows}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
      onBlur={props.onBlur}
      error={props.error}

      className={props.className}
      inputProps={{style: {fontSize: 17}}}
      InputLabelProps={{style: {fontSize: 17}}}
      autoFocus={props.autoFocus}
    />
  )
}

export default TextInput;