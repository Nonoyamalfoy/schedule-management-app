import React from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/styles";


const useStyles = makeStyles({
  primaryButton: {
    backgroundColor: "#3f51b5",
    color: "white",
    fontSize: 16,
    height: 48,
    marginButton: 16,
    width: 256
  }
})

const PrimaryButton = (props) => {
  const classes = useStyles();
  return (
    <Button 
    className={classes.primaryButton}
    variant="contained"
    onClick={() => props.onClick()}
    >
      {props.label}
    </Button>
  )
}

export default PrimaryButton