import { Container, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "../../style/Styles";

const Main = () => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={0} justify="space-evenly">
          <Grid item>
            <Container maxWidth="sm">
              <Typography
                variant='h4'
                align='center'
                gutterBottom
              >Where you can have a control of your day</Typography>
              <Typography
                variant='h6'
                align='justify'
                color='textSecondary'
                gutterBottom
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar est ex, vitae pharetra mi condimentum consectetur. Ut lacinia sem vel metus hendrerit pulvinar. Nunc non molestie purus. Suspendisse facilisis nisl orci, sit amet placerat sem accumsan vitae. Quisque feugiat ex vel mauris congue, vel faucibus magna viverra. Vivamus tempus, lectus ut pharetra commodo, ante nulla egestas lorem, a viverra orci nunc tincidunt ante. Donec mattis ipsum velit, ut lacinia elit ultricies nec. Cras faucibus fringilla sem, sit amet tristique sapien vestibulum sit amet. Fusce blandit, odio aliquam ultrices finibus, felis nibh imperdiet est, sed molestie turpis lorem in magna.
              </Typography>
            </Container>
          </Grid>
          <Grid item>
            <Container maxWidth="sm" fixed>
              <Paper variant="outlined">
                <img className={classes.images} alt='tasks' src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80" />
              </Paper>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Main;
