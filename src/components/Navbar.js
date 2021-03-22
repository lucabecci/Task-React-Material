import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import useStyles from "../style/Styles";
import React, { Fragment } from "react";

const Navbar = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <AppBar position="relative" color="secondary" elevation={0}>
        <Toolbar>
          <AssignmentTurnedInIcon className={classes.iconNav} />
          <Typography variant="h6" color="primary" noWrap>
            Task App
          </Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
