import { Container, Grid, Typography } from "@material-ui/core";
import ContainedButton from "../components/butttons/ContainedButton";
import React from "react";
import useStyles from "../style/Styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <footer>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={10}
          justify="space-around"
          className={classes.footer}
        >
          <Grid item>
            <Typography color="secondary">Link1</Typography>
          </Grid>
          <Grid item>
            <Typography color="secondary">Link2</Typography>
          </Grid>
          <Grid item>
            <Typography color="secondary">Link3</Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
