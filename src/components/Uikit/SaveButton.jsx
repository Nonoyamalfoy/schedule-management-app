import React from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  saveButton: {
    backgroundColor: "#20295f",
    color: "white",
    "&:hover": {
      backgroundColor: "#20295f",
      color: "grey"
    },
  },
})

const SaveButton = (props) => {
  const classes = useStyles();
  return (
    <Button 
    variant="contained"
    // color="primary"
    className={classes.saveButton}
    onClick={() => props.onClick()}
    >
      Save
    </Button>
  )
}

export default SaveButton