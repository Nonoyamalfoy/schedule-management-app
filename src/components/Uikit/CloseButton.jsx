import React from "react";
import {IconButton} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import {useDispatch} from "react-redux";
import {makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  icon:{
    color: "white"
  }
})

const CloseButton = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <IconButton
      onClick={() => dispatch(props.onClick)}
      size="small"
    >
      <Close className={classes.icon} />
    </IconButton>
  );
};

export default CloseButton;
