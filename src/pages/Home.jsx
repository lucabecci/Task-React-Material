import { Container, Divider, Grid, Typography } from "@material-ui/core";
import useStyles from "../style/Styles";
import { Fragment } from "react";
import ContainedButton from "../components/butttons/ContainedButton";
import OutlinedButton from "../components/butttons/OutlinedButton";
import Main from "../components/information/Main";

const Home = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Welcome to my task app with Material UI
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely.
        </Typography>
        <div className={classes.homeButtons}>
          <Grid container spacing={2} justify="center" >
            <Grid item>
              <ContainedButton color="primary" information="Task Section" />
            </Grid>
            <Grid item>
              <OutlinedButton color="primary" information="About Section" />
            </Grid>
          </Grid>
        </div>
      </Container>
      <Divider
        className={classes.divider}
      ></Divider>
      <Main/>
    </Fragment>
  );
};

export default Home;
