import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

const OutlinedButton = (props) => {
  return (
    <Button variant="outlined" color={props.color}>
      {props.information}
    </Button>
  );
};

OutlinedButton.propTypes = {
  color: PropTypes.string.isRequired,
  information: PropTypes.string.isRequired,
};

export default OutlinedButton;
