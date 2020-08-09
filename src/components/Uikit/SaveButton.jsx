import React from "react";
import Button from "@material-ui/core/Button";

const SaveButton = (props) => {
  return (
    <Button 
    variant="contained"
    color="primary"
    onClick={() => props.onClick()}
    >
      Save
    </Button>
  )
}

export default SaveButton