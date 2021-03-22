import { Container, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "../../style/Styles";

const Main = () => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="xl">
        <Grid container spacing={2} justify="space-evenly">
          <Grid item>
            <Container maxWidth="xl"></Container>
          </Grid>
          <Grid item>
            <Container maxWidth="xl"></Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Main;
