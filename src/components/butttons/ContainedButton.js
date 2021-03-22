import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

const ContainedButton = (props) => {
  return (
    <Button variant="contained" color={props.color}>
      {props.information}
    </Button>
  );
};

ContainedButton.propTypes = {
  color: PropTypes.string.isRequired,
  information: PropTypes.string.isRequired,
};

export default ContainedButton;
